const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  carousel.addEventListener('scroll', (e) => {
    const scrollLeft = e.target.scrollLeft;
    carousels.forEach(otherCarousel => {
      if (otherCarousel !== e.target) {
        otherCarousel.scrollLeft = scrollLeft;
      }
    });
  });
});
