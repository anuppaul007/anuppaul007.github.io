(() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.main-nav');
  if (menu && nav) menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

  const data = window.PORTFOLIO_DATA || {};
  const host = document.getElementById('video-host');
  if (host && data.introVideo) {
    const url = data.introVideo;
    let html = '';
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/i);
    const vm = url.match(/vimeo\.com\/(\d+)/i);
    if (yt) html = `<iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Video introduction by Anup Paul Elias" allowfullscreen></iframe>`;
    else if (vm) html = `<iframe src="https://player.vimeo.com/video/${vm[1]}" title="Video introduction by Anup Paul Elias" allowfullscreen></iframe>`;
    else html = `<video controls preload="metadata"><source src="${url}"></video>`;
    host.innerHTML = html;
  }
})();