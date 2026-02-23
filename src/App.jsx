import { useState, useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import ChatbotPage from './components/ChatbotPage';

// Import Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Tools from './sections/Tools';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

import './index.css'; 

function App() {
  // Secara default loading adalah true saat web pertama kali dibuka
  const [loading, setLoading] = useState(true);
  const [isChatMode, setIsChatMode] = useState(false);

  // 1. LOGIKA PRELOADER (Mematikan loading setelah 1.5 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Mengubah state loading menjadi false agar konten utama muncul
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 2. LOGIKA ANIMASI SCROLL (Menambahkan class 'active' saat elemen terlihat)
  useEffect(() => {
    // Observer hanya berjalan jika loading sudah selesai dan tidak sedang di halaman chat
    if (!loading && !isChatMode) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 }); // Elemen akan muncul saat 10% bagiannya terlihat di layar

      const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
      hiddenElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [loading, isChatMode]); // Berjalan ulang jika state loading atau isChatMode berubah

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-[#050507] min-h-screen text-white font-poppins selection:bg-cyan selection:text-black overflow-x-hidden relative flex flex-col justify-between">
          
          {/* Background Blobs (Efek Cahaya) */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#00f2fe]/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-purple-900/20 rounded-full blur-[100px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507]"></div>
          </div>

          {/* Kirim state isChatMode ke Navbar */}
          <Navbar isChatMode={isChatMode} setIsChatMode={setIsChatMode} />
          
          {/* LOGIKA SWITCH HALAMAN */}
          {isChatMode ? (
            <ChatbotPage />
          ) : (
            <main className="relative z-10 flex-grow">
              <Hero />
              <About />
              <Tools />
              <Projects />
              <Certificates />
              <Contact />
            </main>
          )}

          {/* Kirim state setIsChatMode ke Footer juga */}
          <Footer isChatMode={isChatMode} setIsChatMode={setIsChatMode} />
        </div>
      )}
    </>
  );
}

export default App;