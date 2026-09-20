/* ============================================================
   script.js – Eswara Sai Premium Portfolio
   ============================================================ */

/* ── DOM Ready ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const safeInit = (fn) => { try { fn(); } catch (error) { console.error(`[portfolio] ${fn.name} failed:`, error); } };
  [initLoader, initCursor, initParticles, initMouseLight, initNavbar, initScrollReveal,
   initSkillBars, initTilt, initTimeline, initGallery, initContactForm, initMobileMenu]
    .forEach(safeInit);
  document.documentElement.classList.add('js-ready');
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
    }, 55);
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
        }, i * 70);
      });
    }, 400);
  }

  // Subtitle
  if (subtitle) {
    setTimeout(() => {
      subtitle.style.transition = 'opacity .8s ease';
      subtitle.style.opacity    = '1';
    }, 1000);
  }

  // Exit
  setTimeout(() => {
    loader.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(0.34,1.56,0.64,1)';
    loader.style.opacity    = '0';
    loader.style.transform  = 'translateY(-14px) rotate(-1.5deg)';
    setTimeout(() => {
      loader.style.display = 'none';
      revealHero();
    }, 600);
  }, 1900);
}

function revealHero() {
  const items = [
    '.hero-eyebrow', '.hero-name', '.hero-subtitle', '.hero-desc', '.hero-cta', '.hero-image-wrap'
  ];
  items.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    setTimeout(() => {
      el.style.transition = 'opacity .55s ease, transform .7s cubic-bezier(0.34,1.56,0.64,1)';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
      el.style.translate  = '0 0';
    }, i * 110);
  });
}

/* ── Custom Cursor — disabled in the hand-drawn theme ──────── */
function initCursor() {
  /* The notebook design uses the normal browser cursor.
     Kept as a no-op so the call in DOMContentLoaded still works. */
  return;
  /* eslint-disable no-unreachable */
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
  /* Gold particle field removed — the paper grain (#noise) replaces it. */
  return;
  /* eslint-disable no-unreachable */
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
  /* No mouse-follow glow in the notebook theme. */
  return;
  /* eslint-disable no-unreachable */
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
  const isAboutPage = /(^|\/)about\.html$/i.test(window.location.pathname);
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length) return;

  if (isAboutPage) {
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === 'about.html'));
    return;
  }

  const candidates = Array.from(links)
    .map(a => ({ link: a, href: a.getAttribute('href') || '' }))
    .filter(x => x.href.startsWith('#'))
    .map(x => ({ ...x, el: document.querySelector(x.href) }))
    .filter(x => x.el);

  if (!candidates.length) return;
  let current = candidates[0];
  candidates.forEach(item => {
    if (window.scrollY >= item.el.offsetTop - 180) current = item;
  });
  links.forEach(a => a.classList.remove('active'));
  current.link.classList.add('active');
}

/* ── Scroll Reveal ─────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── Skill Bars ────────────────────────────────────────────── */
function initSkillBars() {
  const categories = document.querySelectorAll('.skills-category');
  if (!categories.length) return;
  const animate = (c) => c.querySelectorAll('.skill-bar-fill').forEach(bar => { bar.style.width = bar.dataset.width || '80%'; });
  if (!('IntersectionObserver' in window)) { categories.forEach(animate); return; }
  const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } }), { threshold: 0.3 });
  categories.forEach(c => io.observe(c));
}

/* ── Timeline ──────────────────────────────────────────────── */
function initTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('visible')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: 0.3 });
  items.forEach(el => io.observe(el));
}

/* ── Paper-card interaction (replaces the old 3D tilt) ─────── */
function initTilt() {
  /* Cards are rotated slightly by CSS; on press they "pin down" like paper.
     Lift + straighten on hover is handled in CSS so it stays smooth on touch. */
  document.querySelectorAll('.project-card, .dynamic-card, .masonry-item').forEach(card => {
    card.addEventListener('pointerdown', () => { card.style.transition = 'transform .1s ease'; card.style.transform = 'translateY(-2px) rotate(0deg) scale(.985)'; });
    const release = () => { card.style.transition = ''; card.style.transform = ''; };
    card.addEventListener('pointerup', release);
    card.addEventListener('pointerleave', release);
    card.addEventListener('pointercancel', release);
  });

  /* Sticker pop for the little handwritten notes in the hero */
  document.querySelectorAll('.hero-note').forEach((note, i) => {
    note.style.opacity = '0';
    setTimeout(() => {
      note.style.transition = 'opacity .5s ease, transform .6s cubic-bezier(0.34,1.56,0.64,1)';
      note.style.opacity = '1';
    }, 2200 + i * 180);
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
    const open = !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Smooth Scroll ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href*="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const url = new URL(a.href, window.location.href);
      const samePage = url.pathname === window.location.pathname;
      const target = url.hash ? document.querySelector(url.hash) : null;
      if (!samePage || !target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', url.hash);
    });
  });
});
