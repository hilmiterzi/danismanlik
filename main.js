   // This code will load header.html into the div with id="header"
   fetch('header.html')
     .then(response => response.text())
     .then(data => {
       const el = document.getElementById('header');
       if (el) el.innerHTML = data;
       // Hamburger/mobile menu logic (runs after header is loaded)
       const hamburger = document.querySelector('.hamburger-menu');
       const mobileMenu = document.getElementById('mobileMenu');
       const mobileMenuClose = document.getElementById('mobileMenuClose');
       const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
       if (hamburger && mobileMenu && mobileMenuClose && mobileMenuOverlay) {
         // Hamburger open
         hamburger.addEventListener('click', function(e) {
           e.stopPropagation();
           mobileMenu.classList.add('open');
           document.body.classList.add('mobile-menu-active');
           mobileMenuOverlay.classList.add('open');
         });
         // Close button
         mobileMenuClose.addEventListener('click', function(e) {
           e.stopPropagation();
           mobileMenu.classList.remove('open');
           document.body.classList.remove('mobile-menu-active');
           mobileMenuOverlay.classList.remove('open');
         });
         // Overlay click closes menu
         mobileMenuOverlay.addEventListener('click', function(e) {
           mobileMenu.classList.remove('open');
           document.body.classList.remove('mobile-menu-active');
           mobileMenuOverlay.classList.remove('open');
         });
         // Click outside closes menu
         document.addEventListener('click', function(e) {
           if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target) && !mobileMenuOverlay.contains(e.target)) {
             mobileMenu.classList.remove('open');
             document.body.classList.remove('mobile-menu-active');
             mobileMenuOverlay.classList.remove('open');
           }
         });
         // Close menu when any link inside mobile menu is clicked, except dropdown triggers
         mobileMenu.querySelectorAll('a').forEach(function(link) {
           link.addEventListener('click', function(e) {
             if (link.classList.contains('dropdown-trigger')) {
               e.preventDefault();
               e.stopPropagation();
               return;
             }
             mobileMenu.classList.remove('open');
             document.body.classList.remove('mobile-menu-active');
             mobileMenuOverlay.classList.remove('open');
           });
         });
         // Mobile menu dropdowns
         mobileMenu.querySelectorAll('.dropdown-trigger').forEach(function(trigger) {
           trigger.addEventListener('click', function(e) {
             e.preventDefault();
             e.stopPropagation();
             const parentDropdown = this.closest('.dropdown');
             // Always close all other dropdowns first
             mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openDropdown) {
               if (openDropdown !== parentDropdown) {
                 openDropdown.classList.remove('open');
               }
             });
             // Then toggle this one
             parentDropdown.classList.toggle('open');
           });
         });
       }
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
           }, 8000);
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

     fetch('sticky-buttons.html')
     .then(response => response.text())
     .then(data => {
         const el = document.getElementById('sticky-buttons');
         if (el) el.innerHTML = data;
     });

     fetch('coming-soon.html')
     .then(response => response.text())
     .then(data => {
        const el = document.getElementById('coming-soon');
        if (el) el.innerHTML = data;
     });




document.addEventListener('DOMContentLoaded', function() {
  // Custom slider logic
  const slides = document.querySelectorAll('.custom-hero-slide');
  let current = 0;
  let interval = setInterval(nextSlide, 2500);
  function showSlide(idx) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === idx);
      });
      current = idx;
  }
  function nextSlide() {
      let next = (current + 1) % slides.length;
      showSlide(next);
  }
});


// FAQ toggle functionality for sikca-sorulan-sorular.html

document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const toggle = this.querySelector('.faq-toggle');
      if (answer && answer.classList.contains('faq-answer')) {
        const isOpen = answer.style.display === 'block';
        // Close all answers in the same box
        const box = this.closest('.faq-box');
        if (box) {
          box.querySelectorAll('.faq-answer').forEach(function(a) {
            a.style.display = 'none';
          });
          box.querySelectorAll('.faq-toggle').forEach(function(t) {
            t.textContent = '+';
          });
        }
        if (!isOpen) {
          answer.style.display = 'block';
          if (toggle) toggle.textContent = '-';
        } else {
          answer.style.display = 'none';
          if (toggle) toggle.textContent = '+';
        }
      }
    });
  });
});






let currentImageIndex = 0;
let images = [];

function openLightbox(img) {
    // Get all gallery images
    images = Array.from(document.querySelectorAll('.images-section img'));
    currentImageIndex = images.indexOf(img);
    
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

// Close lightbox when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
    // Arrow key navigation
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    }
    if (event.key === 'ArrowRight') {
        changeImage(1);
    }
});








