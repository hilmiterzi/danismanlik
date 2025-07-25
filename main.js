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

// Modal functions
function showComingSoonModal(e) {
    e.preventDefault();
    document.getElementById('comingSoonModal').style.display = 'flex';
}

function closeComingSoonModal() {
    document.getElementById('comingSoonModal').style.display = 'none';
}


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






// WOKR AND STUDY IMAGE SLIDER
// Sayfa yüklendiğinde bu kodun çalışmasını sağlamak için DOMContentLoaded kullanıyoruz.
document.addEventListener('DOMContentLoaded', () => {
  // Slider konteynerini seç
  const sliderContainer = document.querySelector('.info-section .image-slider-container');
  // Navigasyon noktalarını seç
  const dots = document.querySelectorAll('.slider-dots .dot');
  // Görsel öğelerini seç
  const images = document.querySelectorAll('.info-section .image-slider-container > img');

  // Eğer gerekli elementler sayfada yoksa, scripti çalıştırma
  if (!sliderContainer || dots.length === 0 || images.length === 0) {
      console.warn("Slider elementleri bulunamadı. Lütfen HTML yapısını kontrol edin.");
      return; // Fonksiyondan çık
  }

  // Aktif noktayı güncelleyen fonksiyon
  const updateDots = () => {
      // Kaydırıcı konteynerinin mevcut kaydırma pozisyonu
      const scrollLeft = sliderContainer.scrollLeft;
      // Kaydırıcı konteynerinin tam genişliği
      const containerWidth = sliderContainer.offsetWidth;

      // Her bir görselin kendi genişliği + sağındaki boşluk.
      // Bu hesaplama, görsellerin esnekliğini ve aralarındaki boşluğu dikkate almalıdır.
      // Genellikle ilk görselin sol kenarından itibaren kaydırma mesafesi önemlidir.
      // Burada basit bir yuvarlama ile aktif indeksi buluyoruz.
      // Her bir görselin kaydırma alanındaki başlangıç noktalarını hesaplamak daha doğru olur.
      // Ancak basitlik için, containerWidth'i kullanarak yaklaşık bir indeks bulabiliriz.
      // Veya daha doğru bir hesaplama:
      let activeIndex = 0;
      for (let i = 0; i < images.length; i++) {
          // Görselin sol kenarının sliderContainer'a göre pozisyonu
          const imageLeft = images[i].offsetLeft;
          // Görselin ortasının görünür alana gelip gelmediğini kontrol et
          if (scrollLeft + (containerWidth / 2) >= imageLeft && scrollLeft + (containerWidth / 2) < (imageLeft + images[i].offsetWidth)) {
               activeIndex = i;
               break;
          }
          // Alternatif olarak, eğer görselin sol kenarı konteynerin görünür alanına girdiyse
          // if (scrollLeft <= images[i].offsetLeft + images[i].offsetWidth / 2) {
          //     activeIndex = i;
          //     break;
          // }
      }


      // Tüm noktalardan 'active' sınıfını kaldır
      dots.forEach(dot => dot.classList.remove('active'));

      // Hesaplanan aktif indekse sahip noktaya 'active' sınıfını ekle
      if (dots[activeIndex]) { // Belirlenen indeksin geçerli olduğundan emin ol
          dots[activeIndex].classList.add('active');
      }
  };

  // Kaydırıcıda kaydırma olayı dinleyicisi ekle
  sliderContainer.addEventListener('scroll', updateDots);

  // Sayfa yüklendiğinde başlangıçta noktaları güncelle
  // Bu, sayfa yüklendiğinde ilk görselin aktif görünmesini sağlar.
  updateDots();

  // Opsiyonel: Pencere boyutu değiştiğinde de noktaları güncelle.
  // Bu, responsive tasarımda kaydırma pozisyonlarının değişebileceği durumlarda faydalıdır.
  // window.addEventListener('resize', updateDots);
});

// Eğer HTML'de manuel olarak header ve footer'ı yüklüyorsanız (main.js içinde yapılıyorsa):
// function loadHTML(url, id) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(id).innerHTML = data;
//         })
//         .catch(error => console.error('Error loading HTML:', error));
// }

// loadHTML('header.html', 'header');
// loadHTML('footer.html', 'footer');







