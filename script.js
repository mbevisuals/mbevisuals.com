/* =========================================================
   script.js — small bits of interactivity.
   Your C++/Python background will carry over: variables,
   functions, conditionals all work similarly.
   ========================================================= */

// 1. Put the current year in the footer automatically.
//    document.getElementById finds an HTML element by its id="..."
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Reveal sections as they scroll into view (simple fade-in).
//    IntersectionObserver watches elements and tells us when they appear on screen.
const revealTargets = document.querySelectorAll('.project-card, .service, .about-grid, .section-header');

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 700ms ease, transform 700ms ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// 3. Project modal — open on card click, close on button or backdrop click.
const modal            = document.getElementById('project-modal');
const modalClose       = document.getElementById('modal-close');
const modalVideo       = document.getElementById('modal-video');
const modalImage       = document.getElementById('modal-image');
const modalTitle       = document.getElementById('modal-title');
const modalTag         = document.getElementById('modal-tag');
const modalOverview    = document.getElementById('modal-overview');
const modalUsecase     = document.getElementById('modal-usecase');
const modalClient      = document.getElementById('modal-client');
const modalLinksEl     = document.getElementById('modal-links');
const modalOverviewWrap = document.getElementById('modal-overview-wrap');
const modalUsecaseWrap  = document.getElementById('modal-usecase-wrap');
const modalClientWrap   = document.getElementById('modal-client-wrap');
const modalLinksWrap    = document.getElementById('modal-links-wrap');

function toEmbedUrl(url) {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|v=)([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function setField(wrap, el, value) {
  el.textContent = value || '';
  wrap.style.display = value ? 'block' : 'none';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalTag.textContent   = card.dataset.tag;
    setField(modalOverviewWrap, modalOverview, card.dataset.overview);
    setField(modalUsecaseWrap,  modalUsecase,  card.dataset.usecase);
    setField(modalClientWrap,   modalClient,   card.dataset.client);
    const rawLinks = card.dataset.links || '';
    if (rawLinks) {
      modalLinksEl.className = 'modal-links';
      modalLinksEl.innerHTML = rawLinks.split('||').map(entry => {
        const [label, url] = entry.split('::');
        return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
      }).join('');
      modalLinksWrap.style.display = 'block';
    } else {
      modalLinksWrap.style.display = 'none';
      modalLinksEl.innerHTML = '';
    }
    const embedUrl = toEmbedUrl(card.dataset.video);
    if (embedUrl) {
      modalVideo.src           = embedUrl;
      modalVideo.style.display = 'block';
      modalImage.style.display = 'none';
      modalImage.src           = '';
    } else {
      modalImage.src           = card.querySelector('img').src;
      modalImage.style.display = 'block';
      modalVideo.style.display = 'none';
      modalVideo.src           = '';
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  modalVideo.src = '';
  modalImage.src = '';
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// 4. View more / View less toggle for the work grid.
const viewMoreBtn = document.getElementById('view-more-btn');
const extraCards = document.querySelectorAll('.extra-card');

viewMoreBtn.addEventListener('click', () => {
  const expanded = viewMoreBtn.classList.contains('expanded');
  extraCards.forEach(card => card.classList.toggle('visible', !expanded));
  viewMoreBtn.classList.toggle('expanded', !expanded);
  viewMoreBtn.innerHTML = expanded
    ? 'View more <span class="chevron">&#8964;</span>'
    : 'View less <span class="chevron">&#8964;</span>';
});

// 4. Small nicety: log a friendly message in the browser console.
//    Open DevTools (Cmd+Option+I on Mac) to see it.
console.log('%cMiki Studio — portfolio v1 👋', 'color:#ff6a3d;font-weight:bold;font-size:14px;');
