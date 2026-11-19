/* ==========================================
   FILENAME: script.js
   Interactive JavaScript for Mika Medi Ariansyah Portfolio
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE HAMBURGER MENU TOGGLE
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. STICKY NAVBAR EFFECT ON SCROLL
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 3. BACK TO TOP BUTTON
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. AUTO HIGHLIGHT CURRENT NAV LINK
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
        }
    });

    // 5. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.15
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // 6. INTERACTIVE PROJECT MODAL PREVIEW (1 - 8)
    const projectButtons = document.querySelectorAll('.btn-modal');
    const modalOverlay = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.getElementById('modal-close');

    const projectDetailsData = {
        '1': {
            title: 'ECLIVAL 2026',
            category: 'Sponsorship & Event Collaboration',
            desc: 'Terlibat dalam pengembangan strategi sponsorship untuk mendukung pendanaan dan keberlangsungan ECLIVAL 2026. Proyek ini mencakup identifikasi mitra potensial, pengembangan penawaran kerja sama, serta akuisisi sponsorship dari berbagai brand dan perusahaan.'
        },
        '2': {
            title: 'PBL Digital Marketing',
            category: 'Project Based Learning & Campaign Strategy',
            desc: 'Proyek berbasis studi kasus yang berfokus pada perencanaan dan pelaksanaan digital marketing. Kegiatan meliputi memahami target audiens, membuat materi promosi, hingga menjalankan kampanye promosi di berbagai platform digital.'
        },
        '3': {
            title: 'Branding.In',
            category: 'Digital Marketing & Brand Agency',
            desc: 'Proyek pengembangan bisnis agensi digital marketing yang bertujuan untuk membantu UMKM dan bisnis lokal membangun identitas brand, mengembangkan strategi promosi, serta meningkatkan jangkauan pasar melalui pemanfaatan sosial media.'
        },
        '4': {
            title: 'Business Owner – Poo Store',
            category: 'Digital Product Business',
            desc: 'Mengelola bisnis jual beli akun game digital secara mandiri, mulai dari pengadaan dan pengelolaan produk, strategi pemasaran melalui media sosial, pencatatan keuangan, penentuan harga akun, hingga menjaga loyalitas pelanggan.'
        },
        '5': {
            title: 'Implementasi Odoo ERP',
            category: 'Digital Commerce & Supply Chain System',
            desc: 'Proyek pembuatan website company profile untuk UMKM, mulai dari merancang struktur dan tampilan halaman hingga mengembangkan website yang responsif. Website dirancang untuk menampilkan informasi bisnis, produk atau layanan, serta profil UMKM secara informatif dan mudah diakses.'
        },
        '6': {
            title: 'Tabee Foodism',
            category: 'Social Media Management & Branding',
            desc: 'Proyek pengelolaan media sosial Tabee Foodism, sebuah UMKM di bidang F&B, melalui Branding.In. Kegiatan mencakup perencanaan konten, penyusunan kalender editorial, pembuatan copywriting, serta pengelolaan publikasi konten untuk membangun brand awareness dan meningkatkan interaksi dengan audiens.'
        },
        '7': {
            title: 'ASTeam Gathering',
            category: 'Event Management',
            desc: 'Proyek perencanaan dan pelaksanaan ASTGathering sebagai kegiatan untuk mempererat hubungan antaranggota komunitas. Mencakup penyusunan konsep acara, perancangan rangkaian kegiatan, koordinasi antar divisi, serta pengelolaan jalannya acara untuk menciptakan pengalaman yang berkesan bagi peserta.'
        },
        '8': {
            title: 'Creative Business',
            category: 'Creative Business Development',
            desc: 'Proyek perancangan konsep bisnis kreatif melalui pendekatan Business Model Canvas (BMC). Kegiatan mencakup identifikasi peluang usaha, analisis target pasar, penentuan nilai unggul produk (value proposition), serta penyusunan sembilan elemen model bisnis sebagai dasar pengembangan dan keberlanjutan usaha.'
        }
    };

    if (projectButtons.length > 0) {
        projectButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = btn.getAttribute('data-project');
                const data = projectDetailsData[projectId];

                if (data && modalOverlay) {
                    if (modalTitle) modalTitle.textContent = data.title;
                    if (modalCategory) modalCategory.textContent = data.category;
                    if (modalDesc) modalDesc.textContent = data.desc;
                    modalOverlay.classList.add('active');
                }
            });
        });
    }

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // 7. CERTIFICATE LIGHTBOX MODAL WITH SLIDER
    const certTriggers = Array.from(document.querySelectorAll('.cert-trigger'));
    const certModal = document.getElementById('cert-modal');
    const certModalImg = document.getElementById('cert-modal-img');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certModalClose = document.getElementById('cert-modal-close');
    const certModalPrev = document.getElementById('cert-modal-prev');
    const certModalNext = document.getElementById('cert-modal-next');

    let currentIndex = 0;

    function updateModalContent(index) {
        if (certTriggers.length === 0) return;
        if (index < 0) index = certTriggers.length - 1;
        if (index >= certTriggers.length) index = 0;
        currentIndex = index;

        const trigger = certTriggers[currentIndex];
        if (!trigger) return;

        const imgSrc = trigger.getAttribute('data-img') || (trigger.querySelector('img') ? trigger.querySelector('img').src : '');
        const imgTitle = trigger.getAttribute('data-title') || '';

        if (certModalImg) certModalImg.src = imgSrc;
        if (certModalTitle) certModalTitle.textContent = imgTitle;
    }

    if (certTriggers.length > 0 && certModal) {
        certTriggers.forEach((trigger, index) => {
            trigger.addEventListener('click', () => {
                updateModalContent(index);
                certModal.classList.add('active');
            });
        });

        if (certModalPrev) {
            certModalPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                updateModalContent(currentIndex - 1);
            });
        }

        if (certModalNext) {
            certModalNext.addEventListener('click', (e) => {
                e.stopPropagation();
                updateModalContent(currentIndex + 1);
            });
        }

        if (certModalClose) {
            certModalClose.addEventListener('click', () => {
                certModal.classList.remove('active');
            });
        }

        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                certModal.classList.remove('active');
            }
        });

        // Navigasi Keyboard (← , → , ESC)
        document.addEventListener('keydown', (e) => {
            if (!certModal.classList.contains('active')) return;
            if (e.key === 'ArrowLeft') updateModalContent(currentIndex - 1);
            if (e.key === 'ArrowRight') updateModalContent(currentIndex + 1);
            if (e.key === 'Escape') certModal.classList.remove('active');
        });
    }

});