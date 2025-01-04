document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const leftArrow = wrapper.querySelector('.arrow.left');
  const rightArrow = wrapper.querySelector('.arrow.right');
  const items = carousel.querySelectorAll('img');
  const itemWidth = wrapper.offsetWidth;
  let currentIndex = 0;

  const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Circular navigation
    updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Circular navigation
    updateCarousel();
  });

  // Ensure correct width on window resize
  window.addEventListener('resize', () => {
    updateCarousel();
  });
});

