const toTopBtn = document.getElementById('toTopBtn');

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  document.documentElement.scrollTop > 100
    ? (toTopBtn.style.opacity = '1')
    : (toTopBtn.style.opacity = '0');
};

const topFunction = () => (document.documentElement.scrollTop = 0);

const hamburger = document.getElementById('hamburger');
const mobileNav = document.querySelector('nav.mobile-nav');
document
  .getElementById('hamburger')
  .addEventListener('click', navStatus);

const mobileNavLinks = document.querySelectorAll(
  'nav.mobile-nav > ul > li > a',
);
mobileNavLinks.forEach((link) =>
  link.addEventListener('click', navStatus),
);

function navStatus() {
  if (document.body.classList.contains('hamburger-active')) {
    navClose();
  } else {
    navOpen();
  }
}

function navClose() {
  document.body.classList.remove('hamburger-active');
  hamburger.classList.remove('fixed');
  hamburger.classList.add('relative');
  mobileNav.classList.add('hidden');
}

function navOpen() {
  document.body.classList.add('hamburger-active');
  hamburger.classList.add('fixed');
  hamburger.classList.remove('relative');
  mobileNav.classList.remove('hidden');
}
