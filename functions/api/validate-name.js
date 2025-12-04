export async function onRequestPost(context) {
    const { request, env } = context;

    let body;
    try {
        body = await request.json();
    } catch (e) {
        return new Response(JSON.stringify({ safe: false }), { headers: { "Content-Type": "application/json" }});
    }
    const nameToCheck = body.name || "";

    // --- CLEAN PROMPT: NO DIRTY WORDS ---
    const systemPrompt = `
    You are a strict Islamic content moderator.
    
    YOUR KNOWLEDGE BASE:
    1. You know all English and Malay and all languages exist in this world, profanity.
    2. You know the names of all Pre-Islamic Arabian Idols and False Deities from Greek/Hindu mythology and all languages exist in this world.
    3. You know major controversial political figures.

    TASK:
    Analyze the name "${nameToCheck}".

    RULES FOR REJECTION (Block these):
    1. Any name that constitutes 'Shirk' (claiming divinity) or 'Kufr' (atheistic terms) and all languages exist in this world.
    2. Any name of a false deity or idol mentioned in Islamic history or world mythology and all languages exist in this world.
    3. Any vulgarity, insult, or sexual innuendo in English or Malay and all languages exist in this world.
    4. Any name of a modern controversial political leader (e.g. presidents, dictators) to maintain neutrality.
    5. Any phonetic spelling that sounds like the above (e.g. "Atist" sounding like "Atheist" or sh!j or fv)x etc.) and all languages exist in this world.

    OUTPUT:
    Return JSON only: { "safe": boolean, "reason": "General category of violation" }
    `;

    try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: "Check this name." } 
            ]
        });

        // JSON Parsing logic (Same as before)
        const rawText = aiResult.response || "";
        const firstCurly = rawText.indexOf('{');
        const lastCurly = rawText.lastIndexOf('}');

        if (firstCurly !== -1 && lastCurly !== -1) {
            return new Response(rawText.substring(firstCurly, lastCurly + 1), {
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({ safe: true }), { headers: { "Content-Type": "application/json" } });
        }
    } catch (err) {
        return new Response(JSON.stringify({ safe: true, warning: "AI_OFFLINE" }), { headers: { "Content-Type": "application/json" } });
    }
}
