import React from 'react';
import { heroData } from '../data/content';

const Hero = () => {
  const lang = localStorage.getItem('selectedLang') || 'en';

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 pb-20 relative overflow-visible">
      
      {/* --- KONTEN UTAMA (Z-INDEX 10) --- */}
      
      {/* KOLOM KIRI: TEKS */}
      <div className="flex-1 max-w-2xl z-10 space-y-6 text-center md:text-left relative md:pl-10">
        
        {/* Quote Badge */}
        <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-black reveal-on-scroll shadow-lg">
          <span className="text-white text-sm font-medium tracking-wide flex items-center gap-2">
            {heroData.quote[lang]}
          </span>
        </div>

        {/* Judul Besar */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight reveal-on-scroll delay-100">
          <span className="shining-text block drop-shadow-2xl">
            {heroData.greeting[lang]}
          </span>
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0 reveal-on-scroll delay-200">
          {heroData.description[lang]}
        </p>

        
        {/* Tombol CTA */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-center md:items-start justify-center md:justify-start reveal-on-scroll delay-300 pt-2">
          
          {/* Grup Tombol Download CV */}
          <div className="flex gap-4 justify-center md:justify-start">
            
            {/* Tombol CV Indonesia */}
            <div className="flex flex-col items-center gap-1.5">
              <a 
                href="/CV_AhmadFachri.pdf" 
                download
                className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-cyan/20 hover:border-cyan hover:text-cyan transition-all duration-300 backdrop-blur-sm drop-shadow-2xl text-center"
              >
                {lang === 'id' ? 'Unduh' : 'Download CV'}
              </a>
            </div>
          </div>
          
          {/* Tombol Lihat Proyek */}
          <div className="flex flex-col">
            <a 
              href="#projects" 
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-cyan/20 hover:border-cyan hover:text-cyan transition-all duration-300 backdrop-blur-sm drop-shadow-2xl text-center"
            >
              {lang === 'id' ? 'Lihat Proyek' : 'Explore Projects'}
            </a>
          </div>
          
        </div>
      </div>

      {/* KOLOM KANAN: KARTU PROFIL */}
      <div className="flex-1 flex justify-center md:justify-end mt-16 md:mt-0 relative z-10 reveal-on-scroll delay-300">
        <div className="relative w-[300px] h-[450px] bg-[#141416]/60 backdrop-blur-xl rounded-[30px] border border-white/10 overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
          
          <div 
            className="absolute inset-0 bg-cover bg-center md:bg-top transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(/assets/fahri3.png)` }} 
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          {/* Header Kartu */}
          <div className="absolute top-8 w-full text-center z-20">
            <h2 className="text-xl font-bold text-white drop-shadow-md tracking-wide">
              {heroData.name}
            </h2>
            <p className="text-cyan font-semibold tracking-[0.2em] text-[10px] uppercase mt-1 drop-shadow-md">
              {heroData.role}
            </p>
          </div>

          {/* Bottom Glass Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-between px-2 pr-2 shadow-lg z-20">
            <div className="flex items-center gap-3 pl-1">
              <div className="w-8 h-8 rounded-full border-2 border-cyan overflow-hidden bg-black">
                <img src="/assets/fahri3.png" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-white">@ahmdfhri</span>
                <span className="text-[9px] text-green-400 font-bold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  {heroData.status}
                </span>
              </div>
            </div>
            <a href="#contact" className="px-3 py-1.5 bg-white text-black text-[10px] font-bold rounded-full hover:bg-cyan hover:scale-105 transition-all shadow-md">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;