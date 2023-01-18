//add Images to create section
const figures = Array.from(document.querySelectorAll('section.create figure'));
const figuresNames = figures.map((figure) => figure.getAttribute('data-name'));
const images = document.querySelectorAll('section.create figure img');
const desktopMedia = window.matchMedia('(min-width: 46.6666666667em)');

function handleMediaChange(e) {
  let device = 'mobile';
  if (e.matches) device = 'desktop';
  images.forEach((image, i) => {
    image.src = `app/images/${device}/image-${figuresNames[i]}.jpg`;
  });
}

handleMediaChange(desktopMedia);

desktopMedia.addEventListener('change', handleMediaChange);
