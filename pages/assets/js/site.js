const menu = document.querySelector('.nav details');
const desktop = window.matchMedia('(min-width: 701px)');
function syncMenu(event) { menu.open = event.matches; }
syncMenu(desktop);
desktop.addEventListener('change', syncMenu);

// 共用圖片放大及回到頂端功能。
document.addEventListener('DOMContentLoaded', () => {
const dialog = document.querySelector('.image-dialog');
if (dialog) {
  const image = dialog.querySelector('img');
  document.querySelectorAll('.zoomable').forEach(item => {
    const open = () => { image.src = item.src; image.alt = item.alt; dialog.showModal(); };
    item.addEventListener('click', open);
    item.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  });
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
}
if (!document.querySelector('.back-top')) {
  const topButton = document.createElement('button');
  topButton.type = 'button'; topButton.className = 'global-top'; topButton.textContent = '回到頂端'; topButton.hidden = true; document.body.append(topButton);
  window.addEventListener('scroll', () => { topButton.hidden = window.scrollY < 350; }, { passive: true });
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
}
});
