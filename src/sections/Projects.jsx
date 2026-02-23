import React, { useState } from 'react';
import { projectsData } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';

const Projects = () => {
  const lang = localStorage.getItem('selectedLang') || 'en';
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // === STATE BARU UNTUK LIGHTBOX ===
  const [lightboxImg, setLightboxImg] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
    // Cek lightbox aktif sebelum nyalakan scroll kembali
    if (!lightboxImg) document.body.style.overflow = 'auto'; 
  };

  // === HANDLER LIGHTBOX ===
  const handleImageClick = (imgSrc) => {
    setLightboxImg(imgSrc);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative z-10">
      
      {/* Container diperkecil jadi max-w-4xl agar card terlihat lebih mini & proporsional */}
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md reveal-on-scroll">
            {lang === 'id' ? 'Proyek' : 'Project'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto reveal-on-scroll delay-100 text-sm md:text-base">
            {lang === 'id' 
              ? "Menampilkan pilihan proyek yang mencerminkan keterampilan, kreativitas, dan hasrat saya." 
              : "Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences."}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8 bg-[#0b0b0d]/50 border border-white/5 rounded-3xl backdrop-blur-sm shadow-2xl reveal-on-scroll delay-200">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              data={project} 
              lang={lang} 
              onClick={() => handleOpenModal(project)} 
            />
          ))}
        </div>

      </div>

      {/* === MODAL DETAIL === */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedProject}
        lang={lang}
        onImageClick={handleImageClick} // Kirim fungsi zoom ke Modal
      />

      {/* === LIGHTBOX FULLSCREEN (ZOOM) MENGGUNAKAN DESAIN ANDA === */}
      {lightboxImg && (
        <div 
          // z-50 agar berada di atas Modal Detail (yang menggunakan z-40)
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Tombol Close X Besar */}
          <button 
            onClick={closeLightbox}
            // top-24: Menurunkan tombol agar tidak tertutup Navbar di atas.
            className="absolute top-24 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 text-white transition-all duration-300 border border-white/20"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          {/* Gambar Full */}
          <img 
            src={lightboxImg} 
            alt="Full Zoom" 
            // pt-20: Memberi jarak dari atas agar gambar tidak nabrak Navbar
            className="w-auto h-auto max-w-full max-h-full object-contain shadow-2xl animate-zoom-in select-none pt-20"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Projects;