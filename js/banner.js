document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-fadeIn, .animate-slideUp');
  animatedElements.forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;
  });
});