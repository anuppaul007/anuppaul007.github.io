(() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.main-nav');
  const setMenuOpen = open => {
    nav?.classList.toggle('open', open);
    menu?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  if (menu && nav) {
    setMenuOpen(false);
    menu.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setMenuOpen(false);
        menu.focus();
      }
    });
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !menu.contains(e.target)) setMenuOpen(false);
    });
    window.addEventListener('resize', () => {
      if (getComputedStyle(menu).display === 'none') setMenuOpen(false);
    });
  }
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const email = document.getElementById('email-link');
  if (email) { const addr = ['a.p.elias','gmail.com'].join('@'); email.href = 'mailto:' + addr; }
  document.querySelectorAll('img[src$="anup-paul-elias.jpg"]').forEach(img => { img.addEventListener('error', () => { img.src='https://avatars.githubusercontent.com/u/224054340?v=4'; }, {once:true}); });
})();
