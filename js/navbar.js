document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const icon = toggleButton.querySelector('i');

  toggleButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('closed');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      toggleButton.classList.remove('fa-times');
    } else {
      mobileMenu.classList.remove('closed');
      mobileMenu.classList.add('open');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      toggleButton.classList.add('fa-times');
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('closed');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      toggleButton.classList.remove('fa-times');
    });
  });
});