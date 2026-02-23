import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050507] flex flex-col items-center justify-center transition-opacity duration-500">
      
      {/* Container Spinner & Foto */}
      <div className="relative flex justify-center items-center mb-6">
        
        {/* 1. Foto Profil (Diam di Tengah) */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 z-10 relative shadow-2xl">
          <img 
            src="/assets/fahri3.png" 
            alt="Loading..." 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Cincin Berputar (Spinner) */}
        {/* 'inset-[-10px]' membuat ring sedikit lebih besar dari foto */}
        <div className="absolute inset-[-10px] rounded-full border-[4px] border-white/5 border-t-[#00f2fe] animate-spin shadow-[0_0_30px_rgba(0,242,254,0.4)]"></div>
      
      </div>

      {/* 3. Teks Loading Berkedip */}
      <p className="text-white font-bold tracking-[0.3em] uppercase animate-pulse text-sm">
        Loading...
      </p>

    </div>
  );
};

export default Preloader;