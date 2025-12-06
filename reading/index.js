 <script>
        // --- 1. CONFIG & METADATA ---
        const SURAH_METADATA = [
          { "chapter": 1, "english_name": "The Opening", "description": "Revealed in Mecca, this is the fundamental prayer of Islam, summarizing the core relationship between God and humanity. It is recited in every unit of prayer. (7 verses)" },
          { "chapter": 2, "english_name": "The Cow", "description": "The longest Surah, revealed in Medina. It establishes Islamic laws, recounts the stories of Moses (Peace be upon him), and guides the new Muslim community. (286 verses)" },
          { "chapter": 3, "english_name": "The Family of Imran", "description": "A Medinan chapter focusing on the Oneness of God, the family of Mary (Peace be upon her) and Jesus (Peace be upon him), and lessons from the Battle of Uhud. (200 verses)" },
          { "chapter": 4, "english_name": "The Women", "description": "Revealed in Medina after the Battle of Uhud, addressing the rights of women, care for orphans, inheritance laws, and the protection of the vulnerable within society. (176 verses)" },
          { "chapter": 5, "english_name": "The Table Spread", "description": "One of the last revealed Surahs, finalizing dietary laws and discussing the miracle of the table requested by the disciples of Jesus (Peace be upon him) and the fulfillment of covenants. (120 verses)" },
          { "chapter": 6, "english_name": "The Cattle", "description": "A late Meccan Surah emphasizing pure monotheism, rejecting superstition, and detailing the nature of God's infinite power over creation. (165 verses)" },
          { "chapter": 7, "english_name": "The Heights", "description": "A Meccan chapter detailing the history of prophets from Adam (Peace be upon him) to Moses (Peace be upon him), warning against arrogance and describing the Day of Judgment. (206 verses)" },
          { "chapter": 8, "english_name": "The Spoils of War", "description": "Revealed after the Battle of Badr, clarifying the ethics of warfare, the distribution of spoils, and the importance of placing full trust in God. (75 verses)" },
          { "chapter": 9, "english_name": "The Repentance", "description": "A Medinan text issued before the Tabuk expedition, addressing treaty violations by polytheists and the issue of hypocrisy; it is the only Surah that does not begin with 'Bismillah'. (129 verses)" },
          { "chapter": 10, "english_name": "Jonah", "description": "A Meccan Surah emphasizing God's Oneness and citing the story of the people of Jonah (Peace be upon him), who were saved by their timely repentance. (109 verses)" },
          { "chapter": 11, "english_name": "Hud", "description": "Revealed during a difficult period in Mecca, recounting stories of previous prophets like Noah (Peace be upon him) and Hud (Peace be upon him) to comfort the Prophet Muhammad (Peace be upon him). (123 verses)" },
          { "chapter": 12, "english_name": "Joseph", "description": "A unique Meccan Surah devoted entirely to the story of Joseph (Peace be upon him), illustrating patience, divine destiny, and family reconciliation. (111 verses)" },
          { "chapter": 13, "english_name": "The Thunder", "description": "Revealed in Medina, utilizing natural phenomena like thunder to argue for the existence of God and the absolute truth of the resurrection. (43 verses)" },
          { "chapter": 14, "english_name": "Abraham", "description": "A Meccan chapter highlighting the prayer of Abraham (Peace be upon him) for the sanctuary of Mecca and contrasting the gratitude of believers with the ingratitude of disbelievers. (52 verses)" },
          { "chapter": 15, "english_name": "The Rocky Tract", "description": "A Meccan Surah reassuring the Prophet (Peace be upon him) against mockery and detailing the story of Satan's refusal to bow to Adam (Peace be upon him). (99 verses)" },
          { "chapter": 16, "english_name": "The Bee", "description": "A Meccan chapter calling attention to God's blessings in nature, specifically the bee, and warning against associating partners with God. (128 verses)" },
          { "chapter": 17, "english_name": "The Night Journey", "description": "Commemorates the Prophet Muhammad's (Peace be upon him) miraculous night journey from Mecca to Jerusalem and ascension to the heavens, establishing the five daily prayers. (111 verses)" },
          { "chapter": 18, "english_name": "The Cave", "description": "A Meccan Surah telling the story of the Sleepers of the Cave and Moses (Peace be upon him), focusing on maintaining faith during times of trial. (110 verses)" },
          { "chapter": 19, "english_name": "Mary", "description": "A Meccan chapter detailing the miraculous births of Jesus (Peace be upon him) and John (Peace be upon him), emphasizing God's mercy and refuting the concept of God having a son. (98 verses)" },
          { "chapter": 20, "english_name": "Ta-Ha", "description": "Revealed in Mecca, this Surah details the story of Moses (Peace be upon him) confronting Pharaoh and offers comfort to the Prophet Muhammad (Peace be upon him). (135 verses)" },
          { "chapter": 21, "english_name": "The Prophets", "description": "A Meccan text referencing many prophets (Peace be upon them) to show the continuity of the divine message and the inevitability of Judgment Day. (112 verses)" },
          { "chapter": 22, "english_name": "The Pilgrimage", "description": "A Medinan Surah establishing the rituals of the Hajj pilgrimage and giving permission to believers to defend themselves against oppression. (78 verses)" },
          { "chapter": 23, "english_name": "The Believers", "description": "Revealed in Mecca, outlining the moral qualities of true believers and the miraculous stages of human embryonic development. (118 verses)" },
          { "chapter": 24, "english_name": "The Light", "description": "A Medinan chapter focusing on social ethics, laws against slander (specifically regarding Aisha, may Allah be pleased with her), and the famous 'Verse of Light'. (64 verses)" },
          { "chapter": 25, "english_name": "The Criterion", "description": "A Meccan Surah distinguishing right from wrong, answering objections raised against the Quran, and describing the virtues of the 'Servants of the Most Merciful'. (77 verses)" },
          { "chapter": 26, "english_name": "The Poets", "description": "A Meccan chapter recounting the struggles of past prophets (Peace be upon them) and criticizing poets who mislead people with falsehoods. (227 verses)" },
          { "chapter": 27, "english_name": "The Ant", "description": "Revealed in Mecca, featuring the story of Solomon (Peace be upon him), the Queen of Sheba, and the ant, emphasizing knowledge and gratitude. (93 verses)" },
          { "chapter": 28, "english_name": "The Narratives", "description": "A Meccan Surah detailing the life of Moses (Peace be upon him) before prophethood and the arrogance of Korah (Qarun) regarding wealth. (88 verses)" },
          { "chapter": 29, "english_name": "The Spider", "description": "A Meccan chapter using the metaphor of a spider's web to describe the fragility of false beliefs and the necessity of testing one's faith. (69 verses)" },
          { "chapter": 30, "english_name": "The Romans", "description": "Revealed in Mecca, predicting the Byzantine (Roman) victory over the Persians as a sign of God's control over historical events. (60 verses)" },
          { "chapter": 31, "english_name": "Luqman", "description": "A Meccan Surah containing the wisdom and advice of the sage Luqman to his son regarding faith, gratitude, and behavior. (34 verses)" },
          { "chapter": 32, "english_name": "The Prostration", "description": "A Meccan chapter emphasizing the creation of man, the revelation of the Book, and the absolute certainty of the Day of Judgment. (30 verses)" },
          { "chapter": 33, "english_name": "The Combined Forces", "description": "Revealed in Medina during the Battle of the Trench, addressing social reforms, adoption, and the status of the Prophet's (Peace be upon him) wives. (73 verses)" },
          { "chapter": 34, "english_name": "Sheba", "description": "A Meccan Surah contrasting the gratitude of David (Peace be upon him) and Solomon (Peace be upon him) with the ingratitude of the people of Sheba. (54 verses)" },
          { "chapter": 35, "english_name": "The Originator", "description": "A Meccan chapter praising God as the Creator of angels and the universe, warning against the deception of worldly life. (45 verses)" },
          { "chapter": 36, "english_name": "Ya-Sin", "description": "Known as the 'heart of the Quran', this Meccan Surah focuses on the Quran's divine source, the signs of nature, and the resurrection. (83 verses)" },
          { "chapter": 37, "english_name": "Those Who Set The Ranks", "description": "A Meccan chapter describing the ranks of angels and the eventual triumph of God's messengers (Peace be upon them) over opposition. (182 verses)" },
          { "chapter": 38, "english_name": "The Letter Sad", "description": "Revealed in Mecca, discussing the patience of prophets like David (Peace be upon him) and Job (Peace be upon him) and the arrogance of Satan. (88 verses)" },
          { "chapter": 39, "english_name": "The Troops", "description": "A Meccan Surah focusing heavily on the Oneness of God (Tawhid) and the distinct outcomes for believers and disbelievers. (75 verses)" },
          { "chapter": 40, "english_name": "The Forgiver", "description": "A Meccan chapter telling the story of a believing man in Pharaoh's court and emphasizing God's forgiveness and power. (85 verses)" },
          { "chapter": 41, "english_name": "Explained in Detail", "description": "A Meccan Surah describing the Quran's clarity and the testimony of man's own faculties (skin and ears) against him on Judgment Day. (54 verses)" },
          { "chapter": 42, "english_name": "The Consultation", "description": "A Meccan chapter emphasizing 'Shura' (consultation) among believers and the unity of the message given to all prophets (Peace be upon them). (53 verses)" },
          { "chapter": 43, "english_name": "The Ornaments of Gold", "description": "A Meccan Surah criticizing the obsession with worldly wealth and correcting false attributions of daughters/offspring to God. (89 verses)" },
          { "chapter": 44, "english_name": "The Smoke", "description": "A Meccan chapter warning of a coming punishment (smoke) and recounting the failure of Pharaoh to heed Moses (Peace be upon him). (59 verses)" },
          { "chapter": 45, "english_name": "The Crouching", "description": "A Meccan Surah describing the humility of all nations kneeling before God on Judgment Day and the proofs of God in nature. (37 verses)" },
          { "chapter": 46, "english_name": "The Wind-Curved Sandhills", "description": "A Meccan chapter mentioning the Jinn listening to the Quran and advising kindness and dutifulness to parents. (35 verses)" },
          { "chapter": 47, "english_name": "Muhammad (Peace be upon him)", "description": "A Medinan Surah named after the Prophet (Peace be upon him), focused on the believers' struggle for the cause of truth and the nullification of disbelievers' deeds. (38 verses)" },
          { "chapter": 48, "english_name": "The Victory", "description": "Revealed after the Treaty of Hudaybiyyah, declaring it a clear victory and promising the future peaceful conquest of Mecca. (29 verses)" },
          { "chapter": 49, "english_name": "The Rooms", "description": "A Medinan chapter teaching manners, respect for the Prophet (Peace be upon him), and the brotherhood of all believers regardless of race. (18 verses)" },
          { "chapter": 50, "english_name": "The Letter Qaf", "description": "A Meccan Surah emphasizing the resurrection and how every human deed is recorded by guardian angels. (45 verses)" },
          { "chapter": 51, "english_name": "The Winnowing Winds", "description": "A Meccan chapter discussing the purpose of creating humans and Jinn—solely to worship God. (60 verses)" },
          { "chapter": 52, "english_name": "The Mount", "description": "A Meccan Surah swearing by Mount Sinai, describing the bliss of Paradise for the righteous and the fate of deniers. (49 verses)" },
          { "chapter": 53, "english_name": "The Star", "description": "A Meccan chapter confirming the divine source of the Prophet's (Peace be upon him) vision during his ascension and refuting idol worship. (62 verses)" },
          { "chapter": 54, "english_name": "The Moon", "description": "A Meccan Surah referencing the splitting of the moon as a sign and recounting the punishments of past nations who rejected their prophets. (55 verses)" },
          { "chapter": 55, "english_name": "The Beneficent", "description": "A Meccan chapter known as the 'Bride of the Quran,' repeatedly asking 'Which of the favors of your Lord will you deny?' (78 verses)" },
          { "chapter": 56, "english_name": "The Inevitable", "description": "A Meccan Surah categorizing people into three groups in the afterlife: the foremost, the companions of the right, and the companions of the left. (96 verses)" },
          { "chapter": 57, "english_name": "The Iron", "description": "A Medinan chapter encouraging charity, described as a 'goodly loan' to God, and mentioning iron as a tool given for humanity's benefit. (29 verses)" },
          { "chapter": 58, "english_name": "The Pleading Woman", "description": "A Medinan Surah addressing marital issues and God's omniscience, hearing every conversation, including secret counsels. (22 verses)" },
          { "chapter": 59, "english_name": "The Exile", "description": "Revealed in Medina concerning the consequences for the Banu Nadir tribe who broke their treaty, and the distribution of wealth. (24 verses)" },
          { "chapter": 60, "english_name": "She That Is To Be Examined", "description": "A Medinan chapter regarding the treatment of women refugees and establishing that kindness is due to non-believers who do not fight against Muslims. (13 verses)" },
          { "chapter": 61, "english_name": "The Ranks", "description": "A Medinan Surah urging believers to align their actions with their words and predicting the coming of a messenger named Ahmad (Muhammad, Peace be upon him). (14 verses)" },
          { "chapter": 62, "english_name": "The Congregation", "description": "A Medinan chapter establishing the importance of the Friday congregational prayer (Jumu'ah) over worldly commerce. (11 verses)" },
          { "chapter": 63, "english_name": "The Hypocrites", "description": "A Medinan Surah exposing the deceit of the hypocrites who internally opposed the Prophet (Peace be upon him) while pretending to believe. (11 verses)" },
          { "chapter": 64, "english_name": "The Mutual Disillusion", "description": "A Medinan chapter describing Judgment Day as a day of mutual gain and loss, emphasizing reliance on God alone. (18 verses)" },
          { "chapter": 65, "english_name": "The Divorce", "description": "A Medinan Surah outlining the specific laws, waiting periods (Iddah), and maintenance rights regarding divorce. (12 verses)" },
          { "chapter": 66, "english_name": "The Prohibition", "description": "A Medinan chapter addressing a domestic incident in the Prophet's (Peace be upon him) household and holding up the righteous wives of Noah (Peace be upon him) and Lot (Peace be upon him) as examples. (12 verses)" },
          { "chapter": 67, "english_name": "The Sovereignty", "description": "A Meccan Surah affirming God's dominion over life and death. (30 verses)" },
          { "chapter": 68, "english_name": "The Pen", "description": "A Meccan chapter defending the Prophet's (Peace be upon him) sanity and character against accusers, and telling the parable of the owners of the garden. (52 verses)" },
          { "chapter": 69, "english_name": "The Reality", "description": "A Meccan Surah describing the inevitable destruction of past nations and the terrifying events of the Day of Judgment. (52 verses)" },
          { "chapter": 70, "english_name": "The Ascending Stairways", "description": "A Meccan chapter focusing on the patience required of the Prophet (Peace be upon him) and the eventual punishment of the disbelievers. (44 verses)" },
          { "chapter": 71, "english_name": "Noah", "description": "A Meccan Surah dedicated to Noah's (Peace be upon him) tireless but largely rejected preaching to his people before the flood. (28 verses)" },
          { "chapter": 72, "english_name": "The Jinn", "description": "A Meccan chapter recounting how a group of Jinn listened to the Quran and accepted Islam, acknowledging God's oneness. (28 verses)" },
          { "chapter": 73, "english_name": "The Enshrouded One", "description": "A Meccan Surah instructing the Prophet (Peace be upon him) to pray during the night and to bear patiently with those who deny the truth. (20 verses)" },
          { "chapter": 74, "english_name": "The Cloaked One", "description": "One of the earliest Meccan revelations, commanding the Prophet (Peace be upon him) to arise, warn the people, and purify himself. (56 verses)" },
          { "chapter": 75, "english_name": "The Resurrection", "description": "A Meccan chapter emphasizing the certainty of the resurrection and the Prophet's (Peace be upon him) eagerness to memorize the revelation. (40 verses)" },
          { "chapter": 76, "english_name": "Man", "description": "A Medinan Surah describing the rewards of the righteous in Paradise, particularly those who feed the poor, orphans, and captives. (31 verses)" },
          { "chapter": 77, "english_name": "The Emissaries", "description": "A Meccan chapter swearing by the winds, emphasizing the inevitability of the Day of Decision and warning deniers. (50 verses)" },
          { "chapter": 78, "english_name": "The Tidings", "description": "A Meccan Surah questioning those who deny the afterlife and vividly describing the day when the trumpet is blown. (40 verses)" },
          { "chapter": 79, "english_name": "Those Who Drag Forth", "description": "A Meccan chapter describing the angels who take souls at death and the story of Moses (Peace be upon him) calling Pharaoh to account. (46 verses)" },
          { "chapter": 80, "english_name": "He Frowned", "description": "A Meccan Surah correcting the Prophet (Peace be upon him) for prioritizing a wealthy leader over a blind man seeking knowledge. (42 verses)" },
          { "chapter": 81, "english_name": "The Overthrowing", "description": "A Meccan chapter depicting the cosmic upheavals at the end of the world, such as the sun being darkened. (29 verses)" },
          { "chapter": 82, "english_name": "The Cleaving", "description": "A Meccan Surah warning humanity about their delusion regarding God and describing the recording of deeds by angels. (19 verses)" },
          { "chapter": 83, "english_name": "The Defrauding", "description": "A Meccan chapter condemning those who cheat in business weights and measures, warning of the record of the wicked. (36 verses)" },
          { "chapter": 84, "english_name": "The Sundering", "description": "A Meccan Surah describing the sky splitting open and humanity laboring toward their Lord to receive their records. (25 verses)" },
          { "chapter": 85, "english_name": "The Mansions of the Stars", "description": "A Meccan chapter recounting the story of the People of the Ditch who were persecuted for their faith. (22 verses)" },
          { "chapter": 86, "english_name": "The Morning Star", "description": "A Meccan Surah discussing the creation of man and the distinctness of the Quran's message. (17 verses)" },
          { "chapter": 87, "english_name": "The Most High", "description": "A Meccan chapter emphasizing the purification of the soul and reminding that the Hereafter is better and more enduring. (19 verses)" },
          { "chapter": 88, "english_name": "The Overwhelming", "description": "A Meccan Surah contrasting the terrified state of the damned with the peaceful state of the believers in Paradise. (26 verses)" },
          { "chapter": 89, "english_name": "The Dawn", "description": "A Meccan chapter warning against the greed for wealth and mentioning the punishment of ancient tribes like Ad and Thamud. (30 verses)" },
          { "chapter": 90, "english_name": "The City", "description": "A Meccan Surah defining the 'steep path' of righteousness as freeing slaves and feeding the hungry. (20 verses)" },
          { "chapter": 91, "english_name": "The Sun", "description": "A Meccan chapter linking the purification of the soul to success and corruption to failure, citing the Thamud. (15 verses)" },
          { "chapter": 92, "english_name": "The Night", "description": "A Meccan Surah contrasting those who give in charity with those who are miserly, warning of the consequences. (21 verses)" },
          { "chapter": 93, "english_name": "The Morning Hours", "description": "Revealed in Mecca to comfort the Prophet (Peace be upon him) after a pause in revelation, promising that his future will be better than his past. (11 verses)" },
          { "chapter": 94, "english_name": "The Relief", "description": "A Meccan chapter reassuring the Prophet (Peace be upon him) that with every hardship comes ease and that his burden has been lifted. (8 verses)" },
          { "chapter": 95, "english_name": "The Fig", "description": "A Meccan Surah stating that man was created in the best stature but will fall to the lowest depth unless he believes and does good works. (8 verses)" },
          { "chapter": 96, "english_name": "The Clot", "description": "The first revelation received by the Prophet (Peace be upon him) in Mecca, commanding him to read in the name of his Lord. (19 verses)" },
          { "chapter": 97, "english_name": "The Power", "description": "A Meccan chapter describing the Night of Decree (Laylat al-Qadr), which is better than a thousand months. (5 verses)" },
          { "chapter": 98, "english_name": "The Clear Proof", "description": "A Medinan Surah distinguishing true believers from disbelievers among the People of the Book and polytheists. (8 verses)" },
          { "chapter": 99, "english_name": "The Earthquake", "description": "A Medinan chapter vividly describing the earth shaking on Judgment Day and yielding up its burdens and secrets. (8 verses)" },
          { "chapter": 100, "english_name": "The Courser", "description": "A Meccan Surah using the imagery of charging warhorses to describe the ungrateful nature of mankind. (11 verses)" },
          { "chapter": 101, "english_name": "The Calamity", "description": "A Meccan chapter depicting the Day of Judgment where people will be like scattered moths and mountains like wool. (11 verses)" },
          { "chapter": 102, "english_name": "The Rivalry in World Increase", "description": "A Meccan Surah warning that the obsession with accumulating more wealth and status distracts people until they reach the grave. (8 verses)" },
          { "chapter": 103, "english_name": "The Declining Day", "description": "A Meccan chapter summarizing that all mankind is in loss except those who believe, do good, and advise one another to truth and patience. (3 verses)" },
          { "chapter": 104, "english_name": "The Traducer", "description": "A Meccan Surah condemning the backbiter and the one who hoards wealth, warning of the crushing fire. (9 verses)" },
          { "chapter": 105, "english_name": "The Elephant", "description": "A Meccan chapter recalling the destruction of Abraha's army of elephants who attempted to destroy the Kaaba. (5 verses)" },
          { "chapter": 106, "english_name": "Quraysh", "description": "A Meccan Surah reminding the Quraysh tribe of God's protection and provision during their trading journeys. (4 verses)" },
          { "chapter": 107, "english_name": "The Small Kindnesses", "description": "A Meccan chapter condemning those who deny the judgment by mistreating orphans and performing prayers only to be seen. (7 verses)" },
          { "chapter": 108, "english_name": "The Abundance", "description": "The shortest Surah, revealed in Mecca, promising the Prophet (Peace be upon him) an abundance of good and the cutting off of his enemies. (3 verses)" },
          { "chapter": 109, "english_name": "The Disbelievers", "description": "A Meccan Surah declaring the absolute distinction between the worship of Muslims and the worship of polytheists. (6 verses)" },
          { "chapter": 110, "english_name": "The Divine Support", "description": "A Medinan chapter, one of the last revealed, predicting the mass entry of people into Islam and the Prophet's (Peace be upon him) passing. (3 verses)" },
          { "chapter": 111, "english_name": "The Palm Fiber", "description": "A Meccan Surah condemning Abu Lahab, an uncle and enemy of the Prophet (Peace be upon him), and his wife to the Fire. (5 verses)" },
          { "chapter": 112, "english_name": "The Sincerity", "description": "A Meccan chapter that is the essence of monotheism, declaring God is One, Eternal, with no offspring or equal. (4 verses)" },
          { "chapter": 113, "english_name": "The Daybreak", "description": "A Meccan Surah seeking refuge in the Lord of the dawn from the evil of created things and envy. (5 verses)" },
          { "chapter": 114, "english_name": "Mankind", "description": "A Meccan chapter seeking refuge in the Lord of mankind from the whispers of devils and men. (6 verses)" }
        ];

        // --- 2. MULTI-PROFILE & LOGIC ---
        const ACTIVE_PROFILE_ID = localStorage.getItem('quran_active_profile');
        if (!ACTIVE_PROFILE_ID) {
            window.location.href = '../'; 
            throw new Error("Redirecting...");
        }
        const STORAGE_KEY = `quranState_${ACTIVE_PROFILE_ID}`;

        const TRANSLATIONS_CONFIG = {
           'en': { name: 'English (Saheeh Intl) | Preferred', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/en.xml' },
            'sq': { name: 'Albanian (Sherif Ahmeti)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/sq.ahmeti.xml' },
            'ber': { name: 'Amazigh (At Mansour)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ber.mensur.xml' },
            'am': { name: 'Amharic (Sadiq & Sani)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/am.sadiq.xml' },
            'ar': { name: 'Arabic Tafsir (Al-Muyassar)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ar.muyassar.xml' },
            'az': { name: 'Azerbaijani (Musayev)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/az.musayev.xml' },
            'bn': { name: 'Bengali (Muhiuddin Khan)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/bn.bengali.xml' },
            'bs': { name: 'Bosnian (Besim Korkut)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/bs.korkut.xml' },
            'bg': { name: 'Bulgarian (Theophanov)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/bg.theophanov.xml' },
            'zh': { name: 'Chinese (Ma Jian)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/zh.jian.xml' },
            'cs': { name: 'Czech (Hrbek)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/cs.hrbek.xml' },
            'dv': { name: 'Divehi (Maldives)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/dv.divehi.xml' },
            'nl': { name: 'Dutch (Siregar)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/nl.siregar.xml' },
            'en': { name: 'English (Saheeh Intl)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/en.xml' },
            'fr': { name: 'French (Hamidullah)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/fr.hamidullah.xml' },
            'de': { name: 'German (Bubenheim)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/de.bubenheim.xml' },
            'ha': { name: 'Hausa (Gumi)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ha.gumi.xml' },
            'he': { name: 'Hebrew (Darussalam Assn. Quran ENC)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/he.xml' },
            'hi': { name: 'Hindi (Suhel Khan)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/hi.hindi.xml' },
            'id': { name: 'Indonesian (Kemenag)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/id.indonesian.xml' },
            'it': { name: 'Italian (Piccardo)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/it.piccardo.xml' },
            'ja': { name: 'Japanese (Standard)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ja.japanese.xml' },
            'ko': { name: 'Korean (Standard)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ko.korean.xml' },
            'ku': { name: 'Kurdish (Burhan)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ku.asan.xml' },
            'ms': { name: 'Malay (Basmeih)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ms.basmeih.xml' },
            'ml': { name: 'Malayalam (Abdul Hameed)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ml.abdulhameed.xml' },
            'no': { name: 'Norwegian (Berg)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/no.berg.xml' },
            'ps': { name: 'Pashto (Abdulwali Khan)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ps.abdulwali.xml' },
            'fa': { name: 'Persian (Mostafa)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/fa.khorramdel.xml' },
            'pl': { name: 'Polish (Bielawskiego)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/pl.bielawskiego.xml' },
            'pt': { name: 'Portuguese (El-Hayek)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/pt.elhayek.xml' },
            'ro': { name: 'Romanian (Grigore)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ro.grigore.xml' },
            'ru': { name: 'Russian (Kuliev)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ru.kuliev.xml' },
            'sd': { name: 'Sindhi (Amroti)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/sd.amroti.xml' },
            'so': { name: 'Somali (Abduh)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/so.abduh.xml' },
            'es': { name: 'Spanish (Isa García)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/es.garcia.xml' },
            'sw': { name: 'Swahili (Al-Barwani)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/sw.barwani.xml' },
            'sv': { name: 'Swedish (Bernström)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/sv.bernstrom.xml' },
            'ta': { name: 'Tamil (Jan Turst)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ta.tamil.xml' },
            'tt': { name: 'Tatar (Nugman)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/tt.nugman.xml' },
            'th': { name: 'Thai (King Fahad)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/th.thai.xml' },
            'tr': { name: 'Turkish (Diyanet)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/tr.diyanet.xml' },
            'ur': { name: 'Urdu (Junagarhi)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ur.junagarhi.xml' },
            'ug': { name: 'Uyghur (Muhammad Saleh)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/ug.saleh.xml' },
            'uz': { name: 'Uzbek (Muhammad Sodik)', url: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/uz.sodik.xml' }
        };

        const RECITERS_CONFIG = {
            'alafasy': { name: 'Mishary Alafasy', path: 'Alafasy_128kbps' },
            'juhaynee': { name: 'Al Juhany', path: 'Abdullaah_3awwaad_Al-Juhaynee_128kbps' },
            'sudais': { name: 'As Sudais', path: 'Abdurrahmaan_As-Sudais_192kbps' },
            'ghamadi': { name: 'Al Ghamdi', path: 'Ghamadi_40kbps' },
            'abbad': { name: 'Fares Abbad', path: 'Fares_Abbad_64kbps' },
            'muaiqly': { name: 'Al Muaiqly', path: 'MaherAlMuaiqly128kbps' },
            'shuraym': { name: 'Ash Shuraym', path: 'Saood_ash-Shuraym_128kbps' },
            'basit': { name: 'Abdul Basit', path: 'Abdul_Basit_Murattal_192kbps' }
        };

        const TRANSLATION_AUDIO_CONFIG = {
            'none': { name: 'No Audio Translation' },
            'en_walk': { name: 'English (Ibrahim Walk)', path: 'English/Sahih_Intnl_Ibrahim_Walk_192kbps' },
            'id_ministry': { name: 'Indonesian (Ministry)', path: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/play/id' },
            'es': { name: 'Español', path: 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/play' }
        };

        const FTT_URL = 'https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/FTT.XML';
        const RTL_CODES = new Set(['ar', 'dv', 'fa', 'he', 'ku', 'ps', 'sd', 'ur', 'ug']);

        const elements = {
            overlay: document.getElementById('loading-overlay'),
            spinner: document.querySelector('.loader-spinner'),
            loaderText: document.getElementById('loader-text'),
            startBtn: document.getElementById('start-btn'),
            
            quranAudio: document.getElementById('audio-player'),
            transAudio: document.getElementById('translation-audio-player'),
            previewAudio: document.getElementById('preview-audio'),
            bufferInd: document.getElementById('buffering-indicator'),
            
            selects: {
                chapter: document.getElementById('chapterSelect'),
                verse: document.getElementById('verseSelect'),
                trans: document.getElementById('translationSelect'),
                reciter: document.getElementById('reciterSelect'),
                transAudio: document.getElementById('translationAudioSelect')
            },
            display: {
                title: document.getElementById('chapter-title'),
                verse: document.getElementById('verse-text'),
                verseNext: document.getElementById('verse-text-next'),
                trans: document.getElementById('translation-text'),
                container: document.getElementById('content-display')
            },
            views: {
                dashboard: document.getElementById('dashboard-view'),
                cinema: document.getElementById('cinema-view')
            },
            // TV Navigation Elements
            sidebar: {
                container: document.getElementById('tv-sidebar'),
                home: document.getElementById('nav-home'),
                search: document.getElementById('nav-search'),
                profile: document.getElementById('nav-profile')
            },
            search: {
                overlay: document.getElementById('search-overlay'),
                inputDisplay: document.getElementById('search-input-display'),
                keyboardGrid: document.getElementById('keyboard-grid'),
                resultsGrid: document.getElementById('search-results-grid')
            },
            subtitle: document.getElementById('hero-subtitle-overlay')
        };

        let quranData = []; 
        let translationCache = {}; 
        let currentChapterData = {};
        let inactivityTimer;
        let forbiddenToTranslateSet = new Set();
        let isBuffering = false;

        // Preview Variables
        let previewTimeout;
        const PREVIEW_DELAY = 600; 
        let previewSequence = []; 
        let previewSeqIndex = 0;

        // Search Variables
        let searchString = "";
        const KEYBOARD_KEYS = [
            'A','B','C','D','E','F',
            'G','H','I','J','K','L',
            'M','N','O','P','Q','R',
            'S','T','U','V','W','X',
            'Y','Z','1','2','3','4',
            '5','6','7','8','9','0',
            'SPACE', 'DEL', 'CLEAR'
        ];

        // --- MERGE METADATA ---
        function mergeMetadata(apiChapters) {
            return apiChapters.map((ch, idx) => {
                const meta = SURAH_METADATA.find(m => m.chapter === ch.chapterNumber);
                if (meta) {
                    return { ...ch, english_name: meta.english_name, description: meta.description };
                }
                return ch;
            });
        }

        // --- ROUTER ---
        function switchView(viewName) {
            if(viewName === 'cinema') {
                elements.views.dashboard.classList.remove('active');
                elements.views.cinema.classList.add('active');
                elements.views.cinema.style.opacity = '1';
                stopPreview();
                elements.sidebar.container.style.display = 'none'; // Hide sidebar in cinema
                setTimeout(() => document.getElementById('control-panel').focus(), 100);
            } else {
                elements.views.cinema.classList.remove('active');
                elements.views.cinema.style.opacity = '0';
                elements.views.dashboard.classList.add('active');
                elements.sidebar.container.style.display = 'flex'; // Show sidebar
                elements.quranAudio.pause();
                elements.transAudio.pause();
                refreshDashboard();
                document.getElementById('door-play-btn').focus();
            }
        }

        window.addEventListener('popstate', (event) => {
            const params = new URLSearchParams(window.location.search);
            if (params.has('chapter')) {
                switchView('cinema');
                restoreState();
                loadVerse(false); // Using Old logic
            } else {
                switchView('dashboard');
            }
        });

        async function initializeApp() {
            try {
                const jsonResponse = await fetch('https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/a/2TM3TM.json');
                if (!jsonResponse.ok) throw new Error("Failed to load Quran JSON");
                const jsonData = await jsonResponse.json();
                quranData = mergeMetadata(jsonData.chapters);

                try {
                    const fttResp = await fetch(FTT_URL);
                    if (fttResp.ok) {
                        const fttText = await fttResp.text();
                        const fttDoc = new DOMParser().parseFromString(fttText, 'application/xml');
                        fttDoc.querySelectorAll('Verse').forEach(v => {
                            const c = v.getAttribute('chapter')?.trim();
                            const n = v.getAttribute('number')?.trim();
                            if(c && n) forbiddenToTranslateSet.add(`${c}-${n}`);
                        });
                    }
                } catch (e) { console.warn("FTT load failed", e); }

                populateChapterSelect();
                populateReciterSelect();
                populateTranslationAudioSelect();
                populateTranslationSelectOptions();

                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('chapter')) {
                    // Start in Cinema
                    document.getElementById('intro-overlay').style.display = 'none'; // NEW: Hide intro if direct link
                    switchView('cinema');
                    restoreState();
                    populateVerseSelect();
                    const savedVerse = getSavedVerseIndex();
                    if(savedVerse < elements.selects.verse.options.length) {
                        elements.selects.verse.value = savedVerse;
                    }
                    const activeTransId = elements.selects.trans.value;
                    await loadTranslationData(activeTransId);
                    loadVerse(false); // Old Logic
                    
                    elements.spinner.style.display = 'none';
                    elements.loaderText.style.display = 'none';
                    elements.startBtn.style.display = 'block';
                    elements.startBtn.textContent = "Continue";
                    elements.startBtn.focus();
                } else {
                    // Start in Dashboard
                    switchView('dashboard');
                    refreshDashboard();
                    elements.overlay.style.display = 'none';
                    playNetflixIntro(); // NEW: Trigger Intro
                }

                setupEventListeners();
                initSidebarNavigation();
                initSearchInterface();

            } catch (error) {
                console.error("Critical Init Error:", error);
                elements.loaderText.textContent = "Error loading content. Please check connection.";
            }
        }

        // --- DASHBOARD FUNCTIONS ---
        function refreshDashboard() {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            const heroBtn = document.getElementById('door-play-btn');
            
            fillRow('trending-row', [36, 67, 18, 55, 1, 112, 113, 114].map(id => id-1));
            fillRow('all-row', Array.from({length: 114}, (_, i) => i));

            if(saved.chapter !== undefined && quranData[saved.chapter]) {
                const chNum = quranData[saved.chapter].chapterNumber;
                const vNum = (saved.verse || 0) + 1;
                const reciter = saved.reciter || 'alafasy';
                updateHeroPreview(chNum, vNum, reciter, false);
                heroBtn.onclick = () => launchPlayer(chNum, vNum);
            } else {
                updateHeroPreview(1, 1, 'alafasy', false);
                heroBtn.onclick = () => launchPlayer(1, 1);
            }
        }

        function fillRow(elementId, indexArray) {
            const container = document.getElementById(elementId);
            container.innerHTML = '';
            indexArray.forEach(idx => {
                if(!quranData[idx]) return;
                const surah = quranData[idx];
                const card = document.createElement('div');
                card.className = 'surah-card';
                card.tabIndex = 0;
                card.innerHTML = `
                    <div class="card-bg-num">${surah.chapterNumber}</div>
                    <div class="card-title">${surah.title}</div>
                    <div class="card-sub">${surah.english_name || ''}</div>
                `;
                card.onclick = () => launchPlayer(surah.chapterNumber, 1);
                card.onkeydown = (e) => { if(e.key === 'Enter') launchPlayer(surah.chapterNumber, 1); };
                
                const handler = () => schedulePreview(surah.chapterNumber);
                card.onfocus = handler;
                card.onmouseenter = () => card.focus(); 
                container.appendChild(card);
            });
        }

        function schedulePreview(chapterNum) {
            if (previewTimeout) clearTimeout(previewTimeout);
            stopPreview();
            const surah = quranData[chapterNum - 1];
            document.getElementById('door-hero-title').textContent = surah.title;
            document.getElementById('door-hero-subtitle').textContent = surah.english_name;
            document.getElementById('door-hero-desc').textContent = surah.description;
            document.getElementById('door-play-btn').onclick = () => launchPlayer(chapterNum, 1);

            previewTimeout = setTimeout(() => {
                updateHeroPreview(chapterNum, 1, 'alafasy', true); 
            }, PREVIEW_DELAY);
        }

        function stopPreview() {
            elements.previewAudio.pause();
            elements.previewAudio.onended = null;
            elements.subtitle.classList.remove('active');
            clearTimeout(previewTimeout);
            previewSequence = [];
        }

        function updateHeroPreview(chapterNum, startVerse, reciterId, isSequence) {
            const surah = quranData[chapterNum - 1];
            if (!surah) return;
            document.getElementById('door-hero-title').textContent = surah.title;
            document.getElementById('door-hero-subtitle').textContent = surah.english_name;
            document.getElementById('door-hero-desc').textContent = surah.description;

            if (isSequence) {
                previewSequence = [0, 1, 2].map(offset => startVerse + offset).filter(v => v <= surah.verses.length);
            } else {
                previewSequence = [startVerse]; 
            }
            previewSeqIndex = 0;
            
            // Pre-load translation logic for preview
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            const trans = saved.trans || 'en';
            if (!translationCache[trans]) {
                 loadTranslationData(trans).then(() => {
                     // If still in preview mode, it will pick up next tick
                 });
            }

            playPreviewStep(chapterNum, reciterId);
        }

        function playPreviewStep(chapterNum, reciterId) {
            if (previewSeqIndex >= previewSequence.length) return;
            const verseNum = previewSequence[previewSeqIndex];
            const padCh = String(chapterNum).padStart(3, '0');
            const padV = String(verseNum).padStart(3, '0');
            
            const imgLayer = document.getElementById('hero-preview-layer');
            const previewImg = document.getElementById('preview-img');
            const newSrc = `https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/img/${chapterNum}_${verseNum}.png`;

            previewImg.style.opacity = 0;
            setTimeout(() => {
                previewImg.src = newSrc;
                previewImg.onload = () => {
                    previewImg.style.opacity = 0.6;
                    imgLayer.classList.add('active');
                };
            }, 200);

            // Subtitle Update Logic
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            const transId = saved.trans || 'en';
            const cache = translationCache[transId];
            if(cache) {
                const sura = cache.querySelector(`sura[index="${chapterNum}"]`);
                const aya = sura ? sura.querySelector(`aya[index="${verseNum}"]`) : null;
                const text = aya ? aya.getAttribute('text') : "";
                if(text) {
                    elements.subtitle.textContent = text;
                    elements.subtitle.classList.add('active');
                    if (RTL_CODES.has(transId)) elements.subtitle.dir = 'rtl';
                    else elements.subtitle.dir = 'ltr';
                }
            } else {
                elements.subtitle.classList.remove('active');
            }

            const rPath = RECITERS_CONFIG[reciterId]?.path || RECITERS_CONFIG['alafasy'].path;
            const audioUrl = `https://everyayah.com/data/${rPath}/${padCh}${padV}.mp3`;
            elements.previewAudio.src = audioUrl;
            elements.previewAudio.volume = 0.6;
            elements.previewAudio.onended = () => {
                previewSeqIndex++;
                playPreviewStep(chapterNum, reciterId);
            };
            elements.previewAudio.play().catch(e => console.log("Autoplay blocked"));
        }

        function launchPlayer(chapterNum, verseNum = 1) {
            const newUrl = `?chapter=${chapterNum}&verse=${verseNum}`;
            history.pushState({view: 'cinema'}, '', newUrl);
            switchView('cinema');
            
            elements.selects.chapter.value = chapterNum - 1;
            populateVerseSelect();
            elements.selects.verse.value = verseNum - 1;
            elements.overlay.style.display = 'none';
            loadVerse(true);
        }

        // --- OLD PLAYER LOGIC HELPERS ---
        async function loadTranslationData(id) {
            if (translationCache[id]) return; 
            if (!TRANSLATIONS_CONFIG[id]) return;
            try {
                toggleBuffering(true);
                const res = await fetch(TRANSLATIONS_CONFIG[id].url);
                if (res.ok) {
                    const txt = await res.text();
                    translationCache[id] = new DOMParser().parseFromString(txt, 'application/xml');
                }
            } catch (e) {
                console.error("Failed to load translation:", id);
            } finally {
                toggleBuffering(false);
            }
        }

        function restoreState() {
            const urlParams = new URLSearchParams(window.location.search);
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            const browserLang = navigator.language.split('-')[0];

            let ch = 0;
            if (urlParams.has('chapter')) ch = parseInt(urlParams.get('chapter')) - 1; 
            else if (saved.chapter !== undefined) ch = saved.chapter;
            elements.selects.chapter.value = ch;

            if (urlParams.has('reciter') && RECITERS_CONFIG[urlParams.get('reciter')]) {
                elements.selects.reciter.value = urlParams.get('reciter');
            } else if (saved.reciter) {
                elements.selects.reciter.value = saved.reciter;
            }

            let trans = 'en';
            if (urlParams.has('trans')) trans = urlParams.get('trans');
            else if (saved.trans) trans = saved.trans;
            else if (TRANSLATIONS_CONFIG[browserLang]) trans = browserLang; 
            
            if (!TRANSLATIONS_CONFIG[trans]) trans = 'en';
            elements.selects.trans.value = trans;

            if (urlParams.has('audio_trans') && TRANSLATION_AUDIO_CONFIG[urlParams.get('audio_trans')]) {
                elements.selects.transAudio.value = urlParams.get('audio_trans');
            } else if (saved.audio_trans && TRANSLATION_AUDIO_CONFIG[saved.audio_trans]) {
                elements.selects.transAudio.value = saved.audio_trans;
            }
        }

        function getSavedVerseIndex() {
            const urlParams = new URLSearchParams(window.location.search);
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            if (urlParams.has('verse')) return parseInt(urlParams.get('verse')) - 1;
            if (saved.verse !== undefined) return saved.verse;
            return 0;
        }

        function saveState() {
            const state = {
                chapter: parseInt(elements.selects.chapter.value),
                verse: parseInt(elements.selects.verse.value),
                reciter: elements.selects.reciter.value,
                trans: elements.selects.trans.value,
                audio_trans: elements.selects.transAudio.value 
            };
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

            const chObj = quranData[state.chapter];
            const chNum = chObj.chapterNumber;
            const vNum = chObj.verses[state.verse].verseNumber;
            const transName = TRANSLATIONS_CONFIG[state.trans].name;
            const reciterName = RECITERS_CONFIG[state.reciter].name;

            const newUrl = `?chapter=${chNum}&verse=${vNum}&reciter=${state.reciter}&trans=${state.trans}&audio_trans=${state.audio_trans}`;
            
            window.history.replaceState({path: newUrl, view: 'cinema'}, '', newUrl);

            const canonicalLink = document.getElementById('dynamic-canonical');
            const fullUrl = `https://Quran-lite.pages.dev/reading/${newUrl}`;
            if (canonicalLink) {
                canonicalLink.href = fullUrl;
            }

            const pageTitle = `${chObj.title} - Verse ${vNum} | QuranLite`;
            document.title = pageTitle;
            
            const metaDesc = `Read and Listen to Surah ${chObj.title} Verse ${vNum}. Translation: ${transName}. Recitation by ${reciterName}.`;
            const metaDescTag = document.querySelector('meta[name="description"]');
            if(metaDescTag) metaDescTag.setAttribute("content", metaDesc);

            const ogUrl = document.querySelector('meta[property="og:url"]');
            if(ogUrl) ogUrl.content = fullUrl;

            updateGoogleSchema(chNum, vNum, chObj.title, transName, reciterName);
        }

        function updateGoogleSchema(chapterNum, verseNum, chapterName, transName, reciterName) {
            const oldSchema = document.getElementById('dynamic-schema-item');
            if (oldSchema) oldSchema.remove();

            const canonicalUrl = window.location.href; 
            const rootUrl = "https://Quran-lite.pages.dev/";
            const surahUrl = `https://Quran-lite.pages.dev/reading/?chapter=${chapterNum}`;
            const metaDesc = `Read and Listen to Surah ${chapterName} Verse ${verseNum}. Translation: ${transName}. Recitation by ${reciterName}.`;

            const schemaData = {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Quran for Human", 
                            "item": rootUrl
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": `Surah ${chapterName}`,
                            "item": surahUrl
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": `Ayah ${verseNum}`,
                            "item": canonicalUrl 
                        }]
                    },
                    {
                        "@type": "WebPage", 
                        "@id": canonicalUrl,
                        "url": canonicalUrl,
                        "name": `${chapterName} - Verse ${verseNum} | QuranLite`,
                        "description": metaDesc, 
                        "isPartOf": {
                            "@type": "WebSite",
                            "url": rootUrl,
                            "name": "Quran for Human"
                        }
                    }
                ]
            };

            const script = document.createElement('script');
            script.id = 'dynamic-schema-item';
            script.type = 'application/ld+json';
            script.text = JSON.stringify(schemaData);
            document.head.appendChild(script);
        }

        function populateChapterSelect() {
            elements.selects.chapter.innerHTML = '';
            quranData.forEach((c, i) => {
                const opt = document.createElement('option');
                opt.value = i;
                opt.textContent = `${c.chapterNumber}. ${c.title} - ${c.english_name || ''}`;
                elements.selects.chapter.appendChild(opt);
            });
        }

        function populateVerseSelect() {
            elements.selects.verse.innerHTML = '';
            const chIdx = elements.selects.chapter.value || 0;
            currentChapterData = quranData[chIdx];
            currentChapterData.verses.forEach((v, i) => {
                const opt = document.createElement('option');
                opt.value = i;
                opt.textContent = `Ayah ${v.verseNumber}`;
                elements.selects.verse.appendChild(opt);
            });
        }

        function populateReciterSelect() {
            elements.selects.reciter.innerHTML = '';
            Object.entries(RECITERS_CONFIG).forEach(([k, v]) => {
                const opt = document.createElement('option');
                opt.value = k; opt.textContent = v.name;
                elements.selects.reciter.appendChild(opt);
            });
        }

        function populateTranslationAudioSelect() {
            elements.selects.transAudio.innerHTML = '';
            Object.entries(TRANSLATION_AUDIO_CONFIG).forEach(([k, v]) => {
                const opt = document.createElement('option');
                opt.value = k; opt.textContent = v.name;
                elements.selects.transAudio.appendChild(opt);
            });
        }

        function populateTranslationSelectOptions() {
            elements.selects.trans.innerHTML = '';
            Object.entries(TRANSLATIONS_CONFIG).forEach(([id, config]) => {
                const opt = document.createElement('option');
                opt.value = id;
                opt.textContent = config.name;
                elements.selects.trans.appendChild(opt);
            });
        }

        function toggleBuffering(show) {
            isBuffering = show;
            elements.bufferInd.style.display = show ? 'block' : 'none';
        }

        async function loadVerse(autoplay = true) {
            const chIdx = elements.selects.chapter.value;
            const vIdx = elements.selects.verse.value;
            currentChapterData = quranData[chIdx];
            const verseData = currentChapterData.verses[vIdx];
            
            const chNum = currentChapterData.chapterNumber;
            const vNum = verseData.verseNumber;
            const verseKey = `${chNum}-${vNum}`;
            const isForbidden = forbiddenToTranslateSet.has(verseKey);

            elements.display.title.textContent = `${currentChapterData.title} (${chNum}:${vNum})`;
            
            const newSrc = `https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/img/${chNum}_${vNum}.png`;
            const img1 = elements.display.verse;
            const img2 = elements.display.verseNext;

            let imgReady = false;
            if(img1.src === newSrc || img2.src === newSrc) imgReady = true;

            const isImg1Active = img1.classList.contains('active-verse-img');
            const activeImg = isImg1Active ? img1 : img2;
            const nextImg = isImg1Active ? img2 : img1;

            if(!imgReady && autoplay) toggleBuffering(true);

            nextImg.src = newSrc;
            nextImg.onload = () => {
                activeImg.classList.remove('active-verse-img');
                nextImg.classList.add('active-verse-img');
                toggleBuffering(false); 
            };
            
            if (nextImg.complete && nextImg.naturalHeight !== 0) {
                 activeImg.classList.remove('active-verse-img');
                 nextImg.classList.add('active-verse-img');
                 toggleBuffering(false);
            }

            const tid = elements.selects.trans.value;
            if(!translationCache[tid]) {
                await loadTranslationData(tid);
            }

            if (isForbidden) {
                elements.display.trans.textContent = '';
            } else {
                updateTranslationText(chNum, vNum);
            }

            updateQuranAudio(chNum, vNum, autoplay);
            
            if (isForbidden) {
                elements.transAudio.src = '';
            } else {
                updateTranslationAudio(chNum, vNum, false);
            }

            saveState(); 
            updateMediaSession(currentChapterData.title, vNum, RECITERS_CONFIG[elements.selects.reciter.value].name);
            
            bufferNextResources(chIdx, parseInt(vIdx));
        }

        function bufferNextResources(currentChIdx, currentVIdx) {
            let nextChIdx = currentChIdx;
            let nextVIdx = currentVIdx + 1;
            
            if (nextVIdx >= quranData[nextChIdx].verses.length) {
                nextChIdx = parseInt(nextChIdx) + 1;
                nextVIdx = 0;
            }

            if (nextChIdx >= quranData.length) return; 

            const nextCh = quranData[nextChIdx].chapterNumber;
            const nextV = quranData[nextChIdx].verses[nextVIdx].verseNumber;

            const img = new Image();
            img.src = `https://raw.githubusercontent.com/Quran-lite-pages-dev/Quran-lite.pages.dev/refs/heads/master/img/${nextCh}_${nextV}.png`;

            const rId = elements.selects.reciter.value;
            const qPath = RECITERS_CONFIG[rId].path;
            const padCh = String(nextCh).padStart(3, '0');
            const padV = String(nextV).padStart(3, '0');
            const aud = new Audio();
            aud.src = `https://everyayah.com/data/${qPath}/${padCh}${padV}.mp3`;
            aud.preload = 'auto'; 

            const taId = elements.selects.transAudio.value;
            if (taId !== 'none') {
                const config = TRANSLATION_AUDIO_CONFIG[taId];
                let tUrl;
                if (config.path.startsWith('httpIA')) tUrl = `${config.path.replace('httpIA', 'https')}/${padCh}${padV}.mp3`;
                else if (config.path.startsWith('http')) tUrl = `${config.path}/${padCh}${padV}.mp3`;
                else tUrl = `https://everyayah.com/data/${config.path}/${padCh}${padV}.mp3`;
                
                const tAud = new Audio();
                tAud.src = tUrl;
                tAud.preload = 'auto';
            }
        }

        function updateTranslationText(chNum, vNum) {
            const tid = elements.selects.trans.value;
            if (!translationCache[tid]) return;
            
            if (RTL_CODES.has(tid)) {
                elements.display.trans.dir = 'rtl';
            } else {
                elements.display.trans.dir = 'ltr';
            }

            const sura = translationCache[tid].querySelector(`sura[index="${chNum}"]`);
            const aya = sura ? sura.querySelector(`aya[index="${vNum}"]`) : null;
            elements.display.trans.textContent = aya ? aya.getAttribute('text') : "Translation unavailable";
            adjustFontSize();
        }

        function updateQuranAudio(chNum, vNum, play) {
            const rId = elements.selects.reciter.value;
            const path = RECITERS_CONFIG[rId].path;
            const padCh = String(chNum).padStart(3, '0');
            const padV = String(vNum).padStart(3, '0');
            
            elements.quranAudio.src = `https://everyayah.com/data/${path}/${padCh}${padV}.mp3`;
            if(play) elements.quranAudio.play().catch(e => console.log("Waiting for user interaction"));
        }

        function updateTranslationAudio(chNum, vNum, play) {
            const taId = elements.selects.transAudio.value;
            if (taId === 'none') {
                elements.transAudio.src = '';
                return;
            }

            const config = TRANSLATION_AUDIO_CONFIG[taId];
            const padCh = String(chNum).padStart(3, '0');
            const padV = String(vNum).padStart(3, '0');
            
            let url;
            if (config.path.startsWith('httpIA')) url = `${config.path.replace('httpIA', 'https')}/${padCh}${padV}.mp3`;
            else if (config.path.startsWith('http')) url = `${config.path}/${padCh}${padV}.mp3`;
            else url = `https://everyayah.com/data/${config.path}/${padCh}${padV}.mp3`;

            if(!url.endsWith('.mp3')) url += `/${padCh}${padV}.mp3`;
            elements.transAudio.src = url;
            if(play) elements.transAudio.play();
        }

        function handleQuranEnd() {
            if (elements.transAudio.src && elements.transAudio.src !== window.location.href) {
                elements.transAudio.play().catch(() => nextVerse());
            } else {
                nextVerse();
            }
        }

        function nextVerse() {
            const totalV = elements.selects.verse.options.length;
            let cV = parseInt(elements.selects.verse.value);
            
            if (cV + 1 < totalV) {
                elements.selects.verse.value = cV + 1;
                loadVerse(true);
            } else {
                let cC = parseInt(elements.selects.chapter.value);
                if (cC + 1 < elements.selects.chapter.options.length) {
                    elements.selects.chapter.value = cC + 1;
                    populateVerseSelect();
                    elements.selects.verse.value = 0;
                    loadVerse(true);
                }
            }
        }

        function adjustFontSize() {
            const el = elements.display.trans;
            if (window.innerWidth <= 768) return; 

            el.style.fontSize = '3.5rem';
            let iter = 0;
            while (el.scrollHeight > el.clientHeight && iter < 50) {
                let size = parseFloat(window.getComputedStyle(el).fontSize);
                if (size <= 16) break;
                el.style.fontSize = (size - 1) + 'px';
                iter++;
            }
        }

        function setupEventListeners() {
            elements.startBtn.addEventListener('click', () => {
                elements.overlay.style.opacity = 0;
                setTimeout(() => elements.overlay.style.display = 'none', 500);
                loadVerse(true); 
            });

            elements.selects.chapter.addEventListener('change', () => { populateVerseSelect(); loadVerse(true); });
            elements.selects.verse.addEventListener('change', () => loadVerse(true));
            elements.selects.reciter.addEventListener('change', () => { saveState(); loadVerse(true); });
            
            elements.selects.trans.addEventListener('change', async () => {
                const activeTransId = elements.selects.trans.value;
                await loadTranslationData(activeTransId); 
                
                const chIdx = elements.selects.chapter.value;
                const vIdx = elements.selects.verse.value;
                const ch = quranData[chIdx].chapterNumber;
                const v = quranData[chIdx].verses[vIdx].verseNumber;
                updateTranslationText(ch, v);
                saveState();
            });

            elements.selects.transAudio.addEventListener('change', () => {
                const chIdx = elements.selects.chapter.value;
                const vIdx = elements.selects.verse.value;
                const ch = quranData[chIdx].chapterNumber;
                const v = quranData[chIdx].verses[vIdx].verseNumber;
                if (!elements.quranAudio.paused) {
                    updateTranslationAudio(ch, v, false); 
                    saveState();
                    return;
                }
                if (!elements.transAudio.paused) {
                    updateTranslationAudio(ch, v, true);
                    saveState();
                    return;
                }
                updateTranslationAudio(ch, v, false);
                saveState();
            });

            elements.quranAudio.addEventListener('ended', handleQuranEnd);
            elements.transAudio.addEventListener('ended', nextVerse);

            ['mousemove', 'touchstart', 'click', 'keydown'].forEach(e => 
                window.addEventListener(e, () => {
                    document.body.classList.remove('idle');
                    clearTimeout(inactivityTimer);
                    inactivityTimer = setTimeout(() => document.body.classList.add('idle'), 4000);
                })
            );

            window.addEventListener('resize', () => {
                document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
                adjustFontSize();
            });
        }
        
        function updateMediaSession(surah, verse, artist) {
            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: `${surah} Ayah ${verse}`,
                    artist: artist,
                    album: `Surah ${surah}`,
                    artwork: [{ src: 'https://Quran-lite.pages.dev/social-preview.jpg', sizes: '512x512', type: 'image/jpeg' }]
                });
                navigator.mediaSession.setActionHandler('nexttrack', nextVerse);
            }
        }

        // --- 3. SIDEBAR LOGIC ---
        function initSidebarNavigation() {
            elements.sidebar.container.addEventListener('mouseenter', () => elements.sidebar.container.classList.add('expanded'));
            elements.sidebar.container.addEventListener('mouseleave', () => elements.sidebar.container.classList.remove('expanded'));

            elements.sidebar.home.addEventListener('click', (e) => {
                e.preventDefault();
                closeSearch();
                switchView('dashboard');
                setActiveNav(elements.sidebar.home);
            });

            elements.sidebar.search.addEventListener('click', (e) => {
                e.preventDefault();
                openSearch();
                setActiveNav(elements.sidebar.search);
            });
        }

        function setActiveNav(el) {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            el.classList.add('active');
        }

        // --- 4. SEARCH & KEYBOARD LOGIC (AI POWERED) ---
        let searchDebounceTimer;

        function initSearchInterface() {
            renderKeyboard();
            
            // Results delegation
            elements.search.resultsGrid.addEventListener('click', (e) => {
                const card = e.target.closest('.surah-card');
                if(card) {
                    const ch = parseInt(card.dataset.chapter);
                    closeSearch();
                    launchPlayer(ch, 1);
                }
            });
        }

        function renderKeyboard() {
            const grid = elements.search.keyboardGrid;
            grid.innerHTML = '';
            KEYBOARD_KEYS.forEach(key => {
                const btn = document.createElement('div');
                btn.className = 'key';
                btn.textContent = key;
                btn.tabIndex = 0;
                
                if (['SPACE', 'DEL', 'CLEAR'].includes(key)) {
                    btn.classList.add('wide');
                }

                btn.onclick = () => handleKeyPress(key);
                btn.onkeydown = (e) => { if(e.key === 'Enter') handleKeyPress(key); };
                grid.appendChild(btn);
            });
        }

        function handleKeyPress(key) {
            if (key === 'SPACE') searchString += ' ';
            else if (key === 'DEL') searchString = searchString.slice(0, -1);
            else if (key === 'CLEAR') searchString = "";
            else searchString += key;
            
            elements.search.inputDisplay.textContent = searchString;
            
            // Debounce the AI search (wait 800ms after last keypress)
            clearTimeout(searchDebounceTimer);
            
            if (searchString.length > 2) {
                // Show loading immediately while typing implies waiting
                elements.search.resultsGrid.innerHTML = `
                    <div class="loader-content" style="padding-top:2rem">
                        <div class="loader-spinner" style="width:30px;height:30px;border-width:2px;"></div>
                        <div style="color:#666; font-size:1.2rem">AI is searching...</div>
                    </div>`;
                
                searchDebounceTimer = setTimeout(() => {
                    performAISearch();
                }, 800);
            } else {
                elements.search.resultsGrid.innerHTML = '<div class="no-results">Type at least 3 characters...</div>';
            }
        }

        async function performAISearch() {
            const query = searchString.trim();
            const resultsContainer = elements.search.resultsGrid;

            if(!query) return;

            try {
                // Call Cloudflare Workers AI Endpoint
                const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                if (!response.ok) throw new Error("AI Search failed");
                
                // Expecting array of Chapter Numbers: e.g., [1, 2, 55]
                const chapterIds = await response.json();

                resultsContainer.innerHTML = '';

                if (!chapterIds || chapterIds.length === 0) {
                    resultsContainer.innerHTML = '<div class="no-results">No relevant Surahs found.</div>';
                    return;
                }

                // Map AI results (Integers) to your Local MetaData
                // We map Chapter Number (1-based) to Array Index (0-based)
                const foundSurahs = chapterIds
                    .map(num => quranData.find(s => s.chapterNumber === num))
                    .filter(Boolean); // Remove nulls if AI hallucinates a number > 114

                if (foundSurahs.length === 0) {
                    resultsContainer.innerHTML = '<div class="no-results">No matches found.</div>';
                    return;
                }

                foundSurahs.forEach(surah => {
                    const card = document.createElement('div');
                    card.className = 'surah-card';
                    card.tabIndex = 0;
                    card.dataset.chapter = surah.chapterNumber;
                    // Visual cue that this is an AI result
                    card.style.borderColor = 'rgba(0, 255, 187, 0.3)'; 
                    
                    card.innerHTML = `
                        <div class="card-bg-num">${surah.chapterNumber}</div>
                        <div class="card-title">${surah.title}</div>
                        <div class="card-sub">${surah.english_name || ''}</div>
                    `;
                    card.onclick = () => { closeSearch(); launchPlayer(surah.chapterNumber, 1); };
                    card.onkeydown = (e) => { if(e.key === 'Enter') card.click(); };
                    resultsContainer.appendChild(card);
                });

            } catch (error) {
                console.error(error);
                resultsContainer.innerHTML = '<div class="no-results">Search service unavailable.</div>';
            }
        }

        function openSearch() {
            elements.search.overlay.classList.add('active');
            searchString = "";
            elements.search.inputDisplay.textContent = "";
            elements.search.resultsGrid.innerHTML = '<div class="no-results">Use the keyboard to describe a topic...<br><span style="font-size:1.2rem;color:#444">(e.g. "Story of Joseph", "Laws of inheritance")</span></div>';
            
            setTimeout(() => {
                const firstKey = elements.search.keyboardGrid.querySelector('.key');
                if(firstKey) firstKey.focus();
            }, 100);
        }

        function closeSearch() {
            elements.search.overlay.classList.remove('active');
            setActiveNav(elements.sidebar.home);
            document.getElementById('door-play-btn').focus();
        }

        // NEW: Netflix-style Intro Logic
        function playNetflixIntro() {
            const intro = document.getElementById('intro-overlay');
            const audio = document.getElementById('intro-sound');
            if(!intro || !audio) return;
            
            intro.style.display = 'flex'; // Ensure visible
            
            // Attempt autoplay (might be blocked by browser without interaction)
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Intro autoplay blocked by policy - user must interact first");
                    // Optionally force hide if blocked to avoid stuck screen, 
                    // or leave it for the animation to handle.
                });
            }

            // Sync fade out with audio length (approx 3-4s)
            setTimeout(() => {
                intro.classList.add('intro-fade-out');
                setTimeout(() => {
                    intro.style.display = 'none';
                }, 1000);
            }, 3500); 
        }

        document.addEventListener('DOMContentLoaded', initializeApp);

    </script>
<script>
    /**
     * QURANLITE AI MODULE
     * Handles user tracking and fetching recommendations from Cloudflare Workers
     */
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
</script>

<script>
    /**
     * QURANLITE AI MODULE
     * Handles user tracking and fetching recommendations from Cloudflare Workers
     */
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
</script>
