/* ============================================================
   script.js – Eswara Sai Premium Portfolio
   ============================================================ */

/* ── DOM Ready ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initParticles();
  initMouseLight();
  initNavbar();
  initScrollReveal();
  initSkillBars();
  initTilt();
  initTimeline();
  initGallery();
  initContactForm();
  initMobileMenu();
});

/* ── Loader ────────────────────────────────────────────────── */
function initLoader() {
  const loader   = document.getElementById('loader');
  const name     = document.getElementById('loader-name');
  const subtitle = document.getElementById('loader-title');
  const fill     = document.getElementById('loader-bar-fill');
  const percent  = document.getElementById('loader-percent');

  if (!loader) return;

  // Animate percent counter
  let pct = 0;
  if (percent) {
    percent.style.opacity = '1';
    const ticker = setInterval(() => {
      pct += Math.random() * 12 | 0;
      if (pct >= 100) { pct = 100; clearInterval(ticker); }
      percent.textContent = pct + '%';
    }, 80);
  }

  // Bar fill
  if (fill) setTimeout(() => { fill.style.width = '100%'; }, 200);

  // Name reveal – letter by letter
  if (name) {
    setTimeout(() => {
      name.style.opacity = '1';
      const spans = name.querySelectorAll('span');
      spans.forEach((s, i) => {
        setTimeout(() => {
          s.style.transition = 'opacity .5s ease, transform .6s cubic-bezier(0.34,1.56,0.64,1)';
          s.style.opacity    = '1';
          s.style.transform  = 'translateY(0)';
        }, i * 110);
      });
    }, 400);
  }

  // Subtitle
  if (subtitle) {
    setTimeout(() => {
      subtitle.style.transition = 'opacity .8s ease';
      subtitle.style.opacity    = '1';
    }, 1600);
  }

  // Exit
  setTimeout(() => {
    loader.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(0.25,0.46,0.45,0.94)';
    loader.style.opacity    = '0';
    loader.style.transform  = 'scale(1.04)';
    setTimeout(() => {
      loader.style.display = 'none';
      revealHero();
    }, 900);
  }, 2800);
}

function revealHero() {
  const items = [
    '.hero-eyebrow', '.hero-name', '.hero-subtitle', '.hero-desc', '.hero-cta', '.hero-image-wrap'
  ];
  items.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    setTimeout(() => {
      el.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(0.25,0.46,0.45,0.94)';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, i * 150);
  });
}

/* ── Custom Cursor ─────────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width   = '24px';
      dot.style.height  = '24px';
      ring.style.width  = '56px';
      ring.style.height = '56px';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width   = '12px';
      dot.style.height  = '12px';
      ring.style.width  = '36px';
      ring.style.height = '36px';
    });
  });
}

/* ── Floating Particles ────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  const GOLD = '#D4AF37';
  const count = Math.min(70, window.innerWidth / 18 | 0);
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.2 + .3,
    speedX: (Math.random() - .5) * .25,
    speedY: (Math.random() - .5) * .25,
    opacity: Math.random() * .5 + .1,
    pulse: Math.random() * Math.PI * 2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.pulse += .015;
      const alpha = p.opacity * (.7 + .3 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = GOLD;
      ctx.globalAlpha = alpha;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    ctx.globalAlpha = 1;

    // Draw faint connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = GOLD;
          ctx.globalAlpha = (1 - dist / 100) * .06;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── Mouse Light ───────────────────────────────────────────── */
function initMouseLight() {
  const light = document.getElementById('mouse-light');
  if (!light) return;
  document.addEventListener('mousemove', e => {
    light.style.left = e.clientX + 'px';
    light.style.top  = e.clientY + 'px';
  });
}

/* ── Loader Particle Canvas ────────────────────────────────── */
(function initLoaderCanvas() {
  const canvas = document.getElementById('loader-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const pts = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5 + .5,
    speed: Math.random() * .4 + .1,
    angle: Math.random() * Math.PI * 2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.angle += .008;
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      if (p.x < 0 || p.x > canvas.width) p.angle = Math.PI - p.angle;
      if (p.y < 0 || p.y > canvas.height) p.angle = -p.angle;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = '#D4AF37';
      ctx.globalAlpha = .35;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Navbar ────────────────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
  });
  updateActiveLink();
}

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return; // about page has no hash-linked sections
  const links = document.querySelectorAll('.nav-links a');
  let current  = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });

  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

/* ── Scroll Reveal ─────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io  = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── Skill Bars ────────────────────────────────────────────── */
function initSkillBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.width || '80%'; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skills-category').forEach(c => io.observe(c));
}

/* ── Timeline ──────────────────────────────────────────────── */
function initTimeline() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.3 });
  document.querySelectorAll('.timeline-item').forEach(el => io.observe(el));
}

/* ── Vanilla Tilt on Project Cards ────────────────────────── */
function initTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - .5;
      const y = (e.clientY - rect.top)  / rect.height - .5;
      card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-10px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── Gallery & Lightbox ────────────────────────────────────── */
function initGallery() {
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  if (!lb) return;

  document.querySelectorAll('.masonry-item img').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('open');
    });
  });

  const close = () => lb.classList.remove('open');
  if (lbClose) lbClose.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── Contact Form ──────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-gold');
    btn.textContent = 'Message Sent ✦';
    btn.style.pointerEvents = 'none';
    if (note) note.classList.add('show');
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.pointerEvents = '';
      form.reset();
      if (note) note.classList.remove('show');
    }, 3500);
  });
}

/* ── Mobile Menu ───────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

/* ── Smooth Scroll ─────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
