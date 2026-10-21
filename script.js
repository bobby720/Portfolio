/* ============================================================
   Populates the page from the portfolio data above.
   ============================================================ */

// ── Loader letters ──────────────────────────────────────────
(function () {
  const nameEl = document.getElementById('loader-name');
  if (!nameEl) return;
  const full = (DATA.name || 'ESWARA SAI').toUpperCase();
  nameEl.innerHTML = full.split('').map(c =>
    c === ' ' ? '<span style="width:.4em;display:inline-block;"></span>'
              : `<span>${c}</span>`
  ).join('');
})();

// ── Skill icons map ─────────────────────────────────────────
const SKILL_ICONS = {
  'HTML':'<i class="fab fa-html5"></i>',
  'CSS':'<i class="fab fa-css3-alt"></i>',
  'JavaScript':'<i class="fab fa-js-square"></i>',
  'React':'<i class="fab fa-react"></i>',
  'Java':'<i class="fab fa-java"></i>',
  'Spring Boot':'<i class="fas fa-leaf"></i>',
  'Python':'<i class="fab fa-python"></i>',
  'MySQL':'<i class="fas fa-database"></i>',
  'Git':'<i class="fab fa-git-alt"></i>',
  'GitHub':'<i class="fab fa-github"></i>',
  'VS Code':'<i class="fas fa-code"></i>',
  'IntelliJ IDEA':'<i class="fas fa-infinity"></i>',
  'ChatGPT (Model GPT-5.5)':'<svg class="llm-icon" viewBox="0 0 2406 2406" aria-hidden="true"><g fill="currentColor"><path d="M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z"/><use href="#openai-mark" transform="rotate(60 1203 1203)"/><use href="#openai-mark" transform="rotate(120 1203 1203)"/><use href="#openai-mark" transform="rotate(180 1203 1203)"/><use href="#openai-mark" transform="rotate(240 1203 1203)"/><use href="#openai-mark" transform="rotate(300 1203 1203)"/></g><defs><path id="openai-mark" d="M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z"/></defs></svg>',
  'Gemini (Model 3.1 Flash)':'<svg class="llm-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>',
  'Claude (Model Haiku 4.5, Sonnet 4.6)':'<svg class="llm-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#D97757" d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>',
  'AntigravityAI':'<svg class="llm-icon" viewBox="0 0 136 136" aria-hidden="true"><path fill="#3186FF" d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z" transform="translate(12 10)"/></svg>'
};
const SKILL_LEVELS = {
  'HTML':100,'CSS':100,'JavaScript':100,
  'Java':100,'Spring Boot':100,'Python':100,
  'MySQL':100,
  'Git':100,'GitHub':100,'VS Code':100,'IntelliJ IDEA':100,
  'ChatGPT (Model GPT-5.5)':100,'Gemini (Model 3.1 Flash)':100,'Claude (Model Haiku 4.5, Sonnet 4.6)':100,'AntigravityAI':100
};

const profileImage = document.getElementById('hero-profile-img');
if (profileImage && DATA.profileImage) profileImage.src = DATA.profileImage;

const heroSocialLinks = {
  'hero-linkedin': DATA.linkedin,
  'hero-github': DATA.github,
  'hero-instagram': DATA.instagram
};
Object.entries(heroSocialLinks).forEach(([id, href]) => {
  const link = document.getElementById(id);
  if (link && href) link.href = href;
});
const heroEmailLink = document.getElementById('hero-email');
if (heroEmailLink && DATA.email) heroEmailLink.href = `mailto:${DATA.email}`;

// ── Projects ────────────────────────────────────────────────
(function () {
  const grid = document.getElementById('projects-grid');
  if (!grid || !DATA.projects) return;

  function slugify(text) {
    return String(text || '')
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function getProjectSlug(project) {
    return project.slug || slugify(project.title || 'project');
  }

  function getProjectBySlug(slug) {
    return DATA.projects.find(project => getProjectSlug(project) === slug);
  }

  function buildBarPanel(items, label) {
    if (!items || !items.length) return '';

    const total = items.reduce((sum, item) => sum + (item.pct || 0), 0);
    const normalise = total > 0 ? 100 / total : 1;
    const segments = items.map(item =>
      `<div class="pbar-seg" style="width:${(item.pct * normalise).toFixed(2)}%;background:${item.color || '#D4AF37'};"
            title="${item.name} ${item.pct}%"></div>`
    ).join('');
    const legend = items.map(item => `
      <span class="pbar-dot-wrap">
        <span class="pbar-dot" style="background:${item.color || '#D4AF37'};"></span>
        <span class="pbar-dot-name">${item.name}</span>
        <span class="pbar-dot-pct">${item.pct}%</span>
      </span>
    `).join('');

    return `
      <div class="pbar-panel">
        <p class="pbar-label">${label}</p>
        <div class="pbar-track">${segments}</div>
        <div class="pbar-legend">${legend}</div>
      </div>`;
  }

  function renderProjectList() {
    const groupedByCategory = {};
    const categoryOrder = ['Self-Initiated Projects', 'Academic projects', 'Hackathon Innovations'];

    DATA.projects.forEach(p => {
      const cat = p.category || 'Other';
      if (!groupedByCategory[cat]) groupedByCategory[cat] = [];
      groupedByCategory[cat].push(p);
    });

    grid.innerHTML = categoryOrder
      .filter(category => groupedByCategory[category] && groupedByCategory[category].length)
      .map(category => {
        const cards = groupedByCategory[category].map((project, index) => {
          const projectNumber = project.projectNumber || String(index + 1).padStart(2, '0');
          const imageHtml = project.image && project.image !== '#'
            ? `<img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy" decoding="async"
                onerror="this.outerHTML='<div class=\\'project-img-placeholder\\'>${project.title}</div>'">`
            : `<div class="project-img-placeholder">${project.title}</div>`;

          return `
            <article class="project-card reveal" data-delay="${(index % 3) + 1}">
              <div class="project-card-header">
                <span class="project-number">PROJECT ${projectNumber}</span>
                <span class="project-category-badge">${project.category}</span>
              </div>
              ${imageHtml}
              <div class="project-body">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.shortDescription || project.description}</p>
                <button class="project-explore" type="button" data-project-slug="${getProjectSlug(project)}">
                  EXPLORE <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('');

        return `
          <div class="project-category-title reveal">
            <h3>${category}</h3>
          </div>
          <div class="project-category-container">${cards}</div>
        `;
      }).join('');

    grid.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));

    grid.querySelectorAll('.project-explore').forEach(button => {
      button.addEventListener('click', () => {
        const slug = button.dataset.projectSlug;
        if (!slug) return;

        if (window.history && window.history.pushState) {
          window.history.pushState({ project: slug }, '', `/projects/${slug}`);
        } else {
          window.location.hash = `project=${slug}`;
        }

        renderCurrentProject();
      });
    });
  }

  function renderProjectDetail(project) {
    if (!project) {
      renderProjectList();
      return;
    }

    const imageHtml = project.image && project.image !== '#'
      ? `<img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="project-img-placeholder" style="display:none;">${project.title}</div>`
      : `<div class="project-img-placeholder">${project.title}</div>`;

    const techStackHtml = project.techStack
      ? Object.entries(project.techStack).map(([group, items]) => `
        <div class="project-tech-group">
          <h5>${group}</h5>
          <ul>${(items || []).map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      `).join('')
      : '';

    const featureHtml = (project.features || []).map(feature => `<li>${feature}</li>`).join('');
    const architectureHtml = (project.architecture || []).map(step => `<li>${step}</li>`).join('');
    const languageBarsHtml = buildBarPanel(project.languages, 'Languages');
    const llmBarsHtml = buildBarPanel(project.LLM, 'LLM Usage');

    const githubLink = project.github
      ? `<a href="${project.github}" class="btn btn-outline btn-sm" target="_blank"><i class="fab fa-github"></i> GitHub</a>`
      : '';
    const liveLink = project.live && project.live !== '#'
      ? `<a href="${project.live}" class="btn btn-gold btn-sm" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>`
      : '';

    grid.innerHTML = `
      <div class="project-detail-shell">
        <article class="project-detail">
          <button class="project-detail-back" type="button">← Back to projects</button>
          <div class="project-detail-hero">
            <div>
              <p class="project-detail-kicker">PROJECT ${project.projectNumber || '00'}</p>
              <h3 class="project-detail-title">${project.title}</h3>
              <p class="project-detail-tagline">${project.tagline || project.shortDescription || project.description}</p>
              <div class="project-detail-meta">
                <span class="project-detail-badge">${project.category}</span>
                ${project.status ? `<span class="project-detail-status">${project.status}</span>` : ''}
              </div>
            </div>
            <div class="project-detail-visual">${imageHtml}</div>
          </div>

          <div class="project-detail-grid">
            <section class="project-detail-section">
              <h4>Overview</h4>
              <p>${project.overview || project.description}</p>
            </section>
            <section class="project-detail-section">
              <h4>The Problem</h4>
              <p>${project.problem || 'The issue this project addressed was rooted in everyday friction and missed opportunities for better workflows.'}</p>
            </section>
            <section class="project-detail-section">
              <h4>The Solution</h4>
              <p>${project.solution || 'The solution focused on creating a more structured, useful, and user-friendly experience.'}</p>
            </section>
            <section class="project-detail-section">
              <h4>Key Features</h4>
              <ul class="project-detail-list">${featureHtml || '<li>Core experience design</li>'}</ul>
            </section>
          </div>

          <div class="project-detail-grid">
            <section class="project-detail-section">
              <h4>Tech Stack</h4>
              <div class="project-detail-tech-stack">${techStackHtml}</div>
            </section>
            <section class="project-detail-section">
              <h4>System Architecture</h4>
              <ul class="project-detail-architecture">${architectureHtml}</ul>
            </section>
          </div>

          ${languageBarsHtml || llmBarsHtml ? `
            <div class="project-detail-grid">
              <section class="project-detail-section project-detail-breakdown">
                <h4>Languages &amp; AI Usage</h4>
                ${languageBarsHtml}
                ${llmBarsHtml}
              </section>
            </div>
          ` : ''}

          <div class="project-links" style="margin-top:1.4rem;">${githubLink}${liveLink}</div>
        </article>
      </div>
    `;

    const backButton = grid.querySelector('.project-detail-back');
    if (backButton) {
      backButton.addEventListener('click', () => {
        if (window.history && window.history.pushState) {
          window.history.replaceState({}, '', '/#projects');
        } else {
          window.location.href = '/#projects';
          return;
        }
        renderProjectList();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  function renderCurrentProject() {
    const routeSlug = (() => {
      const pathMatch = window.location.pathname.match(/\/projects\/([^/?#]+)/);
      if (pathMatch) return decodeURIComponent(pathMatch[1]);

      const hashMatch = (window.location.hash || '').match(/(?:\/projects\/|project=)([^/?#]+)/);
      if (hashMatch) return decodeURIComponent(hashMatch[1]);

      return '';
    })();

    const project = routeSlug ? getProjectBySlug(routeSlug) : null;
    if (project) {
      renderProjectDetail(project);
      return;
    }

    renderProjectList();
  }

  renderCurrentProject();
  window.addEventListener('popstate', renderCurrentProject);
  window.addEventListener('hashchange', renderCurrentProject);
})();

// ── Timeline ─────────────────────────────────────────────────
(function () {
  const container = document.getElementById('timeline-items');
  if (!container || !DATA.timeline) return;

  DATA.timeline.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.dataset.delay = i + 1;
    item.innerHTML = `
      <div class="timeline-dot">
        <div class="timeline-dot-inner">${t.icon || '✦'}</div>
      </div>
      <div class="timeline-content">
        <p class="timeline-year">${t.year}</p>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.description}</p>
      </div>
    `;
    container.appendChild(item);
  });
})();

// ── Certificates & Achievements ──────────────────────────────
(function () {
  function renderDynamicSection(containerId, items, emptyMsg) {
    const c = document.getElementById(containerId);
    if (!c) return;
    if (!items || items.length === 0) {
      c.innerHTML = `<p class="section-empty">${emptyMsg}</p>`;
      return;
    }
    const grid = document.createElement('div');
    grid.className = 'dynamic-grid';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'dynamic-card reveal';
      card.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="cert-img" loading="lazy" decoding="async">` : ''}
        <div class="dynamic-card-body">
          <h4>${item.title}</h4>
          ${item.description ? `<p>${item.description}</p>` : ''}
          ${item.issuer ? `<p class="dynamic-card-meta">${item.issuer}</p>` : ''}
          ${item.date   ? `<p class="dynamic-card-meta">${item.date}</p>` : ''}
        </div>
      `;
      grid.appendChild(card);

      // Add lightbox click handler for certificate images
      if (item.image) {
        const img = card.querySelector('.cert-img');
        img.addEventListener('click', () => {
          const lightbox = document.getElementById('lightbox');
          const lightboxImg = document.getElementById('lightbox-img');
          if (lightbox && lightboxImg) {
            lightboxImg.src = item.image;
            lightboxImg.alt = item.title;
            lightbox.classList.add('open');
          }
        });
      }
    });
    c.appendChild(grid);
  }

  renderDynamicSection('certs-container', DATA.certificates,
    'Certificates will show up here once they are added to the portfolio data ✎');
  renderDynamicSection('achievements-container', DATA.achievements,
    'Little wins will show up here once they are added to the portfolio data ✎');
})();

// ── Gallery ──────────────────────────────────────────────────
(function () {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  if (!DATA.gallery || DATA.gallery.length === 0) {
    grid.innerHTML = `<p class="section-empty">Photos will show up here once they are added to the portfolio data ✎</p>`;
    return;
  }

  DATA.gallery.forEach(item => {
    const image = typeof item === 'string' ? item : item.src;
    const caption = typeof item === 'string' ? '' : item.caption || '';
    const div = document.createElement('div');
    div.className = 'masonry-item';
    div.innerHTML = `<img src="${image}" alt="${caption}" loading="lazy" decoding="async"><p class="gallery-caption">${caption}</p>`;
    grid.appendChild(div);
  });
})();

// ── Contact section info ─────────────────────────────────────
(function () {
  const emailEl  = document.getElementById('contact-email');
  const ghUserEl = document.getElementById('contact-github-user');
  if (emailEl)  emailEl.textContent  = DATA.email || '';
  if (ghUserEl) ghUserEl.textContent = 'github.com/' + (DATA.githubUsername || '');
})();

// ── Footer ───────────────────────────────────────────────────
(function () {
  const nameEl    = document.getElementById('footer-name');
  const titleEl   = document.getElementById('footer-title');
  const socialsEl = document.getElementById('footer-socials');
  const copyEl    = document.getElementById('footer-copy');

  if (nameEl)  nameEl.textContent  = DATA.name  || 'Eswara Sai';
  if (titleEl) titleEl.textContent = DATA.title || 'AI Application Architect';

  if (socialsEl) {
    const socials = [
      { icon: 'fab fa-linkedin-in',  href: DATA.linkedin  || '#', label: 'LinkedIn' },
      { icon: 'fab fa-instagram',    href: DATA.instagram || '#', label: 'Instagram' },
      { icon: 'fab fa-github',       href: DATA.github    || '#', label: 'GitHub' },
      { icon: 'fas fa-envelope',     href: 'mailto:' + (DATA.email || ''), label: 'Email' }
    ];
    socials.forEach(s => {
      const a = document.createElement('a');
      a.className = 'footer-social';
      a.href  = s.href;
      a.title = s.label;
      a.target = '_blank';
      a.innerHTML = `<i class="${s.icon}"></i>`;
      socialsEl.appendChild(a);
    });
  }

  if (copyEl) {
    copyEl.textContent = `© ${new Date().getFullYear()} ${DATA.name || 'Eswara Sai'} · made with ♥ and lots of coffee`;
  }
})();


(function renderAboutContent() {
  const cardsContainer = document.getElementById('about-cards');
  if (cardsContainer) {
    const cards = [
      { icon: '?', heading: 'Career Goal', text: 'To architect and deploy production-grade AI applications that create measurable impact at enterprise scale.' },
      { icon: '?', heading: 'Education', text: 'Pursuing a degree in Computer Science with a focus on Software Engineering and Artificial Intelligence.' },
      { icon: '?', heading: 'Learning Journey', text: 'Self-driven learner exploring open-source ecosystems, technical documentation, and hands-on project building.' },
      { icon: '?', heading: 'Current Focus', tags: ['AI Architecture', 'Full Stack Java', 'React', 'Spring Boot', 'System Design'] }
    ];
    cards.forEach((card, index) => {
      const element = document.createElement('article');
      element.className = 'about-card reveal';
      element.dataset.delay = index + 2;
      element.innerHTML = `<div class="about-card-icon">${card.icon}</div><h4>${card.heading}</h4>${card.tags
        ? `<div class="about-focus-tags">${card.tags.map(tag => `<span class="about-focus-tag">${tag}</span>`).join('')}</div>`
        : `<p>${card.text}</p>`}`;
      cardsContainer.appendChild(element);
    });
  }

  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || !DATA.skills) return;
  Object.entries(DATA.skills).forEach(([category, skills]) => {
    const section = document.createElement('div');
    section.className = 'skills-category reveal';
    const label = document.createElement('p');
    label.className = 'skills-category-label';
    label.textContent = category;
    section.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'skills-grid';
    skills.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `<span class="skill-icon">${SKILL_ICONS[skill] || '?'}</span><p class="skill-name">${skill}</p><div class="skill-bar"><div class="skill-bar-fill" data-width="${SKILL_LEVELS[skill] || 75}%"></div></div>`;
      grid.appendChild(card);
    });
    section.appendChild(grid);
    skillsContainer.appendChild(section);
  });
})();

/* ============================================================
   script.js – Eswara Sai Premium Portfolio
   ============================================================ */

/* ── DOM Ready ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const safeInit = (fn) => { try { fn(); } catch (error) { console.error(`[portfolio] ${fn.name} failed:`, error); } };
  [initLoader, initCursor, initParticles, initMouseLight, initNavbar, initScrollReveal,
   initSkillBars, initTilt, initTimeline, initGallery, initContactForm, initMobileMenu, initHeroArtwork]
    .forEach(safeInit);
  document.documentElement.classList.add('js-ready');
});

function initHeroArtwork() {
  const isDev =
    ['localhost', '127.0.0.1', '[::1]', ''].includes(location.hostname) ||
    location.protocol === 'file:' ||
    new URLSearchParams(location.search).has('dev');

  document.querySelectorAll('.new-home-art-slot').forEach(slot => {
    const image = slot.querySelector('img');
    if (!image) return;

    const showImage = () => {
      slot.classList.remove('is-missing');
      image.classList.add('is-loaded');
    };
    const showPlaceholder = () => {
      slot.classList.add('is-missing');
      if (isDev) console.info(`[portfolio] Missing image: ${slot.dataset.asset}`);
    };

    image.addEventListener('load', showImage);
    image.addEventListener('error', showPlaceholder);
    if (image.complete) {
      if (image.naturalWidth > 0) showImage();
      else showPlaceholder();
    }
  });
}

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
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length) return;

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
