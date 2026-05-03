import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, Settings, ChevronRight, Activity, Cpu, 
  ArrowUpRight, X, Bookmark, Share2, Layers, Search, Send, Sparkles, Globe, Volume2, Square
} from 'lucide-react';

const VercelLogo = () => (
  <svg width="20" height="20" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/>
  </svg>
);

const FigmaLogo = () => (
  <svg width="14" height="20" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5H9.5V28.5H19Z" fill="#1ABCFE"/>
    <path d="M9.5 28.5H19C24.2467 28.5 28.5 32.7533 28.5 38C28.5 43.2467 24.2467 47.5 19 47.5C13.7533 47.5 9.5 43.2467 9.5 38V28.5Z" fill="#0ACF83"/>
    <path d="M19 0C13.7533 0 9.5 4.24671 9.5 9.5V28.5H19C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5V0H19Z" fill="#F24E1E"/>
    <path d="M9.5 0C4.24671 0 0 4.24671 0 9.5C0 14.7533 4.24671 19 9.5 19V0Z" fill="#FF7262"/>
    <path d="M9.5 38C4.24671 38 0 33.7533 0 28.5C0 23.2467 4.24671 19 9.5 19V38Z" fill="#A259FF"/>
  </svg>
);

const StripeLogo = () => (
  <svg width="30" height="15" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M59.64 11.23H51.48V8.12C51.48 6.55 52.61 6.13 53.76 6.13C54.77 6.13 55.82 6.42 56.68 6.96L58.62 2.65C57.19 1.76 55.05 1.25 52.82 1.25C47.88 1.25 44.5 4.19 44.5 9.17V11.23H41.5V16.71H44.5V24.52H51.48V16.71H58.26L59.64 11.23Z" fill="#635BFF"/>
  </svg>
);

const ReactLogo = () => (
  <svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const CATEGORIES = ['All', 'Frontend', 'Backend', 'DevOps', 'AI', 'Tools'];

const LANGUAGES = [
  "English", "Spanish", "Mandarin Chinese", "Hindi", "Arabic", "Bengali", "Portuguese", "Russian", "Urdu", "Indonesian",
  "German", "Japanese", "Swahili", "Marathi", "Telugu", "Turkish", "Tamil", "French", "Vietnamese", "Korean",
  "Italian", "Hausa", "Thai", "Gujarati", "Kannada", "Persian", "Bhojpuri", "Hakha Chin", "Jin", "Southern Min",
  "Hakka", "Burmese", "Yoruba", "Uzbek", "Sindhi", "Amharic", "Fula", "Romanian", "Oromo", "Igbo",
  "Azerbaijani", "Awadhi", "Gan", "Cebuano", "Dutch", "Kurdish", "Serbo-Croatian", "Malagasy", "Saraiki", "Nepali",
  "Sinhalese", "Chittagonian", "Zhuang", "Khmer", "Turkmen", "Assamese", "Madurese", "Somali", "Marwari", "Magahi",
  "Haryanvi", "Hungarian", "Chhattisgarhi", "Greek", "Chewa", "Deccan", "Akan", "Kazakh", "Sylheti", "Zulu",
  "Czech", "Kinyarwanda", "Dhundhari", "Haitian Creole", "Ilocano", "Quechua", "Kirundi", "Swedish", "Hmong", "Shona",
  "Uyghur", "Hiligaynon", "Mossi", "Xhosa", "Belarusian", "Balochi", "Konkani", "Armenian", "Afrikaans", "Macedonian", "Malayalam", "Chinese"
].sort();

const langCodes = {
  "Afrikaans": "af", "Albanian": "sq", "Amharic": "am", "Arabic": "ar", "Armenian": "hy", "Assamese": "as", "Awadhi": "hi", "Azerbaijani": "az", "Balochi": "bal", "Belarusian": "be", "Bengali": "bn", "Bhojpuri": "bho", "Burmese": "my", "Cebuano": "ceb", "Chewa": "ny", "Chhattisgarhi": "hi", "Chittagonian": "bn", "Czech": "cs", "Deccan": "hi", "Dhundhari": "hi", "Dutch": "nl", "English": "en", "French": "fr", "Fula": "ff", "Gan": "zh-CN", "German": "de", "Greek": "el", "Gujarati": "gu", "Haitian Creole": "ht", "Hakha Chin": "cnh", "Hakka": "zh-TW", "Haryanvi": "hi", "Hausa": "ha", "Hiligaynon": "hil", "Hindi": "hi", "Hmong": "hmn", "Hungarian": "hu", "Igbo": "ig", "Ilocano": "ilo", "Indonesian": "id", "Italian": "it", "Japanese": "ja", "Jin": "zh-CN", "Kannada": "kn", "Kazakh": "kk", "Khmer": "km", "Kinyarwanda": "rw", "Kirundi": "rn", "Konkani": "kok", "Korean": "ko", "Kurdish": "ku", "Macedonian": "mk", "Madurese": "mad", "Magahi": "mag", "Malagasy": "mg", "Malayalam": "ml", "Mandarin Chinese": "zh-CN", "Chinese": "zh-CN", "Marathi": "mr", "Marwari": "mwr", "Mossi": "mos", "Nepali": "ne", "Oromo": "om", "Persian": "fa", "Portuguese": "pt", "Quechua": "qu", "Romanian": "ro", "Russian": "ru", "Saraiki": "skr", "Serbo-Croatian": "hr", "Shona": "sn", "Sindhi": "sd", "Sinhalese": "si", "Somali": "so", "Southern Min": "zh-TW", "Spanish": "es", "Swahili": "sw", "Swedish": "sv", "Sylheti": "syl", "Tamil": "ta", "Telugu": "te", "Thai": "th", "Turkish": "tr", "Turkmen": "tk", "Urdu": "ur", "Uyghur": "ug", "Uzbek": "uz", "Vietnamese": "vi", "Xhosa": "xh", "Yoruba": "yo", "Zhuang": "za", "Zulu": "zu"
};

const detectInitialLanguage = () => {
  try {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0].toLowerCase();
    for (const [langName, code] of Object.entries(langCodes)) {
      if (code.toLowerCase() === browserLang.toLowerCase() || code.toLowerCase() === shortLang) return langName;
    }
  } catch (e) {}
  return 'English';
};

const STRINGS_TO_TRANSLATE = [
  "All", "Frontend", "Backend", "DevOps", "AI", "Tools", "Search news, tools, topics...",
  "Try Now", "Read Full Article", "Collapse View", "Search language...", "LIVE FEED", "Updated", "Listen", "Stop", "Read",
  "React 19 introduces a revolutionary new compiler that automates memoization.",
  "This eliminates the need for useMemo and useCallback hooks,",
  "vastly simplifying component logic while boosting performance by up to 50%.",
  "Vercel announces a new multi-cloud failover system for enterprise apps.",
  "Your dashboard now automatically detects regional outages,",
  "rerouting traffic globally to ensure 99.99% uptime with zero manual intervention.",
  "Figma releases an upgraded Dev Mode with native VS Code integration.",
  "Engineers can now pull component properties directly into their IDE,",
  "reducing the designer-to-developer friction and increasing build accuracy.",
  "Stripe releases a new SDK for low-latency global payment processing.",
  "It introduces a \"Smart Retry\" engine that predicts bank failures,",
  "automatically optimizing transaction routes to recover 15% more revenue.",
  "Tailwind CSS v4 introduces a completely rewritten engine in Rust.",
  "It removes the need for a tailwind.config.js file entirely,",
  "relying on CSS variables for a much cleaner and infinitely faster developer experience.",
  "Next.js 15 brings a dramatic reduction in build times.",
  "It introduces Turbopack as the default compiler,",
  "cutting local dev startup from 30s to barely 2s.",
  "TypeScript 5.5 significantly enhances type inference.",
  "It automatically infers type predicates from function bodies,",
  "meaning you no longer have to write repetitive 'is' return types.",
  "Supabase announces native branch environments.",
  "You can now spin up isolated database branches per pull request,",
  "making testing production data completely safe and zero-friction.",
  "Anthropic releases the Claude 3.5 Sonnet API.",
  "It operates at twice the speed of Opus while matching its coding logic,",
  "setting a new benchmark for automated code-generation tasks.",
  "Drizzle ORM releases a brand new relational query API.",
  "It allows you to query SQL databases with Prisma-like syntax,",
  "while maintaining zero performance overhead and raw SQL speed.",
  "Framer Motion 11 introduces a brand new standalone animation engine.",
  "It allows you to animate raw DOM nodes without React components,",
  "slashing bundle sizes by up to 50% for standard sites.",
  "Vite 5.0 drops support for older Node versions.",
  "It completely overhauls the internal module graph logic,",
  "drastically speeding up HMR (Hot Module Replacement) on massive codebases."
];

const BASE_DATA = [
  { id: 1, type: 'Frontend', name: 'React 19 RC', logo: <ReactLogo />, tags: ['React', 'Framework'], readTime: '4 min read', metrics: ['2x Render Speed'], summaryStart: 'React 19 introduces a revolutionary new compiler that automates memoization.', boldBenefit: 'This eliminates the need for useMemo and useCallback hooks,', summaryEnd: 'vastly simplifying component logic while boosting performance by up to 50%.', source: 'React Blog', date: '2024-05-15' },
  { id: 2, type: 'DevOps', name: 'Vercel Ship', logo: <VercelLogo />, tags: ['Deploy', 'Serverless'], readTime: '3 min read', metrics: ['Instant Rollback'], summaryStart: 'Vercel announces a new multi-cloud failover system for enterprise apps.', boldBenefit: 'Your dashboard now automatically detects regional outages,', summaryEnd: 'rerouting traffic globally to ensure 99.99% uptime with zero manual intervention.', source: 'Vercel News', date: '2024-05-20' },
  { id: 3, type: 'Tools', name: 'Figma Dev Mode', logo: <FigmaLogo />, tags: ['UI/UX', 'Handover'], readTime: '2 min read', metrics: ['CSS Gen V2'], summaryStart: 'Figma releases an upgraded Dev Mode with native VS Code integration.', boldBenefit: 'Engineers can now pull component properties directly into their IDE,', summaryEnd: 'reducing the designer-to-developer friction and increasing build accuracy.', source: 'Figma Insider', date: '2024-05-22' },
  { id: 4, type: 'Backend', name: 'Stripe API v3', logo: <StripeLogo />, tags: ['Payments', 'Fintech'], readTime: '5 min read', metrics: ['99.9% Success'], summaryStart: 'Stripe releases a new SDK for low-latency global payment processing.', boldBenefit: 'It introduces a "Smart Retry" engine that predicts bank failures,', summaryEnd: 'automatically optimizing transaction routes to recover 15% more revenue.', source: 'Stripe Dev', date: '2024-05-18' },
  { id: 5, type: 'Frontend', name: 'Tailwind v4', logo: <Activity />, tags: ['CSS', 'Utility'], readTime: '5 min read', metrics: ['10x Faster'], summaryStart: 'Tailwind CSS v4 introduces a completely rewritten engine in Rust.', boldBenefit: 'It removes the need for a tailwind.config.js file entirely,', summaryEnd: 'relying on CSS variables for a much cleaner and infinitely faster developer experience.', source: 'Tailwind Labs', date: '2024-05-25' },
  { id: 6, type: 'Frontend', name: 'Next.js 15', logo: <VercelLogo />, tags: ['Next.js', 'Turbopack'], readTime: '4 min read', metrics: ['-80% Startup'], summaryStart: 'Next.js 15 brings a dramatic reduction in build times.', boldBenefit: 'It introduces Turbopack as the default compiler,', summaryEnd: 'cutting local dev startup from 30s to barely 2s.', source: 'Vercel Blog', date: '2024-05-10' },
  { id: 7, type: 'Backend', name: 'TypeScript 5.5', logo: <Layers />, tags: ['TS', 'Types'], readTime: '3 min read', metrics: ['Smarter Types'], summaryStart: 'TypeScript 5.5 significantly enhances type inference.', boldBenefit: 'It automatically infers type predicates from function bodies,', summaryEnd: 'meaning you no longer have to write repetitive \'is\' return types.', source: 'Microsoft Dev', date: '2024-05-05' },
  { id: 8, type: 'Backend', name: 'Supabase Branches', logo: <Activity />, tags: ['Database', 'DevOps'], readTime: '2 min read', metrics: ['Safe Testing'], summaryStart: 'Supabase announces native branch environments.', boldBenefit: 'You can now spin up isolated database branches per pull request,', summaryEnd: 'making testing production data completely safe and zero-friction.', source: 'Supabase Blog', date: '2024-05-12' },
  { id: 9, type: 'AI', name: 'Claude 3.5 API', logo: <Cpu />, tags: ['AI', 'LLM'], readTime: '5 min read', metrics: ['2x Speed'], summaryStart: 'Anthropic releases the Claude 3.5 Sonnet API.', boldBenefit: 'It operates at twice the speed of Opus while matching its coding logic,', summaryEnd: 'setting a new benchmark for automated code-generation tasks.', source: 'Anthropic', date: '2024-06-01' },
  { id: 10, type: 'Backend', name: 'Drizzle ORM', logo: <Search />, tags: ['SQL', 'ORM'], readTime: '6 min read', metrics: ['Raw SQL Speed'], summaryStart: 'Drizzle ORM releases a brand new relational query API.', boldBenefit: 'It allows you to query SQL databases with Prisma-like syntax,', summaryEnd: 'while maintaining zero performance overhead and raw SQL speed.', source: 'Drizzle Hub', date: '2024-05-28' },
  { id: 11, type: 'Frontend', name: 'Framer 11', logo: <Layers />, tags: ['Animation', 'UI'], readTime: '3 min read', metrics: ['-50% Bundle'], summaryStart: 'Framer Motion 11 introduces a brand new standalone animation engine.', boldBenefit: 'It allows you to animate raw DOM nodes without React components,', summaryEnd: 'slashing bundle sizes by up to 50% for standard sites.', source: 'Framer Blog', date: '2024-05-30' },
  { id: 12, type: 'Tools', name: 'Vite 5.0', logo: <Activity />, tags: ['Bundler', 'HMR'], readTime: '4 min read', metrics: ['Instant HMR'], summaryStart: 'Vite 5.0 drops support for older Node versions.', boldBenefit: 'It completely overhauls the internal module graph logic,', summaryEnd: 'drastically speeding up HMR (Hot Module Replacement) on massive codebases.', source: 'Vite News', date: '2024-05-08' }
];

const DASHBOARD_DATA = BASE_DATA.map((item, i) => ({ ...item, time: `${(i * 3) + 1}m ago` }));

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const SmartCard = ({ item, onClick, t, playingId, onPlay, langCode, isBookmarked, onBookmark }) => {
  const fullText = `${t(item.summaryStart)} ${t(item.boldBenefit)} ${t(item.summaryEnd)}`;
  return (
    <motion.div variants={itemVariants} className="card" onClick={onClick}>
      <div className="card-header">
        <div className="brand">
          <div className="brand-logo">{item.logo}</div>
          <div className="brand-info">
            <span className="brand-name">{item.name}</span>
            <span className="post-time">{item.time} • {t(item.source)}</span>
          </div>
        </div>
        <button className={`bookmark-btn ${isBookmarked ? 'active' : ''}`} onClick={(e) => onBookmark(e, item.id)}>
          <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="card-content">
        <p>{t(item.summaryStart)} <span className="highlight">{t(item.boldBenefit)}</span> {t(item.summaryEnd)}</p>
      </div>
      <div className="card-footer">
        <div className="card-tags">{item.tags.map(tag => <span key={tag} className="tag">#{t(tag)}</span>)}</div>
        <div className="card-actions">
          <button className={`action-btn read-btn ${playingId === item.id ? 'active' : ''}`} onClick={(e) => onPlay(e, item.id, fullText, langCode)}>
            <Volume2 size={16} /> {playingId === item.id ? t("Stop") : t("Listen")}
          </button>
          <button className="action-btn">{t("Read")} <ChevronRight size={14} /></button>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [language, setLanguage] = useState(detectInitialLanguage());
  const [translations, setTranslations] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('devscope_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [isTranslating, setIsTranslating] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState('Just now');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFullView, setIsFullView] = useState(false);
  const [playingId, setPlayingId] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  const audioStateRef = useRef({ sequenceId: 0, currentAudioObj: null });

  useEffect(() => { localStorage.setItem('devscope_bookmarks', JSON.stringify(bookmarks)); }, [bookmarks]);

  const stopAllAudio = () => {
    audioStateRef.current.sequenceId += 1;
    if (audioStateRef.current.currentAudioObj) { audioStateRef.current.currentAudioObj.pause(); audioStateRef.current.currentAudioObj = null; }
    window.speechSynthesis.cancel();
    setPlayingId(null);
  };

  const handleReadAloud = async (e, id, text, languageCode) => {
    if (e) e.stopPropagation();
    const wasPlayingId = playingId;
    stopAllAudio();
    if (wasPlayingId === id) return;
    setPlayingId(id);
    const code = languageCode || 'en';
    const sentences = text.split(/(?<=[.!?।。])\s+/);
    for (const chunk of sentences) {
      if (!chunk.trim() || audioStateRef.current.sequenceId !== audioStateRef.current.sequenceId) break;
      await new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        utterance.lang = code;
        utterance.onend = resolve;
        utterance.onerror = resolve;
        window.speechSynthesis.speak(utterance);
      });
    }
    setPlayingId(null);
  };

  const t = (text) => (language === 'English' || isTranslating) ? text : (translations[text] || text);

  useEffect(() => {
    if (language === 'English') return;
    const fetchTranslation = async () => {
      setIsTranslating(true);
      try {
        const code = langCodes[language];
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${code}&dt=t&q=${encodeURIComponent(STRINGS_TO_TRANSLATE.join('\n'))}`);
        const data = await res.json();
        const translatedArray = data[0].map(p => p[0]).join('').split('\n');
        const nt = {}; STRINGS_TO_TRANSLATE.forEach((o, i) => nt[o] = translatedArray[i] || o);
        setTranslations(nt);
      } catch (err) {} finally { setIsTranslating(false); }
    };
    fetchTranslation();
  }, [language]);

  const handleRefresh = () => { stopAllAudio(); setIsRefreshing(true); setTimeout(() => { setIsRefreshing(false); setLastRefreshed('Just now'); }, 1000); };
  const filteredLanguages = LANGUAGES.filter(l => l.toLowerCase().includes(langSearch.toLowerCase()));
  const toggleBookmark = (e, id) => { e.stopPropagation(); setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]); };

  return (
    <div className="extension-container">
      <header className="header">
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder={t("Search news, tools, topics...")} className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="header-actions">
          <button className="lang-dropdown-btn" onClick={() => setIsLangOpen(!isLangOpen)}>{language}</button>
          <AnimatePresence>
            {isLangOpen && (
              <motion.div className="lang-dropdown-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <input type="text" className="lang-search" placeholder={t("Search language...")} value={langSearch} onChange={(e) => setLangSearch(e.target.value)} />
                <div className="lang-list">{filteredLanguages.map(l => <div key={l} className="lang-item" onClick={() => { setLanguage(l); setIsLangOpen(false); }}>{l}</div>)}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <nav className="tabs">
        {CATEGORIES.map(cat => (
          <button key={cat} className={`tab-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>{t(cat)}</button>
        ))}
      </nav>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory + searchQuery} variants={containerVariants} initial="hidden" animate="visible" className="masonry-grid">
            {DASHBOARD_DATA
              .filter(item => (activeCategory === 'All' || item.type === activeCategory) && (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.summaryStart.toLowerCase().includes(searchQuery.toLowerCase())))
              .map(item => <SmartCard key={item.id} item={item} t={t} onClick={() => { setSelectedItem(item); setIsFullView(true); }} playingId={playingId} onPlay={handleReadAloud} langCode={langCodes[language]} isBookmarked={bookmarks.includes(item.id)} onBookmark={toggleBookmark} />)}
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedItem && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)}>
            <motion.div className="modal-content" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedItem(null)}><X size={20} /></button>
              <h2 className="section-title">{selectedItem.name}</h2>
              <div className="modal-body">
                <p>{t(selectedItem.summaryStart)} {t(selectedItem.boldBenefit)} {t(selectedItem.summaryEnd)}</p>
                <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(0,212,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Source: {t(selectedItem.source)}</h4>
                  <p style={{ fontSize: '0.85rem' }}>Published: {selectedItem.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer">
        <div className="refresh-info">
          <button className="icon-btn" onClick={handleRefresh}><RefreshCw size={16} /></button>
          <span>{t("Updated")} {lastRefreshed}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
