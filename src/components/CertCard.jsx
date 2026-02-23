import React from 'react';

const CertCard = ({ data, onClick, lang }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-[#151518] rounded-xl overflow-hidden border border-white/5 cursor-pointer 
                 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] 
                 transition-all duration-300 animate-fade-in"
    >
      {/* Gambar Cover */}
      <div className="relative h-48 overflow-hidden border-b border-white/5">
        <img
          src={data.cover}
          alt={data.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />  
        
        {/* Overlay Ikon Mata */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <span className="text-white font-semibold flex items-center gap-2 border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm bg-white/10">
            <i className="fa-solid fa-eye"></i> Detail
          </span>
        </div>
      </div>

      {/* Info Teks */}
      <div className="p-5 bg-[#151518]">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-cyan transition-colors">
          {data.title[lang]}
        </h3>
        
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <i className="fa-solid fa-building-columns text-cyan/70 text-xs"></i>
          {data.issuer}
        </p>
      </div>
    </div>
  );
};

export default CertCard;