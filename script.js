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

const galleryImages = [
  'IMG_20260614_164209250_HDR.jpg',
  'IMG_20260614_164241783_HDR.jpg',
  'IMG_20260614_164242952_HDR.jpg',
  'IMG_20260614_164344204_HDR.jpg',
  'IMG_20260614_164359211_HDR.jpg',
  'IMG_20260614_164417457_HDR.jpg',
  'IMG_20260614_164422023_HDR.jpg',
  'IMG_20260614_164443680_HDR.jpg',
  'IMG_20260614_164448598_HDR.jpg',
  'IMG_20260614_164502790_HDR.jpg',
  'IMG_20260614_164505299_HDR.jpg',
  'IMG_20260614_164523453_HDR.jpg',
  'IMG_20260614_164527806_HDR.jpg',
  'IMG_20260614_164543721_HDR.jpg',
  'IMG_20260614_164547224_HDR.jpg',
  'IMG_20260614_164603955_HDR.jpg',
  'IMG_20260614_164619043_HDR.jpg',
  'IMG_20260614_164629278_HDR.jpg',
  'IMG_20260614_164632137_HDR.jpg',
  'IMG_20260614_164634871_HDR.jpg',
  'IMG_20260614_164637041_HDR.jpg',
  'IMG_20260614_164657269_HDR.jpg'
];

const galleryShell = document.querySelector('[data-gallery]');
const prevButton = document.querySelector('.gallery-prev');
const nextButton = document.querySelector('.gallery-next');

if (galleryShell) {
  const slideMarkup = galleryImages
    .map((image, index) => `
      <figure class="gallery-slide ${index === 0 ? 'is-active' : ''}" data-index="${index}" aria-hidden="${index === 0 ? 'false' : 'true'}">
        <img src="${image}" alt="CPE Les Maisons Enjouées project photo ${index + 1}" />
        <figcaption>CPE Les Maisons Enjouées — Tracé Libre Inc. / ${String(index + 1).padStart(2, '0')}</figcaption>
      </figure>
    `)
    .join('');

  galleryShell.innerHTML = slideMarkup;

  const slides = [...galleryShell.querySelectorAll('.gallery-slide')];
  let activeIndex = 0;

  const updateGallery = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
  };

  prevButton?.addEventListener('click', () => updateGallery(activeIndex - 1));
  nextButton?.addEventListener('click', () => updateGallery(activeIndex + 1));

  setInterval(() => updateGallery(activeIndex + 1), 5000);
}
