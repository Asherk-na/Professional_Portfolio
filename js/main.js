// Smooth scroll for internal navigation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) =>{
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    })
  })
});

// Simple hamburger toggle for small screens
const menuBtn = () => {
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? '✕' : '☰';
    btn.classList.toggle('open', isOpen);
    if(overlay){
      overlay.style.display = isOpen ? 'block' : 'none';
      overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }
    document.body.classList.toggle('nav-open', isOpen);
  });
  // Close nav when clicking a link
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false'); btn.textContent = '☰';
      btn.classList.remove('open');
      if(overlay) { overlay.style.display='none'; overlay.setAttribute('aria-hidden','true'); }
      document.body.classList.remove('nav-open');
    })
  })
  // Close on overlay click
  if(overlay) overlay.addEventListener('click', () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.textContent = '☰'; overlay.style.display='none'; overlay.setAttribute('aria-hidden','true'); document.body.classList.remove('nav-open'); })
  // Close on Escape
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape'){ nav.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.textContent = '☰'; if(overlay){overlay.style.display='none';overlay.setAttribute('aria-hidden','true');} document.body.classList.remove('nav-open');}})
};

menuBtn();

// Add loaded class to profile photo image to avoid flashing alt text and animate in
(() => {
  const profileImg = document.querySelector('.profile-photo img');
  if(!profileImg) return;
  const setLoaded = () => profileImg.classList.add('loaded');
  if(profileImg.complete) {
    setLoaded();
  } else {
    profileImg.addEventListener('load', setLoaded);
    profileImg.addEventListener('error', setLoaded); // still clear the placeholder if error
  }
})();

// Show back to top button
const backToTop = document.getElementById('backToTop');
if(backToTop){
  window.addEventListener('scroll', () =>{
    if(window.scrollY > 300) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  })
  backToTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));
}

// Small scroll reveal
const reveal = () => {
  const els = document.querySelectorAll('.reveal, .card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('visible');
    })
  },{threshold:0.08});
  els.forEach((el, i) => {
    el.classList.add('reveal');
    // Staggered animation delay based on index
    el.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
    observer.observe(el);
  })
};
reveal();

// Navigation scroll spy to set aria-current on links
(() => {
  const links = document.querySelectorAll('#navLinks a[href^="#"]');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if(!links.length || !sections.length) return;
  const setCurrent = () => {
    const offset = window.innerHeight / 4;
    let currentIndex = -1;
    for(let i=0;i<sections.length;i++){
      const rect = sections[i].getBoundingClientRect();
      if(rect.top - offset <= 0) currentIndex = i;
    }
    links.forEach((link, i) => {
      if(i === currentIndex){
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    })
  };
  setCurrent();
  window.addEventListener('scroll', () => setCurrent());
})();
