let currentIndex = 0;
    const slides = document.querySelectorAll('.my-carousel-item');
    const totalSlides = slides.length;
    let slideInterval;
    
    function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transition = 'transform 0.5s ease';
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
    }
    
    function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    }
    
    function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    }
    
    function startSlideInterval() {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval duration as needed (e.g., 5000 milliseconds = 5 seconds)
    }
    
    function stopSlideInterval() {
    clearInterval(slideInterval);
    }
    
    startSlideInterval(); // Start the automatic sliding initially
    
    // Event listeners for the control buttons
    document.querySelector('.my-prev').addEventListener('click', () => {
    prevSlide();
    stopSlideInterval(); // Stop automatic sliding when manual navigation occurs
    });
    
    document.querySelector('.my-next').addEventListener('click', () => {
    nextSlide();
    stopSlideInterval(); // Stop automatic sliding when manual navigation occurs
    });