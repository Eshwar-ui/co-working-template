/* ============================================
   CoWork Hub - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ---------- Preloader ----------
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.classList.add('loaded'));
    setTimeout(() => preloader.classList.add('loaded'), 3000);
  }

  // ---------- Navbar Scroll ----------
  const navbar = document.querySelector('#navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('shadow-lg', window.scrollY > 50);
      navbar.classList.toggle('border-transparent', window.scrollY > 50);
    });
  }

  // ---------- Mobile Menu ----------
  const menuToggle = document.querySelector('#menuToggle');
  const mobileMenu = document.querySelector('#mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const spans = menuToggle.querySelectorAll('span');
      if (!mobileMenu.classList.contains('hidden')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
  }

  // ---------- Dark Mode Toggle ----------
  const darkToggle = document.querySelector('#darkToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    if (darkToggle) darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      darkToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }

  // ---------- RTL Toggle ----------
  const rtlToggle = document.querySelector('#rtlToggle');
  const savedRTL = localStorage.getItem('rtl');
  
  if (savedRTL === 'true') {
    html.setAttribute('dir', 'rtl');
    if (rtlToggle) {
      rtlToggle.classList.add('active');
      rtlToggle.textContent = 'LTR';
    }
  }

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const isRTL = html.getAttribute('dir') === 'rtl';
      if (isRTL) {
        html.removeAttribute('dir');
        localStorage.setItem('rtl', 'false');
        rtlToggle.classList.remove('active');
        rtlToggle.textContent = 'RTL';
      } else {
        html.setAttribute('dir', 'rtl');
        localStorage.setItem('rtl', 'true');
        rtlToggle.classList.add('active');
        rtlToggle.textContent = 'LTR';
      }
    });
  }

  // ---------- Back to Top ----------
  const backToTop = document.querySelector('#backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- GSAP Scroll Animations ----------
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Fade In Up
    gsap.utils.toArray('.gsap-fade-up').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out'
      });
    });

    // Stagger children
    gsap.utils.toArray('.gsap-stagger').forEach(container => {
      const children = Array.from(container.children);
      if (children.length > 0) {
        gsap.from(children, {
          scrollTrigger: { 
            trigger: container, 
            start: 'top 85%',
            onEnter: () => gsap.set(children, { visibility: 'visible' })
          },
          y: 30, 
          opacity: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          clearProps: 'all'
        });
      }
    });

    // Scale In
    gsap.utils.toArray('.gsap-scale').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        scale: 0.9, opacity: 0, duration: 0.6, ease: 'back.out(1.7)',
        clearProps: 'all'
      });
    });

    // Slide from left
    gsap.utils.toArray('.gsap-slide-left').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        x: -60, opacity: 0, duration: 0.8, ease: 'power2.out',
        clearProps: 'all'
      });
    });

    // Slide from right
    gsap.utils.toArray('.gsap-slide-right').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        x: 60, opacity: 0, duration: 0.8, ease: 'power2.out',
        clearProps: 'all'
      });
    });

    // Counter animation
    gsap.utils.toArray('.gsap-counter').forEach(el => {
      const target = parseInt(el.getAttribute('data-count') || el.textContent);
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 90%' },
        textContent: 0, duration: 2, snap: { textContent: 1 },
        ease: 'power1.out',
        onUpdate: function() {
          el.textContent = Math.floor(this.targets()[0].textContent);
          if (el.dataset.suffix) el.textContent += el.dataset.suffix;
          if (el.dataset.prefix) el.textContent = el.dataset.prefix + el.textContent;
        }
      });
    });
  }

  // ---------- Form Validation ----------
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', function (e) {
      let valid = true;
      form.querySelectorAll('[required]').forEach(input => {
        const errorEl = input.parentElement.querySelector('.form-error');
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('border-red-500', 'ring-2', 'ring-red-200');
          if (errorEl) errorEl.classList.remove('hidden');
        } else {
          input.classList.remove('border-red-500', 'ring-2', 'ring-red-200');
          if (errorEl) errorEl.classList.add('hidden');
        }
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            valid = false;
            input.classList.add('border-red-500', 'ring-2', 'ring-red-200');
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid email address';
              errorEl.classList.remove('hidden');
            }
          }
        }
      });
      if (!valid) e.preventDefault();
    });
  });

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Tabs ----------
  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', function () {
      const group = this.closest('[data-tab-group]');
      if (!group) return;
      group.querySelectorAll('[data-tab]').forEach(t => {
        t.classList.remove('text-primary', 'border-primary', 'bg-primary/10');
        t.classList.add('text-gray-500');
      });
      this.classList.add('text-primary', 'border-primary', 'bg-primary/10');
      this.classList.remove('text-gray-500');
      const target = this.dataset.tab;
      group.closest('section').querySelectorAll('[data-tab-content]').forEach(content => {
        content.classList.toggle('hidden', content.dataset.tabContent !== target);
      });
    });
  });

  // ---------- FAQ Accordion ----------
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');
      // Close all
      document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.nextElementSibling.classList.add('hidden');
        const ic = btn.querySelector('.faq-icon');
        if (ic) ic.style.transform = 'rotate(0deg)';
      });
      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // ---------- Gallery Lightbox ----------
  const galleryItems = document.querySelectorAll('.gallery-trigger');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImg = document.querySelector('#lightboxImg');
  const lightboxClose = document.querySelector('#lightboxClose');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = item.dataset.src || item.querySelector('img')?.src || '';
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
});




