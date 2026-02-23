import React from 'react';

const Footer = ({ isChatMode, setIsChatMode }) => {
  
  // Ambil bahasa dari localStorage untuk menerjemahkan tooltip (opsional, agar konsisten)
  const lang = localStorage.getItem('selectedLang') || 'en';

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // LOGIKA BARU: Jika yang diklik adalah tombol Chatbot
    if (id === 'chat') {
      if (setIsChatMode) setIsChatMode(true);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Langsung scroll ke atas
      return;
    }

    // Jika yang diklik adalah menu navigasi biasa (Home, About, dll)
    if (isChatMode && setIsChatMode) {
      setIsChatMode(false); // Matikan mode chat
    }
    
    // Beri jeda 100ms agar halaman utama selesai dirender, lalu scroll mulus
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="w-full pt-12 pb-8 mt-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-0">

        {/* 1. Bagian Kiri: Judul & Copyright */}
        <div className="text-left space-y-1">
          <h3 className="text-2xl font-extrabold tracking-wider text-white hover:text-cyan transition-colors">
            ahmdfhri<span className="text-cyan">.</span>
          </h3>
        </div>

        {/* 2. Bagian Tengah: Navigasi Dock */}
        <div className="flex justify-center order-first md:order-none">
          <nav className="flex items-center gap-1.5 p-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full shadow-2xl">
            {[
              { id: "home", icon: "fa-solid fa-house", label: lang === 'id' ? "Beranda" : "Home" },
              { id: "about", icon: "fa-regular fa-user", label: lang === 'id' ? "Tentang" : "About" },
              { id: "tools", icon: "fa-solid fa-screwdriver-wrench", label: lang === 'id' ? "Keahlian" : "Tools" },
              { id: "projects", icon: "fa-solid fa-box-archive", label: lang === 'id' ? "Proyek" : "Projects" },
              { id: "certificates", icon: "fa-solid fa-certificate", label: lang === 'id' ? "Sertifikat" : "Certificates" },
              { id: "contact", icon: "fa-solid fa-envelope", label: lang === 'id' ? "Kontak" : "Contact" },
              // TOMBOL CHATBOT BARU DI FOOTER
              { id: "chat", icon: "fa-solid fa-robot", label: lang === 'id' ? "Tanya AI" : "Ask AI" },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-label={item.label}
                // Jika tombol chat dan isChatMode aktif, berikan warna cyan menyala
                className={`group relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                  item.id === 'chat' && isChatMode 
                    ? 'bg-cyan text-black shadow-[0_0_10px_rgba(0,255,255,0.5)]' 
                    : 'bg-transparent text-gray-400 hover:bg-white/10 hover:text-cyan hover:-translate-y-1'
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 shadow-lg whitespace-nowrap">
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* 3. Bagian Kanan: Kosong (Penyeimbang grid) */}
        <div className="hidden md:block"></div>

      </div>
    </footer>
  );
};

export default Footer;