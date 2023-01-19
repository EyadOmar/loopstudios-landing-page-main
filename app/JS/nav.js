const mainNav = document.querySelector('.mainNav');
const mobileNavBtn = document.querySelector('.mobile-nav-toggle');

mobileNavBtn.addEventListener('click', () => {
  const visiblity = mainNav.getAttribute('data-visible');
  if (visiblity === 'false') {
    mainNav.setAttribute('data-visible', 'true');
    mobileNavBtn.setAttribute('aria-expanded', 'true');
  } else {
    mainNav.setAttribute('data-visible', 'false');
    mobileNavBtn.setAttribute('aria-expanded', 'false');
  }
});
