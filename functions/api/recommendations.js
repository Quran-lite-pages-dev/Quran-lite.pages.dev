export async function onRequest(context) {
    const { request, env } = context;

    // 1. CORS Headers (Crucial for the fetch call from the frontend)
    // Same CORS fix as applied to search.js
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle OPTIONS (Preflight) request
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
        return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    try {
        // Parse the history data sent from the frontend
        const historyPayload = await request.json();
        const lastPlayed = historyPayload.last_played;
        // Join the search history into a single string for the AI prompt
        const searchHistory = historyPayload.search_history.join(', ');

        const systemPrompt = `
          You are a sophisticated Quranic Recommendation Engine.
          Your goal is to accept a user's history (last played Surah and search queries) and recommend 3 to 5 highly relevant Surahs (chapters).
          
          Rules:
          1. You must return ONLY a raw JSON array of integers (Surah numbers 1-114).
          2. No markdown, no explanation, no conversational text.
          3. If the user has a last played Surah, suggest related Surahs or those that offer further context.
          4. If the user has search history, recommend Surahs that cover those specific concepts (e.g., searching "Moses" suggests Surah 20, 26, 28).
          5. Ensure the recommended Surahs are diverse and relevant to the user's inferred interest.
          6. Example output: [36, 18, 55, 4, 12]
        `;

        const userPrompt = `
          User's Last Played Surah Number: ${lastPlayed ? lastPlayed : 'None'}
          User's Recent Search History: ${searchHistory ? searchHistory : 'None'}
          
          Based on this history, what are 3 to 5 most relevant Surah numbers to recommend?
        `;

        // Run the AI model with the system and user prompts
        const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ]
        });

        let rawText = response.response;
        
        // Clean up AI output if it adds markdown code blocks
        const match = rawText.match(/\[[\s\d,]*\]/);
        if (match) {
           rawText = match[0];
        }

        // Return the final JSON array
        return new Response(rawText, {
          headers: { 
              ...corsHeaders,
              "Content-Type": "application/json" 
          }
        });

    } catch (e) {
      console.error("Recommendation Error:", e);
      // Return empty array on error so the frontend hides the section gracefully
      return new Response(JSON.stringify([]), { 
          status: 500,
          headers: { 
              ...corsHeaders,
              "Content-Type": "application/json" 
          } 
      });
    }
}
