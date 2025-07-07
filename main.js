   // This code will load header.html into the div with id="header"
   fetch('header.html')
     .then(response => response.text())
     .then(data => {
       const el = document.getElementById('header');
       if (el) el.innerHTML = data;
     });

     fetch('hero.html')
  .then(response => response.text())
  .then(data => {
    const el = document.getElementById('hero');
    if (el) el.innerHTML = data;

    // --- Hero slider JS START ---
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.hero-dots');
    const prevButton = document.querySelector('.hero-arrow-left');
    const nextButton = document.querySelector('.hero-arrow-right');
    let currentSlide = 0;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
    }

    if (dotsContainer) {
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    const dots = document.querySelectorAll('.hero-dot');

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
        updateDots();
      });
      nextButton.addEventListener('click', () => {
        goToSlide((currentSlide + 1) % slides.length);
        updateDots();
      });
    }

    // Optional: auto-slide
    setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
      updateDots();
    }, 5000);
    // --- Hero slider JS END ---
    function setSlideBackground(slide) {
      const isMobile = window.innerWidth <= 460;
      const bgImage = isMobile ? 
        slide.getAttribute('data-bg-mobile') : 
        slide.getAttribute('data-bg-desktop');
      if (bgImage) {
        slide.style.backgroundImage = `url('${bgImage}')`;
      }
    }
    
    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      currentSlide = index;
      setSlideBackground(slides[currentSlide]);
      slides[currentSlide].classList.add('active');
      updateDots();
    }
    
    // Set initial background for all slides
    slides.forEach(slide => setSlideBackground(slide));
  });


     fetch('countries.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('countries-section');
        if (el) el.innerHTML = data;
     });

     fetch('blog.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('blog-section desktop-content');
        if (el) el.innerHTML = data;
     });


     fetch('google-reviews.html')
     .then(response => response.text())
     .then(data => {
       const el = document.getElementById('google-reviews-section');
       if (el) {
         el.innerHTML = data;
   
         // Basit slider fonksiyonu - move this code here!
         const slider = document.getElementById('googleReviewsSlider');
         const prevBtn = document.getElementById('googleReviewsPrev');
         const nextBtn = document.getElementById('googleReviewsNext');
         let reviewIndex = 0;
         const cardWidth = 364;
   
         function showReview(index) {
           slider.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
         }
         if (prevBtn && nextBtn && slider) {
           prevBtn.onclick = () => {
             reviewIndex = Math.max(0, reviewIndex - 1);
             showReview(reviewIndex);
           };
           nextBtn.onclick = () => {
             reviewIndex = Math.min(slider.children.length - 1, reviewIndex + 1);
             showReview(reviewIndex);
           };
   
           setInterval(() => {
             reviewIndex = (reviewIndex + 1) % slider.children.length;
             showReview(reviewIndex);
           }, 5000);
         }
       }
     });
    
     fetch('uni-logos.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('logo-slider');
        if (el) el.innerHTML = data;
     });
 
     fetch('maps-location.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('map-section');
        if (el) el.innerHTML = data;
     });

     fetch('footer.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('footer');
        if (el) el.innerHTML = data;
     });

     fetch('coming-soon.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('coming-soon');
        if (el) el.innerHTML = data;
     });


     fetch('coming-soon-modal-tr.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('comingSoonModalContainer');
        if (el) el.innerHTML = data;
     });