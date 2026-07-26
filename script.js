/* =========================================================
   Dra. Monica Lee — Dermatologia
   script.js  (JavaScript puro, sem frameworks)
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Navbar: muda ao rolar ---------- */
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Menu mobile ---------- */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    const closeMenu = () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        navbar.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active', isOpen);
        navbar.classList.toggle('menu-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    /* ---------- Scroll suave (fallback para navegadores sem suporte a CSS) ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    /* ---------- Animações de entrada (Intersection Observer) ---------- */
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // pequeno atraso escalonado para elementos irmãos
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => entry.target.classList.add('visible'), delay);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        // aplica atraso escalonado dentro de grids
        document.querySelectorAll('.cards-grid, .timeline, .contato-grid').forEach(group => {
            group.querySelectorAll('.reveal').forEach((el, i) => {
                el.dataset.delay = i * 120;
            });
        });

        revealEls.forEach(el => observer.observe(el));
    } else {
        // Fallback: mostra tudo
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* ---------- Ano atual no rodapé ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

});
