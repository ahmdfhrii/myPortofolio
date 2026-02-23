import React from 'react';

const ProjectCard = ({ data, lang, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-[#151518] rounded-xl overflow-hidden border border-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] reveal-on-scroll"
    >
      
      {/* 1. Gambar Cover (Tetap Kompak h-40) */}
      <div className="h-40 overflow-hidden relative border-b border-white/5">
        <img
          src={data.cover}
          alt={data.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* 2. Konten Text (Tetap Kompak p-4) */}
      <div className="p-4">
        
        {/* Judul */}
        <h3 className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-cyan transition-colors duration-300">
          {data.title[lang]}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {data.stack.map((tech, index) => (
            <span 
              key={index} 
              className="text-[9px] font-medium tracking-wide text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5 uppercase group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Deskripsi */}
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
          {data.desc[lang]}
        </p>

      </div>
    </div>
  );
};

export default ProjectCard;