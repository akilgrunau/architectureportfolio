const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
});

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
