const cardBrowser = document.querySelector('.card-browser');

cardBrowser.addEventListener('click', event => {
  const element = event.target;

  if (element.hasAttribute('data-set')) {
    const setName = element.getAttribute('data-set');
    const setCells = document.querySelectorAll('[data-set]');

    setCells.forEach(cell => {
      cell.setAttribute('style', '');

      if(cell.getAttribute('data-set') == setName) {
        cell.setAttribute('style', 'background: blue');
      }
    });
  }
});
