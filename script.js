
        document.addEventListener("DOMContentLoaded", () => {
            gsap.from(".hero-title", { duration: 1.2, y: -100, opacity: 0, ease: "bounce.out" });

            document.addEventListener("mousemove", (e) => {
                let x = (e.clientX / window.innerWidth - 0.5) * 20;
                let y = (e.clientY / window.innerHeight - 0.5) * 20;
                gsap.to(".hero-content", { x, y, duration: 0.5, ease: "power2.out" });
            });

            document.querySelector(".contact-btn").addEventListener("click", function (event) {
                event.preventDefault();
                let phoneNumber = prompt("Enter your phone number:");
                if (phoneNumber) {
                    alert("Phone Number Entered: " + phoneNumber);
                }
            });

            document.querySelector(".hero-button").addEventListener("click", function () {
                alert("Welcome to Pha5e! 🚀 Explore the future of stunning designs.");
            });

            window.addEventListener("scroll", function () {
              let video = document.getElementById("scrollVideo");
              let scrollY = window.scrollY;
          
              if (scrollY > 300) {  
                  video.classList.add("video-visible");
                  video.play();
                  video.style.bottom = `${-15 + (scrollY * 0.05)}vh`; // स्क्रॉल के साथ वीडियो नीचे जाएगा
              } else {
                  video.classList.remove("video-visible");
                  video.pause();
                  video.style.bottom = "-38vh"; // वापस छुप जाए
              }
          });
          
        
        });



