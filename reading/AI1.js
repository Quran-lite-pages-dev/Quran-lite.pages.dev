    (function() {
        const ANALYTICS_KEY = 'quran_user_analytics';
        const AI_SECTION_ID = 'ai-section';
        const AI_ROW_ID = 'ai-row';

        // 1. Analytics & Storage Helpers
        function getAnalytics() {
            // Retrieves the user analytics object from localStorage
            return JSON.parse(localStorage.getItem(ANALYTICS_KEY)) || { reads: [], searches: [] };
        }

        function saveAnalytics(data) {
            // Limits the history size and saves it back to localStorage
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
        
        // Wait for main script to define these functions
        const patchInterval = setInterval(() => {
            // Patch launchPlayer to track reads
            if (typeof window.launchPlayer === 'function' && !window.launchPlayer.isPatched) {
                const originalLaunch = window.launchPlayer;
                window.launchPlayer = function(chapter, verse) {
                    trackRead(parseInt(chapter));
                    return originalLaunch(chapter, verse);
                };
                window.launchPlayer.isPatched = true;
                console.log("AI Tracker: Patched launchPlayer");
            }

            // Patch performAISearch to track searches (assumes searchString is a global variable)
            if (typeof window.performAISearch === 'function' && !window.performAISearch.isPatched) {
                const originalSearch = window.performAISearch;
                window.performAISearch = function() {
                    if (typeof searchString !== 'undefined') trackSearch(searchString);
                    return originalSearch();
                };
                window.performAISearch.isPatched = true;
                console.log("AI Tracker: Patched performAISearch");
            }
            
            // If both are patched, we can stop the interval
            if (window.launchPlayer?.isPatched && window.performAISearch?.isPatched) {
                clearInterval(patchInterval);
            }
        }, 500); // Check more frequently

        // Stop patching attempts after 10 seconds
        setTimeout(() => clearInterval(patchInterval), 10000);


        // 3. Fetch & Render Recommendations
        async function loadAIRecommendations() {
            // *** CRITICAL FIX: Get the latest analytics data right before sending ***
            const data = getAnalytics(); 
            
            // Do not fetch if user is brand new (no data)
            if (!data.reads || data.reads.length === 0) {
                console.log("AI Tracker: Not enough read data to request recommendations.");
                return;
            }

            try {
                // Ensure quranData is ready before we try to render
                if (typeof quranData === 'undefined' || quranData.length === 0) {
                    setTimeout(loadAIRecommendations, 500); // Retry in 500ms
                    return;
                }

                console.log("AI Tracker: Sending request with data:", data);

                const response = await fetch('/api/recommend', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    // Send the collected data
                    body: JSON.stringify(data) 
                });

                if (!response.ok) {
                    console.error("AI Recommendation API responded with status:", response.status);
                    return;
                }

                const recommendedIds = await response.json();
                
                if (Array.isArray(recommendedIds) && recommendedIds.length > 0) {
                    renderAISection(recommendedIds);
                } else {
                    // This handles the case where the Worker's logic returns [] 
                    // because the user has less than 2 reads.
                    console.log("AI Tracker: Recommendations received, but list is empty.");
                }

            } catch (e) {
                console.error("AI Recommendation fetch failed:", e);
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
            console.log("AI Tracker: Recommendations rendered.");
        }

        // Initialize on load
        window.addEventListener('load', () => {
            // Wait a moment for things to settle, then fetch
            setTimeout(loadAIRecommendations, 1500);
        });

    })();
