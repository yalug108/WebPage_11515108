const menu = document.querySelector('.nav details');
const desktop = window.matchMedia('(min-width: 701px)');
function syncMenu(event) { menu.open = event.matches; }
syncMenu(desktop);
desktop.addEventListener('change', syncMenu);
