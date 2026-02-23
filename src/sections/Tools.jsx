import React from 'react';
import { skillsData } from '../data/content';

const Tools = () => {
  const lang = localStorage.getItem('selectedLang') || 'en';

  return (
    <section id="tools" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md reveal-on-scroll">
            {lang === 'id' ? 'Alat & Teknologi' : 'Tools & Technologies'}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto reveal-on-scroll delay-100">
            {lang === 'id' 
              ? 'Keahlian & Stack Profesional Saya' 
              : 'My Professional Skills & Stack'}
          </p>
        </div>

        {/* Grid Tools */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-[#141416] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 
                         hover:-translate-y-2 hover:border-white/20 hover:bg-[#1a1a1d] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] 
                         transition-all duration-300 cursor-default reveal-on-scroll"
            >
              
              {/* Icon / Logo */}
              <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {skill.iconType === 'font' ? (
                  <i 
                    className={`${skill.icon} text-5xl`} 
                    style={{ color: skill.color }}
                  ></i>
                ) : (
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-14 h-14 object-contain drop-shadow-lg" 
                    loading="lazy"
                  />
                )}
              </div>

              {/* Info Text */}
              <div className="text-center space-y-1">
                <h4 className="text-lg font-bold text-white group-hover:text-cyan transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium group-hover:text-gray-400">
                  {skill.category[lang]}
                </p>
              </div>

              {/* Dekorasi Glow Tipis saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tools;