







// script.js



document.addEventListener("DOMContentLoaded", function() {
    const servicesLink = document.getElementById("servicesLink");
    const dropdown = document.getElementById("dropdown");

    servicesLink.addEventListener("click", function(event) {
        event.preventDefault();
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    });

    // Optionally, hide the dropdown when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!event.target.closest("#servicesDropdown")) {
            dropdown.style.display = "none";
        }
    });
});





    
    
    
    




    document.addEventListener('DOMContentLoaded', () => {
      const testimonials = [
        { text: "This service is amazing! I couldn't be happier with the results.", author: "John Doe", position: "CEO, Company Inc.", image: "author1.jpg" },
        { text: "A truly transformative experience. Highly recommend!", author: "Jane Smith", position: "Founder, Startup XYZ", image: "author2.jpg" },
        // Add more testimonials as needed
      ];
      const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
      let currentIndex = 0;

      function showNextTestimonial() {
        const currentTestimonial = testimonials[currentIndex];
        const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];
        
        const testimonialHTML = `
          <div class="testimonial">
            <p class="testimonial-text">${currentTestimonial.text}</p>
            <div class="testimonial-author">
              <img src="${currentTestimonial.image}" alt="${currentTestimonial.author}">
              <div>
                <h4>${currentTestimonial.author}</h4>
                <p>${currentTestimonial.position}</p>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <p class="testimonial-text">${nextTestimonial.text}</p>
            <div class="testimonial-author">
              <img src="${nextTestimonial.image}" alt="${nextTestimonial.author}">
              <div>
                <h4>${nextTestimonial.author}</h4>
                <p>${nextTestimonial.position}</p>
              </div>
            </div>
          </div>
        `;
        
        testimonialsWrapper.innerHTML = testimonialHTML;
        
        currentIndex = (currentIndex + 1) % testimonials.length;
      }

      // Initialize the first pair of testimonials
      showNextTestimonial();

      // Set interval to show next pair of testimonials every 3 seconds
      setInterval(showNextTestimonial, 3000);
    });
    
    
    
    document.addEventListener('DOMContentLoaded', () => {
      const testimonials = [
        { text: "This service is amazing! I couldn't be happier with the results.", author: "John Doe", position: "CEO, Company Inc.", image: "/images.jpeg" },
        { text: "A truly transformative experience. Highly recommend!", author: "Jane Smith", position: "Founder, Startup XYZ", image: "/images.jpeg" },
        { text: "Absolutely fantastic! Great results and support.", author: "Michael Lee", position: "Manager, Business Corp.", image: "/images.jpeg" },
        { text: "I am extremely satisfied with the service provided.", author: "Sara Wilson", position: "Director, Creative Co.", image: "/images.jpeg" },
            // Add more testimonials as needed
          ];
    
      const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
      let currentIndex = 0;
    
      function createTestimonialHTML(testimonial) {
        return `
              <div class="testimonial">
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-author">
                  <img src="${testimonial.image}" alt="${testimonial.author}">
                  <div>
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.position}</p>
                  </div>
                </div>
              </div>
            `;
      }
    
      function showNextTestimonials() {
        testimonialsWrapper.innerHTML = '';
    
        const nextTestimonial1 = testimonials[currentIndex];
        const nextTestimonial2 = testimonials[(currentIndex + 1) % testimonials.length];
    
        testimonialsWrapper.innerHTML += createTestimonialHTML(nextTestimonial1);
        testimonialsWrapper.innerHTML += createTestimonialHTML(nextTestimonial2);
    
        const testimonialsElements = document.querySelectorAll('.testimonial');
        testimonialsElements.forEach(el => el.classList.add('active'));
    
        currentIndex = (currentIndex + 2) % testimonials.length;
      }
    
      // Initialize the first pair of testimonials
      showNextTestimonials();
    
      // Set interval to show next pair of testimonials every 3 seconds
      setInterval(showNextTestimonials, 3000);
    });
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function () {
      const openMenuBtn = document.getElementById('openMenu');
      const closeMenuBtn = document.getElementById('closeMenu');
      const curtainMenu = document.getElementById('curtainMenu');

      openMenuBtn.addEventListener('click', function () {
        curtainMenu.classList.add('show');
      });

      closeMenuBtn.addEventListener('click', function () {
        curtainMenu.classList.remove('show');
      });
    });
    
    
    
    
    
    
    
    