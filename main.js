   // This code will load header.html into the div with id="header"
   fetch('header.html')
     .then(response => response.text())
     .then(data => {
       document.getElementById('header').innerHTML = data;
     });

     fetch('hero.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('hero').innerHTML = data;
     })


     fetch('countries.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('countries-section').innerHTML = data;
     }
     )

     fetch('blog.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('blog-section desktop-content').innerHTML = data;
     })


     fetch('google-reviews.html')
     .then(response => response.text())
     .then(data => {
       document.getElementById('google-reviews-section').innerHTML = data;
   
       // Basit slider fonksiyonu - move this code here!
       const slider = document.getElementById('googleReviewsSlider');
       const prevBtn = document.getElementById('googleReviewsPrev');
       const nextBtn = document.getElementById('googleReviewsNext');
       let reviewIndex = 0;
       const cardWidth = 364;
   
       function showReview(index) {
         slider.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
       }
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
     });
    
     fetch('uni-logos.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('logo-slider').innerHTML = data;
     })
 
     fetch('maps-location.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('map-section').innerHTML = data;
     })

     fetch('footer.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('footer').innerHTML = data;
     })

     fetch('coming-soon.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('coming-soon').innerHTML = data;
     })


     fetch('coming-soon-modal-tr.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('comingSoonModalContainer').innerHTML = data;
     })