import React from 'react';
import { heroData } from '../data/content'; 

const Contact = () => {
  const lang = localStorage.getItem('selectedLang') || 'en';

  const contactList = [
    {
      id: "wa",
      icon: "fa-brands fa-whatsapp",
      title: "WhatsApp",
      value: "+62 895-4129-46795", 
      link: heroData.socials.whatsapp,
    },
    {
      id: "email",
      icon: "fa-solid fa-envelope",
      title: "Email",
      value: "ahmfhri09@gmail.com",
      link: heroData.socials.email,
    },
    {
      id: "ig",
      icon: "fa-brands fa-instagram",
      title: "Instagram",
      value: "@ahmdfhrri_",
      link: heroData.socials.instagram,
    },
    {
      id: "linkedin",
      icon: "fa-brands fa-linkedin-in",
      title: "LinkedIn",
      value: "Ahmad Fachri",
      link: heroData.socials.linkedin,
    },
    {
      id: "github",
      icon: "fa-brands fa-github",
      title: "GitHub",
      value: "Ahmad Fachri",
      link: heroData.socials.github,
    },
    {
      id: "gitlab",
      icon: "fa-brands fa-gitlab",
      title: "Gitlab",
      value: "Ahmad Fachri",
      link: heroData.socials.gitlab,
    }
  ];

  return (
    // .contact { padding: 100px 0; }
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          {/* .contact-container h2 */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(0,242,254,0.3)] tracking-wider reveal-on-scroll">
            {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
          </h2>
          {/* .subtitle */}
          <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl mx-auto reveal-on-scroll delay-100">
            {lang === 'id'
              ? 'Punya proyek dalam pikiran atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya.'
              : 'Have a project in mind or just want to say hi? Feel free to reach out.'}
          </p>
        </div>

        {/* Wrapper (.contact-wrapper) */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          
          {/* ========================================= */}
          {/* 1. KOLOM KIRI: INFO KONTAK (.contact-info) */}
          {/* ========================================= */}
          <div className="flex-1 w-full reveal-on-scroll delay-200">
            {/* Background: rgba(255, 255, 255, 0.03), Border: rgba(255, 255, 255, 0.05) */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-8 rounded-[20px] h-full flex flex-col justify-center">
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {lang === 'id' ? 'Info Kontak' : 'Contact Info'}
              </h3>
              {/* .info-desc */}
              <p className="text-[#a0a0a0] mb-8 text-sm leading-relaxed">
                {lang === 'id' 
                  ? 'Anda dapat menghubungi saya secara langsung melalui platform berikut:' 
                  : 'You can contact me directly through the following platforms:'}
              </p>

              {/* .contact-list */}
              <div className="flex flex-col gap-5">
                {contactList.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    // .contact-item style & hover effects
                    className="group flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan/10 hover:border-cyan hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
                  >
                    {/* .icon-box style & hover effects */}
                    <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center rounded-full bg-cyan/10 text-cyan text-lg group-hover:bg-cyan group-hover:text-black transition-all duration-300">
                      <i className={`${item.icon}`}></i>
                    </div>

                    {/* .contact-text */}
                    <div className="flex flex-col">
                      <h4 className="text-white font-bold text-base m-0 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[#b0b0b5] text-sm m-0">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* ========================================= */}
          {/* 2. KOLOM KANAN: FORMULIR (.contact-form) */}
          {/* ========================================= */}
          {/* flex: 1.2 (w-[120%] relative to left col in flex) */}
          <div className="flex-[1.2] w-full reveal-on-scroll delay-300">
            {/* Background & Border sama dengan info */}
            <form 
              action="https://formspree.io/f/mgozvyqw" 
              method="POST" 
              className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-[20px] h-full flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                {lang === 'id' ? 'Kirim Pesan' : 'Send Message'}
              </h3>
              
              <div className="space-y-6">
                {/* Input Nama */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#ccc] block">
                    {lang === 'id' ? 'Nama Lengkap' : 'Full Name'}
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.2)] focus:bg-black/60 transition-all"
                  />
                </div>
                
                {/* Input Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#ccc] block">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.2)] focus:bg-black/60 transition-all"
                  />
                </div>
                
                {/* Input Pesan */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#ccc] block">
                    {lang === 'id' ? 'Pesan' : 'Message'}
                  </label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="Write your message here..." 
                    required 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan focus:shadow-[0_0_10px_rgba(0,242,254,0.2)] focus:bg-black/60 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Tombol Kirim (.btn-send) */}
                <button 
                  type="submit" 
                  className="w-full py-3.5 mt-2 rounded-lg bg-gradient-to-r from-cyan to-blue-500 text-black font-bold text-base hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(0,242,254,0.4)] transition-all duration-300 cursor-pointer"
                >
                  {lang === 'id' ? 'Kirim Pesan' : 'Send Message'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;