import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, data, lang, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  const images = (data.images && data.images.length > 0) ? data.images : [data.cover];
  const currentImgSrc = images[currentIndex];

  const nextSlide = (e) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <div 
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 pt-20 animate-fade-in"
      onClick={onClose} 
    >
      <div 
        className="bg-[#141416] w-full max-w-[800px] h-[85vh] max-h-[700px] rounded-2xl border border-white/10 shadow-2xl relative flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-red-500 transition-colors"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* --- BAGIAN GAMBAR --- */}
        <div className="flex-[55] bg-black relative flex items-center justify-center overflow-hidden p-0 md:p-4 group">
          <img 
            src={currentImgSrc} 
            alt="Slide" 
            onClick={() => onImageClick && onImageClick(currentImgSrc)}
            className="max-w-full max-h-full object-contain shadow-lg cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
          />
           {images.length > 1 && (
            <>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-cyan hover:text-black flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-cyan hover:text-black flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              <div className="absolute bottom-4 flex gap-2">
                {images.map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-cyan w-4' : 'bg-white/30'}`}></div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* --- BAGIAN TEKS --- */}
        <div className="flex-[45] bg-[#141416] border-t border-white/10 p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {data.title[lang]}
          </h3>

          {data.issuer && (
            <div className="flex flex-col gap-2 mb-6 text-sm text-gray-400 border-l-2 border-cyan pl-3">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-building-columns text-cyan w-4 text-center"></i>
                <span className="text-white font-semibold">Issuer:</span> {data.issuer}
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-regular fa-calendar text-cyan w-4 text-center"></i>
                <span className="text-white font-semibold">Date:</span> {data.date}
              </p>
              
              {/* === ID KREDENSIAL DAN TOMBOL URL DISATUKAN SEBARIS === */}
              {data.credentialId && (
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <i className="fa-solid fa-id-badge text-cyan w-4 text-center"></i>
                  <span className="text-white font-semibold">Credential ID:</span> 
                  <span className="font-mono text-cyan/90 bg-cyan/10 px-2 py-0.5 rounded text-xs border border-cyan/10">
                    {data.credentialId}
                  </span>
                  
                  {/* Tombol Mini URL tepat di sebelahnya */}
                  {data.credentialUrl && (
                    <a 
                      href={data.credentialUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="ml-1 flex items-center gap-1.5 px-2.5 py-1 bg-cyan/10 hover:bg-cyan text-cyan hover:text-black text-[10px] font-bold uppercase tracking-wider rounded border border-cyan/30 transition-all duration-300 shadow-sm"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      {lang === 'id' ? 'Show Credential' : 'Tampilkan Kredensial'}
                    </a>
                  )}
                </div>
              )}
            </div>
          )}

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line">
            {data.desc[lang]}
          </p>

          {/* Area Tombol Bawah (Sekarang Hanya untuk Source Code Proyek saja) */}
          {data.repo && (
            <div className="flex flex-wrap gap-4">
              <a href={data.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#24292e] text-white font-semibold border border-white/10 hover:border-cyan hover:bg-black hover:-translate-y-1 transition-all">
                <i className="fa-brands fa-github text-lg"></i><span>Source Code</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;