const toTopBtn = document.getElementById('toTopBtn');

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  document.documentElement.scrollTop > 100
    ? (toTopBtn.style.opacity = '1')
    : (toTopBtn.style.opacity = '0');
};

const topFunction = () => (document.documentElement.scrollTop = 0);
