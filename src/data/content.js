// src/data/content.js

// =========================================================================
// HERO SECTION DATA
// =========================================================================
export const heroData = {
  name: "Ahmad Fachri",
  role: "DevOps Engineer",
  quote: {
    id: "“Hindari atau hadapi saja”",
    en: "“Avoid or just undertake it”",
  },
  greeting: {
    id: "Hai, Saya Ahmad Fachri",
    en: "Hi I'm Ahmad Fachri",
  },
  description: {
    id: "Seorang DevOps Engineer yang berdedikasi dengan hasrat kuat untuk otomatisasi, infrastruktur cloud, dan keandalan platform. Fokus pada perancangan sistem yang skalabel, dapat diobservasi, dan tangguh.",
    en: "A dedicated DevOps Engineer with a strong passion for automation, cloud infrastructure, and platform reliability. Focused on designing scalable, observable, and resilient systems.",
  },
  status: "Online",
  socials: {
    github: "https://github.com/ahmdfhrii",
    gitlab: "https://gitlab.com/ahmdfhri",
    linkedin: "https://www.linkedin.com/in/ahmad-fachri-6873b2293",
    email: "mailto:ahmfhri09@gmail.com",
    instagram: "https://instagram.com/ahmdfhrri_",
    whatsapp: "https://wa.me/62895412946795", // 
  },
};

// =========================================================================
// ABOUT SECTION DATA
// =========================================================================
export const aboutData = {
  paragraphs: [
    {
      id: "Saya Ahmad Fachri, seorang DevOps Engineer dengan hasrat kuat untuk membangun infrastruktur yang skalabel, andal, dan otomatis untuk mendukung produk digital modern. Fokus utama saya terletak pada praktik DevOps, termasuk manajemen infrastruktur cloud, pipeline CI/CD, otomatisasi, dan keandalan sistem.",
      en: "I am Ahmad Fachri, a DevOps Engineer with a strong passion for building scalable, reliable, and automated infrastructure to support modern digital products. My primary focus lies in DevOps practices, including cloud infrastructure management, CI/CD pipelines, automation, and system reliability.",
    },
    {
      id: "Selain DevOps, saya memiliki dasar yang kuat dalam Keamanan Siber, khususnya dalam pengujian penetrasi (penetration testing), yang memungkinkan saya mendekati desain sistem dengan pola pikir sadar keamanan. Saya memahami pentingnya membangun infrastruktur yang tidak hanya efisien dan skalabel, tetapi juga tangguh terhadap ancaman keamanan.",
      en: "In addition to DevOps, I have a solid foundation in Cybersecurity, particularly in penetration testing, which allows me to approach system design with a security-aware mindset. I understand the importance of building infrastructure that is not only efficient and scalable, but also resilient against security threats.",
    },
    {
      id: "Saya juga memiliki paparan yang kuat terhadap AI Engineering, termasuk bekerja dengan konsep dan alat AI modern. Latar belakang ini membantu saya lebih memahami bagaimana aplikasi berbasis AI beroperasi dan bagaimana cara men-deploy, menskalakan, dan memeliharanya secara efektif di lingkungan produksi.",
      en: "I also have strong exposure to AI Engineering, including working with modern AI concepts and tools. This background helps me better understand how AI-driven applications operate and how to deploy, scale, and maintain them effectively in production environments.",
    },
    {
      id: "Dengan menggabungkan keahlian DevOps dengan pengetahuan dalam keamanan siber dan kecerdasan buatan, saya bertujuan untuk menjembatani pengembangan, operasi, dan kecerdasan sistem. Tujuan saya adalah menghadirkan sistem yang kuat, aman, dan siap menghadapi masa depan yang dapat tumbuh seiring dengan perkembangan tuntutan teknologi.",
      en: "By combining DevOps expertise with knowledge in cybersecurity and artificial intelligence, I aim to bridge development, operations, and system intelligence. My goal is to deliver robust, secure, and future-ready systems that can grow alongside evolving technological demands.",
    },
  ],
  stats: [
    { value: "10+", label: { id: "Proyek Selesai", en: "Project Finished" } },
    { value: "10+", label: { id: "Tools Dikuasai", en: "Tools Mastered" } },
    { value: "5+", label: { id: "Pendidikan & Pelatihan", en: "Education & Training" } },
  ],
  motto: {
    id: '"Amankan masa kini, otomatisasi masa depan."',
    en: '"Secure the present, automate the future."',
  },
};

// =========================================================================
// SKILLS / TOOLS DATA
// =========================================================================
export const skillsData = [
  { name: "JavaScript", category: { id: "Bahasa", en: "Language" }, iconType: "font", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "Tailwind", category: { id: "CSS Framework", en: "CSS Framework" }, iconType: "image", img: "/assets/tools/tailwind.png" },
  { name: "Bootstrap", category: { id: "CSS Framework", en: "CSS Framework" }, iconType: "font", icon: "fa-brands fa-bootstrap", color: "#7952b3" },
  { name: "PHP", category: { id: "Bahasa", en: "Language" }, iconType: "font", icon: "fa-brands fa-php", color: "#777bb4" },
  { name: "Python", category: { id: "Bahasa", en: "Language" }, iconType: "font", icon: "fa-brands fa-python", color: "#3776ab" },
  { name: "MySQL", category: { id: "Basis Data", en: "Database" }, iconType: "image", img: "/assets/tools/mysql.png" },
  { name: "Laravel", category: { id: "Framework", en: "Framework" }, iconType: "image", img: "/assets/tools/laravel.png" },
  { name: "React JS", category: { id: "Framework", en: "Framework" }, iconType: "image", img: "/assets/tools/react.png" },
  { name: "Docker", category: { id: "Container", en: "Container" }, iconType: "font", icon: "fa-brands fa-docker", color: "#2496ed" },
  { name: "Linux", category: { id: "Sistem Operasi", en: "Operating System" }, iconType: "image", img: "/assets/tools/linux.png" },
  { name: "GitHub", category: { id: "Repo", en: "Repo" }, iconType: "font", icon: "fa-brands fa-github", color: "#ffffff" },
  { name: "VS Code", category: { id: "Text Editor", en: "Text Editor" }, iconType: "image", img: "/assets/tools/vscode.png" },
  { name: "AWS", category: { id: "Cloud", en: "Cloud" }, iconType: "font", icon: "fa-brands fa-aws", color: "#ff9900" },
  { name: "Ansible", category: { id: "Otomatisasi", en: "Automation" }, iconType: "image", img: "/assets/tools/ansible.png" },
  { name: "Terraform", category: { id: "IaC", en: "IaC" }, iconType: "image", img: "/assets/tools/terraform.png" },
  { name: "Jenkins", category: { id: "CI/CD", en: "CI/CD" }, iconType: "image", img: "/assets/tools/jenkins.png" },
  { name: "Prometheus", category: { id: "Pemantauan", en: "Monitoring" }, iconType: "image", img: "/assets/tools/prometheus.png" },
  { name: "Grafana", category: { id: "Pemantauan", en: "Monitoring" }, iconType: "image", img: "/assets/tools/grafana.png" },
  { name: "n8n", category: { id: "Otomatisasi", en: "Automation" }, iconType: "image", img: "/assets/tools/n8n.png" },
  { name: "Kubernetes", category: { id: "Orkestrasi", en: "Orchestration" }, iconType: "image", img: "/assets/tools/kubernetes.png" }
];

// =========================================================================
// PROJECTS DATA
// =========================================================================
export const projectsData = [
  {
    id: 1,
    title: {
      id: "Infrastruktur Web Otomatis & Sistem Observabilitas Real-Time",
      en: "Automated Web Infrastructure & Real-Time Observability System",
    },
    desc: {
      id: "Proyek ini adalah implementasi ujung-ke-ujung dari Siklus Hidup DevOps modern, berfokus pada otomatisasi, skalabilitas, dan observabilitas. Ini mendemonstrasikan transisi mulus dari pengembangan lokal ke produksi melalui pipeline CI/CD yang kuat dan sistem pemantauan infrastruktur yang komprehensif.",
      en: "This project is an end-to-end implementation of a modern DevOps Lifecycle, focusing on automation, scalability, and observability. It demonstrates a seamless transition from local development to production through a robust CI/CD pipeline and a comprehensive infrastructure monitoring system.",
    },
    stack: ["Github", "Github Action"],
    images: [
      "/assets/project/workflow_N2N.png",
      "/assets/project/before_n2n.png",
      "/assets/project/after_n2n.png",
      "/assets/project/grafana_dashboard.png",
    ],
    cover: "/assets/project/workflow_N2N.png",
    repo: "https://github.com/ahmdfhrii/automated-flask-deployment.git",
    glowColor: "blue"
  },
  {
    id: 2,
    title: {
      id: "Penyediaan IDP Berbasis ChatOps",
      en: "ChatOps IDP Provisioning",
    },
    desc: {
      id: "Platform Pengembang Internal berbasis ChatOps yang dirancang untuk mengotomatiskan penyediaan infrastruktur melalui perintah chat. Terintegrasi dengan pipeline CI/CD dan Infrastructure as Code untuk memungkinkan alur kerja penerapan yang cepat, aman, dan terstandarisasi.",
      en: "A ChatOps-based Internal Developer Platform designed to automate infrastructure provisioning through chat commands. Integrated with CI/CD pipelines and Infrastructure as Code to enable fast, secure, and standardized deployment workflows.",
    },
    stack: ["Slack", "Jenkins", "Terraform"],
    images: [
      "/assets/project/workflow-diagram.png",
      "/assets/project/command-slack.png",
      "/assets/project/slack.png",
      "/assets/project/n8n.png",
      "/assets/project/jenkins.png",
      "/assets/project/env.png",
    ],
    cover: "/assets/project/workflow-diagram.png",
    repo: "https://github.com/ahmdfhrii/chatops-idp-provisioning.git",
    glowColor: "purple",
  },
  {
    id: 3,
    title: {
      id: "NFEST – Platform Acara Kampus Berbasis Web",
      en: "NFEST – Web-Based Campus Event Platform",
    },
    desc: {
      id: "NFEST adalah platform informasi acara kampus berbasis web yang dikembangkan sebagai proyek tim di bawah mata kuliah Manajemen Proyek. Platform ini menyediakan informasi terkini tentang acara kampus yang dikategorikan ke dalam ORMAWA, UKM, dan Acara Eksternal.",
      en: "NFEST is a web-based campus event information platform developed as a team project under the Project Management course. The platform provides up-to-date information on campus events categorized into ORMAWA, UKM, and External Events.",
    },
    stack: ["Laravel", "Tailwind", "Mysql"],
    images: ["/assets/project/cover-nfest.png"], 
    cover: "/assets/project/cover-nfest.png",
    repo: "https://github.com/ahmdfhrii/NFEST.git",
    glowColor: "green",
  },
  {
    id: 4,
    title: {
      id: "Portofolio Interaktif & Asisten AI Gemini",
      en: "Interactive Portfolio & Gemini AI Assistant",
    },
    desc: {
      id: "Website portofolio modern dan responsif yang dibangun dengan arsitektur SPA (Single Page Application). Dilengkapi dengan sistem dwibahasa (Bilingual ID/EN) dinamis dan integrasi Chatbot AI cerdas bertenaga Google Gemini API untuk berinteraksi dengan pengunjung secara real-time.",
      en: "A modern and responsive portfolio website built with SPA (Single Page Application) architecture. It features a dynamic bilingual system (ID/EN) and a smart AI Chatbot integration powered by the Google Gemini API to interact with visitors in real-time."
    },
    stack: ["ReactJS", "Tailwind", "Vite"],
    images: ["/assets/project/portofolio.png"],
    cover: "/assets/project/portofolio.png",
    repo: "https://github.com/ahmdfhrii/myPortofolio.git",
    glowColor: "cyan",
  },
  {
    id: 5, 
    title: {
      id: "REST API DevSecOps & SonarQube Pipeline",
      en: "REST API DevSecOps & SonarQube Pipeline",
    },
    desc: {
      id: "Implementasi DevSecOps end-to-end pada REST API. Terintegrasi dengan SonarQube (Dockerized) dan Jenkins pipeline untuk Static Code Analysis. Alur kerja mencakup eksekusi SonarScanner di dalam container Jenkins dan pemindaian kerentanan pustaka menggunakan OWASP Dependency-Check. Hasil analisis keamanan dan report HTML terintegrasi penuh di Jenkins Dashboard dengan status pipeline yang selalu teruji mutunya.",
      en: "End-to-end DevSecOps implementation for a REST API. Integrated with a Dockerized SonarQube and Jenkins pipeline for Static Code Analysis. The workflow includes executing SonarScanner within the Jenkins container and scanning for library vulnerabilities using OWASP Dependency-Check. Security analysis results and HTML reports are fully integrated into the Jenkins Dashboard, ensuring high-quality pipelines."
    },
    stack: ["Docker", "Jenkins", "SonarQube", "OWASP", "REST API"], 
    images: [
      "/assets/project/sonarqube3.png", 
      "/assets/project/sonarqube1.png", 
      "/assets/project/sonarqube2.png",
      "/assets/project/sonarqube4.png"
    ],
    cover: "/assets/project/sonarqube3.png",
    repo: "https://github.com/ahmdfhrii/rest-api-devsecops.git",
    glowColor: "purple", 
  },
  {
    id: 6, 
    title: {
      id: "Sistem Observabilitas & Monitoring Container",
      en: "Container Observability & Monitoring System",
    },
    desc: {
      id: "Implementasi sistem observabilitas infrastruktur untuk memantau kinerja container Docker secara real-time. Proyek ini mengintegrasikan cAdvisor untuk pengumpulan metrik, Prometheus sebagai time-series database (scraping engine), dan Grafana untuk visualisasi data interaktif. Dashboard yang dibangun memantau metrik krusial seperti utilisasi CPU, konsumsi Memori, trafik Jaringan (Network RX/TX), dan aktivitas Disk I/O.",
      en: "An infrastructure observability system implementation for real-time monitoring of Docker container performance. This project integrates cAdvisor for metrics collection, Prometheus as a time-series database and scraping engine, and Grafana for interactive data visualization. The custom dashboards monitor crucial metrics such as CPU utilization, Memory consumption, Network traffic (RX/TX), and Disk I/O activity."
    },
    stack: ["Docker", "Prometheus", "Grafana", "cAdvisor", "Observability"], 
    
    images: [
      "/assets/project/dash-grafana1.png", 
      "/assets/project/dash-grafana2.png" 
    ],
    cover: "/assets/project/dash-grafana1.png",
    
    repo: "https://github.com/ahmdfhrii/project-monitoring.git", 
    glowColor: "orange", 
  }
];

// =========================================================================
// CERTIFICATES DATA
// =========================================================================
export const certificatesData = [
  {
    id: 1,
    title: { id: "Studi Independen – DevOps Engineer", en: "Studi Independen – DevOps Engineer" },
    desc: { id: "Berpartisipasi dalam program Studi Independen di Nurul Fikri Academy dengan spesialisasi Rekayasa DevOps.", en: "Participated in the Studi Independen program at Nurul Fikri Academy with a specialization in DevOps Engineering." },
    issuer: "Nurul Fikri Academy",
    date: "2025",
    images: ["/assets/sertifikat/sib-nfa1.png", "/assets/sertifikat/sib-nfa2.png"],
    cover: "/assets/sertifikat/sib-nfa1.png",
  },
  {
    id: 2,
    title: { id: "Integrator Sistem Bersertifikasi BNSP", en: "BNSP Certified System Integrator" },
    desc: { id: "Integrator Sistem Bersertifikasi oleh BNSP dengan kompetensi yang terbukti dalam mengintegrasikan aplikasi, server, jaringan, dan infrastruktur TI.", en: "Certified System Integrator by BNSP with proven competency in integrating applications, servers, networks, and IT infrastructure." },
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2025",
    images: ["/assets/sertifikat/bnsp1.png", "/assets/sertifikat/bnsp2.png"],
    cover: "/assets/sertifikat/bnsp1.png",
  },
  {
    id: 3,
    title: { id: "Aplikasi Paling Kuat", en: "Most Powerful App" },
    desc: { id: "Penghargaan untuk pembuatan aplikasi yang kuat secara teknis dan berpusat pada pengguna dengan dampak yang berarti.", en: "Awarded for creating a technically strong, user-centered application with meaningful impact." },
    issuer: "Team Paprikahive",
    date: "2025",
    images: ["/assets/sertifikat/Most_Powerful_App-17-Paprika.png"],
    cover: "/assets/sertifikat/Most_Powerful_App-17-Paprika.png",
  },
  {
    id: 4,
    title: { id: "Astro 6.0 - Capture The Flag", en: "Astro 6.0 - Capture The Flag" },
    desc: { id: "Sertifikat penghargaan untuk Juara 3 dalam Kompetisi Capture The Flag di Astro 6.0.", en: "Certificate awarded to 3rd place winner in Capture The Flag Competition at Astro 6.0." },
    issuer: "Astro STT Terpadu Nurul Fikri",
    date: "2024",
    images: ["/assets/sertifikat/ctf1.png"],
    cover: "/assets/sertifikat/ctf1.png",
  },
  {
    id: 5,
    title: { id: "Pameran Bisnis & Teknologi Digital", en: "Business & Digital Tech Exhibition" },
    desc: { id: "Terpilih sebagai peserta dalam Pameran Bisnis dan Teknologi Digital yang diselenggarakan oleh Sekolah Tinggi Teknologi Terpadu Nurul Fikri.", en: "Selected as a participant in the Business and Digital Technology Exhibition held by Sekolah Tinggi Teknologi Terpadu Nurul Fikri." },
    issuer: "STT Terpadu Nurul Fikri",
    date: "2025",
    images: ["/assets/sertifikat/pameran.png"],
    cover: "/assets/sertifikat/pameran.png",
  },
  {
    id: 6,
    title: { id: "Astro 7.0 - Capture The Flag", en: "Astro 7.0 - Capture The Flag" },
    desc: { id: "Sertifikat penghargaan untuk Juara 3 dalam Kompetisi Capture The Flag di Astro 7.0.", en: "Certificate awarded to 3rd place winner in Capture The Flag Competition at Astro 7.0." },
    issuer: "Astro STT Terpadu Nurul Fikri",
    date: "2025",
    images: ["/assets/sertifikat/ctf2.png"],
    cover: "/assets/sertifikat/ctf2.png",
  },
  {
    id: 7,
    title: { id: "Kelas Gratis C++ Programming", en: "Free Class C++ Programming" },
    desc: { id: "Berpartisipasi dalam Kelas Gratis Pemrograman C++ Batch 5 yang diselenggarakan oleh Dilesin.", en: "Participated in the Free Class C++ Programming Batch 5 organized by Dilesin." },
    issuer: "Dilesin",
    date: "2024",
    images: ["/assets/sertifikat/dilesin.png"],
    cover: "/assets/sertifikat/dilesin.png",
  },
  {
    id: 8,
    title: { id: "Seminar Big Tech Vol. 03", en: "Seminar Big Tech Vol. 03" },
    desc: { id: "Berpartisipasi dalam seminar teknis yang membahas peran pengujian otomatis dalam meningkatkan efisiensi.", en: "Participated in a technical seminar discussing the role of automated testing in improving efficiency." },
    issuer: "HIMATI - STT NF",
    date: "2024",
    images: ["/assets/sertifikat/big-tech.png"],
    cover: "/assets/sertifikat/big-tech.png",
  },
  {
    id: 9,
    title: { id: "AI dalam Cybersecurity", en: "AI in Cybersecurity" },
    desc: { id: "Berpartisipasi dalam kuliah umum yang membahas peran Kecerdasan Buatan dalam meningkatkan keamanan siber.", en: "Participated in a public lecture discussing the role of Artificial Intelligence in enhancing cybersecurity." },
    issuer: "STT NF",
    date: "2025",
    images: ["/assets/sertifikat/kuliah-umum.png"],
    cover: "/assets/sertifikat/kuliah-umum.png",
  },
  {
    id: 10,
    title: { id: "Lokakarya Keamanan Siber", en: "Cybersecurity Workshop" },
    desc: { id: "Berpartisipasi dalam lokakarya keamanan siber yang berfokus pada teknologi terkini, termasuk Kecerdasan Buatan (AI), IoT, dan Blockchain.", en: "Participated in a cybersecurity workshop focusing on the latest technologies, including Artificial Intelligence, IoT, and Blockchain." },
    issuer: "NFSCC - STT NF",
    date: "2024",
    images: ["/assets/sertifikat/workshop.png"],
    cover: "/assets/sertifikat/workshop.png",
  },
  {
    id: 11,
    title: { id: "Kompetisi CTF Nasional", en: "National Cybersecurity CTF" },
    desc: { id: "Berpartisipasi dalam kompetisi keamanan siber Capture The Flag (CTF) tingkat nasional yang diadakan sebagai bagian dari I-FEST #13.", en: "Participated in a national-level Capture The Flag (CTF) cybersecurity competition held as part of I-FEST #13." },
    issuer: "I-FEST#13",
    date: "2025",
    images: ["/assets/sertifikat/ctf3.png"],
    cover: "/assets/sertifikat/ctf3.png",
  },
  {
    id: 12,
    title: { id: "Belajar Dasar AI", en: "Learning the Basics of AI" },
    desc: { id: "Sertifikasi ini memvalidasi pemahaman fundamental tentang Kecerdasan Buatan (AI). Kurikulum mencakup pemahaman konsep dasar Artificial Intelligence, teknik pemrosesan Data, fondasi Machine Learning, serta pengantar pemodelan Deep Learning.", en: "This certification validates a fundamental understanding of Artificial Intelligence (AI). The curriculum covers core Artificial Intelligence concepts, Data processing techniques, Machine Learning foundations, and an introduction to Deep Learning modeling." },
    issuer: "Dicoding",
    date: "2026",
    images: [
      "/assets/sertifikat/dicodingAI.png",
      "/assets/sertifikat/dicodingAI2.png"
    ],
    cover: "/assets/sertifikat/dicodingAI.png",
    credentialId: "MRZMWKOYKPYQ", 
    credentialUrl: "https://www.dicoding.com/certificates/MRZMWKOYKPYQ"
  },
  {
    id: 13,
    title: { id: "Jaringan Dasar Komputer", en: "Basic Computer Networking" },
    desc: { 
      id: "Sertifikasi ini membuktikan pemahaman fundamental mengenai infrastruktur jaringan komputer. Kurikulum mencakup model OSI dan TCP/IP, protokol dan port IP, pengalamatan MAC dan IP, teknik subnetting, serta pengenalan media transmisi fisik (kabel UTP/STP dan Fiber Optic). Pengetahuan ini merupakan fondasi penting dalam mengelola infrastruktur cloud dan lingkungan DevOps.", 
      en: "This certification validates a fundamental understanding of computer network infrastructure. The curriculum covers the OSI and TCP/IP models, IP protocols and ports, MAC and IP addressing, subnetting techniques, and an introduction to physical transmission media (UTP/STP and Fiber Optic cables). This knowledge forms a crucial foundation for managing cloud infrastructure and DevOps environments." 
    },
    issuer: "ID-Networkers",
    date: "2026",
    images: [
      "/assets/sertifikat/JKD-IDN.png",
    ],
    cover: "/assets/sertifikat/JKD-IDN.png",
    credentialId: "IDN-1771394096-180-62518", 
    credentialUrl: "https://lms.idn.id/cert-verification"
  },
  {
    id: 14,
    title: { id: "Kursus Kriptografi Klasik untuk Pemula", en: " Classical Cryptography for Beginner Course" },
    desc: { 
      id: "Sertifikasi keamanan siber yang berfokus pada teknik dasar enkripsi dan dekripsi informasi. Pembelajaran mencakup berbagai algoritma kriptografi historis seperti Shift, Substitution, Vigenere, Affine, Hill, dan Transposition Cipher, yang diakhiri dengan ujian komprehensif.", 
      en: "A cybersecurity certification focusing on foundational information encryption and decryption techniques. The curriculum covers various historical cryptographic algorithms such as Shift, Substitution, Vigenere, Affine, Hill, and Transposition Ciphers, culminating in a comprehensive exam." 
    },
    issuer: "Cyber Academy",
    date: "2026",
    images: [
      "/assets/sertifikat/crypto.png",
    ],
    cover: "/assets/sertifikat/crypto.png",
    credentialId: "CCFB01102260350", 
    credentialUrl: "https://www.cyberacademy.id/certificate/CCFB01102260350"
  }
];