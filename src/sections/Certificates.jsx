import React, { useState } from 'react';
import { certificatesData } from '../data/content';
import CertCard from '../components/CertCard';
import Modal from '../components/Modal';

const Certificates = () => {
  const lang = localStorage.getItem('selectedLang') || 'en';
  
  // Logic: Show All vs Show Less
  const [showAll, setShowAll] = useState(false);
  
  // Logic: Modal Detail
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Logic: Lightbox (Zoom Fullscreen)
  const [lightboxImg, setLightboxImg] = useState(null);

  const displayedCerts = showAll ? certificatesData : certificatesData.slice(0, 6);

  // --- HANDLER MODAL DETAIL ---
  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCert(null), 300);
    // Cek apakah lightbox sedang aktif sebelum nyalakan scroll kembali
    if (!lightboxImg) document.body.style.overflow = 'auto'; 
  };

  // --- HANDLER LIGHTBOX (ZOOM) ---
  const handleImageClick = (imgSrc) => {
    setLightboxImg(imgSrc);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    // Tidak perlu ubah overflow body karena Modal Detail masih terbuka di belakangnya
  };

  const toggleView = () => {
    if (showAll) {
      const section = document.getElementById('certificates');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="certificates" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md reveal-on-scroll">
            {lang === 'id' ? 'Sertifikat' : 'Certificates'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto reveal-on-scroll delay-100">
            {lang === 'id' ? 'Validasi keahlian saya.' : 'Validations of my expertise.'}
          </p>
        </div>

        {/* Grid Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCerts.map((cert) => (
            <CertCard 
              key={cert.id}
              data={cert}
              lang={lang}
              onClick={() => handleOpenModal(cert)} // Klik Card -> Buka Modal
            />
          ))}
        </div>

        {/* Tombol View More */}
        {certificatesData.length > 6 && (
          <div className="mt-12 text-center reveal-on-scroll">
            <button 
              onClick={toggleView}
              className={`px-8 py-3 rounded-full border font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm group flex items-center justify-center mx-auto gap-2 ${showAll ? 'border-red-500/50 bg-red-500/10 text-red-400' : 'border-white/10 bg-white/5 text-white'}`}
            >
              <span>{showAll ? (lang === 'id' ? 'Tampilkan Sedikit' : 'Show Less') : (lang === 'id' ? 'Lihat Semua' : 'View All')}</span>
              <i className={`fa-solid fa-chevron-${showAll ? 'up' : 'down'}`}></i>
            </button>
          </div>
        )}
      </div>

      {/* Modal Detail */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedCert}
        lang={lang}
        onImageClick={handleImageClick} // Kirim fungsi zoom ke Modal
      />

      {/* === LIGHTBOX FULLSCREEN (ZOOM) === */}
      {lightboxImg && (
        <div 
          // PERUBAHAN: z-40 agar di bawah Navbar.
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Tombol Close X Besar */}
          <button 
            onClick={closeLightbox}
            // top-24: Menurunkan tombol agar tidak tertutup Navbar di atas.
            className="absolute top-24 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 text-white transition-all duration-300 border border-white/20"
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

export default Certificates;