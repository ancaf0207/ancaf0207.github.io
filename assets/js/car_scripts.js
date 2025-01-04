document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const leftArrow = wrapper.querySelector('.arrow.left');
  const rightArrow = wrapper.querySelector('.arrow.right');
  const items = carousel.querySelectorAll('img');
  const itemWidth = wrapper.offsetWidth; // Width of a single visible item
  let currentIndex = 0;

  const updateCarousel = () => {
    // Scroll the carousel to the correct position
    const offset = -(currentIndex * itemWidth);
    carousel.style.transform = `translateX(${offset}px)`;
  };

  leftArrow.addEventListener('click', () => {
    // Move to the previous item (wrap around if necessary)
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
    // Move to the next item (wrap around if necessary)
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // Update itemWidth on window resize to keep calculations correct
  window.addEventListener('resize', () => {
    updateCarousel();
  });
});
