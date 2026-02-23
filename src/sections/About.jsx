import React from 'react';
import { aboutData } from '../data/content'; 

const About = () => {
  const lang = localStorage.getItem('selectedLang') || 'en';

  return (
    // .about { padding: ... } -> Tailwind: py-20 px-6
    <section id="about" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-5xl">
        
        {/* 1. Judul Section (.section-title) */}
        <h2 className="text-center text-5xl font-bold text-white mb-10 drop-shadow-[0_0_20px_rgba(0,242,254,0.3)] reveal-on-scroll">
          {lang === 'id' ? 'Tentang Saya' : 'About Me'}
        </h2>

        {/* 2. Kotak Pembungkus (.about-container) */}
        {/* Background: #0f0f11, Border: Ungu tipis, Radius: 20px, Shadow: Halus */}
        <div className="bg-[#0f0f11] border border-purple-500/20 rounded-[20px] p-8 md:p-[50px] flex justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] reveal-on-scroll delay-100">
          
          {/* 3. Konten Text (.about-content) -> MAX-WIDTH 900px, TEXT-LEFT */}
          <div className="w-full max-w-[900px] text-left">
            
            {/* Paragraf Loop */}
            {/* .about-content p { color: muted; margin-bottom: 20px; line-height: 1.8; } */}
            {aboutData.paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-[#a0a0a0] mb-5 leading-[1.8] text-base md:text-lg"
              >
                {paragraph[lang]}
              </p>
            ))}

            {/* 4. Stats Section (.stats) */}
            {/* Display: Flex, Center, Gap: 60px, Border Top/Bottom, Text Shadow Neon */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-[60px] my-10 py-[30px] border-y border-white/5 text-center drop-shadow-[0_0_20px_rgba(0,242,254,0.3)]">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* .stat-item h3 { font-size: 2.2rem; font-weight: 700; color: #fff; } */}
                  <h3 className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  {/* .stat-item p { color: muted; } */}
                  <p className="text-[#a0a0a0] text-sm md:text-base">
                    {stat.label[lang]}
                  </p>
                </div>
              ))}
            </div>

            {/* 5. Motto (.motto) */}
            {/* Display: Block, Italic, Center, Color: #555 */}
            <small className="block text-[#555] italic text-center mt-5 text-sm md:text-base">
              {aboutData.motto[lang]}
            </small>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;