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