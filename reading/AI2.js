    (function() {
        const ANALYTICS_KEY = 'quran_user_analytics';
        const AI_SECTION_ID = 'ai-section';
        const AI_ROW_ID = 'ai-row';

        // 1. Analytics & Storage Helpers
        function getAnalytics() {
            return JSON.parse(localStorage.getItem(ANALYTICS_KEY)) || { reads: [], searches: [] };
        }

        function saveAnalytics(data) {
            // Keep only last 20 reads and 10 searches to save space
            if (data.reads.length > 20) data.reads = data.reads.slice(-20);
            if (data.searches.length > 10) data.searches = data.searches.slice(-10);
            localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
        }

        function trackRead(chapterNum) {
            const data = getAnalytics();
            // Remove if exists (to move to end) and push new
            data.reads = data.reads.filter(r => r !== chapterNum);
            data.reads.push(chapterNum);
            saveAnalytics(data);
            console.log("AI Tracker: Read recorded", chapterNum);
        }

        function trackSearch(query) {
            if (!query || query.length < 3) return;
            const data = getAnalytics();
            // Avoid duplicates at the end
            if (data.searches[data.searches.length - 1] !== query) {
                data.searches.push(query);
                saveAnalytics(data);
                console.log("AI Tracker: Search recorded", query);
            }
        }

        // 2. Monkey-Patching Global Functions
        // We wrap the existing functions to inject tracking without breaking them
        
        // Wait for main script to define these functions
        const patchInterval = setInterval(() => {
            if (typeof window.launchPlayer === 'function' && !window.launchPlayer.isPatched) {
                const originalLaunch = window.launchPlayer;
                window.launchPlayer = function(chapter, verse) {
                    trackRead(parseInt(chapter));
                    return originalLaunch(chapter, verse);
                };
                window.launchPlayer.isPatched = true;
            }

            // Hook into the search function if it exists, or just listen to input
            // Based on your code, `performAISearch` is used.
            if (typeof window.performAISearch === 'function' && !window.performAISearch.isPatched) {
                const originalSearch = window.performAISearch;
                window.performAISearch = function() {
                    // Capture the search string from the global variable defined in main script
                    if (typeof searchString !== 'undefined') trackSearch(searchString);
                    return originalSearch();
                };
                window.performAISearch.isPatched = true;
            }
        }, 1000);

        // Stop patching attempts after 10 seconds
        setTimeout(() => clearInterval(patchInterval), 10000);


        // 3. Fetch & Render Recommendations
        async function loadAIRecommendations() {
            const data = getAnalytics();
            
            // Don't fetch if user is brand new (no data)
            if (data.reads.length === 0) return;

            try {
                // Ensure quranData is ready before we try to render
                if (typeof quranData === 'undefined' || quranData.length === 0) {
                    setTimeout(loadAIRecommendations, 500); // Retry in 500ms
                    return;
                }

                const response = await fetch('/api/recommend', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (!response.ok) return; // Silent fail if API down or 405

                const recommendedIds = await response.json();
                
                if (Array.isArray(recommendedIds) && recommendedIds.length > 0) {
                    renderAISection(recommendedIds);
                }

            } catch (e) {
                console.warn("AI Recommendation failed:", e);
            }
        }

        function renderAISection(ids) {
            const container = document.getElementById(AI_ROW_ID);
            const section = document.getElementById(AI_SECTION_ID);
            
            if(!container || !section) return;

            container.innerHTML = '';
            
            ids.forEach(id => {
                // quranData is global from the main script
                // API returns 1-based IDs, quranData is 0-indexed array usually, 
                // but we need to find by chapterNumber property to be safe
                const surah = quranData.find(s => s.chapterNumber === id);
                if (!surah) return;

                const card = document.createElement('div');
                card.className = 'surah-card ai-card-border'; // Add the special class
                card.tabIndex = 0;
                card.innerHTML = `
                    <div class="card-bg-num" style="color:rgba(0,255,187,0.05)">${surah.chapterNumber}</div>
                    <div class="card-title">${surah.title}</div>
                    <div class="card-sub">${surah.english_name || ''}</div>
                `;
                
                // Use the global launchPlayer (which is now patched!)
                card.onclick = () => window.launchPlayer(surah.chapterNumber, 1);
                card.onkeydown = (e) => { if(e.key === 'Enter') window.launchPlayer(surah.chapterNumber, 1); };
                
                // Re-use the existing preview logic if available
                if (typeof schedulePreview === 'function') {
                    card.onfocus = () => schedulePreview(surah.chapterNumber);
                    card.onmouseenter = () => card.focus();
                }

                container.appendChild(card);
            });

            // Reveal the section
            section.style.display = 'block';
        }

        // Initialize on load
        window.addEventListener('load', () => {
            // Wait a moment for things to settle, then fetch
            setTimeout(loadAIRecommendations, 1500);
        });

    })();
