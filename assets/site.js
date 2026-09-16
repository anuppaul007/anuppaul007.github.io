(() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.main-nav');
  if (menu && nav) menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const email = document.getElementById('email-link');
  if (email) { const addr = ['a.p.elias','gmail.com'].join('@'); email.href = 'mailto:' + addr; }
  document.querySelectorAll('img[src$="anup-paul-elias.jpg"]').forEach(img => { img.addEventListener('error', () => { img.src='https://avatars.githubusercontent.com/u/224054340?v=4'; }, {once:true}); });
})();
