import { useState, useEffect } from 'react';

const Navbar = ({ isChatMode, setIsChatMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState(localStorage.getItem('selectedLang') || 'en');

  // ==========================================
  // KAMUS BAHASA (TRANSLATIONS)
  // ==========================================
  const translations = {
    id: {
      home: "Beranda",
      about: "Tentang",
      tools: "Keahlian",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak",
      askAi: "Tanya AI"
    },
    en: {
      home: "Home",
      about: "About",
      tools: "Tools",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      askAi: "Ask AI"
    }
  };

  const t = translations[lang]; // Ambil teks sesuai bahasa yang aktif

  // Daftar menu yang labelnya sudah otomatis diterjemahkan
  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'tools', label: t.tools },
    { id: 'projects', label: t.projects },
    { id: 'certificates', label: t.certificates },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]); // Tambahkan navLinks ke dependency array

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'id' : 'en';
    setLang(newLang);
    localStorage.setItem('selectedLang', newLang);
    window.location.reload();
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsChatMode(false); 
    setIsMobileMenuOpen(false); 
    
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isChatMode
          ? 'bg-[#050507]/90 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')} 
            className="text-2xl font-extrabold tracking-wider text-white hover:text-cyan transition-colors"
        >
            ahmdfhri<span className="text-cyan">.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          
          <ul className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)} 
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === link.id && !isChatMode ? 'text-cyan' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan transition-all duration-300 ${
                      activeSection === link.id && !isChatMode ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* PEMISAH */}
          <div className="w-px h-6 bg-white/20"></div>

          {/* TOMBOL HALAMAN CHATBOT (Diterjemahkan) */}
          <button
            onClick={() => setIsChatMode(!isChatMode)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all text-sm font-bold shadow-lg ${
              isChatMode 
                ? 'bg-cyan text-black border-cyan' 
                : 'border-white/10 bg-white/5 text-cyan hover:bg-cyan/20 hover:border-cyan'
            }`}
          >
            <i className="fa-solid fa-robot"></i>
          </button>

          {/* Tombol Bahasa */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-cyan/10 hover:border-cyan hover:text-cyan transition-all text-xs font-bold text-gray-300"
          >
            <img
              src={lang === 'id' ? "https://flagcdn.com/w20/id.png" : "https://flagcdn.com/w20/us.png"}
              alt="Lang"
              className="w-4 rounded-sm"
            />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTONS */}
        <div className="md:hidden flex items-center gap-3">
            
            <button
              onClick={() => {
                setIsChatMode(!isChatMode);
                setIsMobileMenuOpen(false); 
              }}
              className={`w-8 h-8 flex items-center justify-center rounded border transition-all shadow-lg ${
                isChatMode 
                  ? 'bg-cyan text-black border-cyan' 
                  : 'border-white/10 bg-white/5 text-cyan'
              }`}
            >
              <i className="fa-solid fa-robot"></i>
            </button>

            <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2 py-1.5 rounded border border-white/10 bg-white/5 text-xs font-bold text-gray-300"
            >
                <img
                src={lang === 'id' ? "https://flagcdn.com/w20/id.png" : "https://flagcdn.com/w20/us.png"}
                alt="Lang"
                className="w-4 rounded-sm"
                />
                {lang.toUpperCase()}
            </button>

            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white text-2xl focus:outline-none ml-1"
            >
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#050507] border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full text-center">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)} 
                className={`block py-2 text-lg font-medium transition-colors ${
                    activeSection === link.id && !isChatMode ? 'text-cyan bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;