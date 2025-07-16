document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll("body *");

  const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 2.0) {
              element.style.opacity = 1;
              element.style.transform = "translateY(0)";
          }
      });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); 
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
  }

  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  const scroller = document.getElementById('scroller');
const items = document.querySelectorAll('#scroller .item');
const scrollAmount = items[0].offsetWidth + 25; 
let currentIndex = 0;

function autoScroll() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  scroller.scrollTo({
    left: currentIndex * scrollAmount,
    behavior: 'smooth'
  });
}

let autoScrollInterval = setInterval(autoScroll, 1000);

document.querySelector('.scroll-btn.left').addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  scroller.scrollTo({
    left: currentIndex * scrollAmount,
    behavior: 'smooth'
  });
});

document.querySelector('.scroll-btn.right').addEventListener('click', () => {
  currentIndex = Math.min(items.length - 1, currentIndex + 1);
  scroller.scrollTo({
    left: currentIndex * scrollAmount,
    behavior: 'smooth'
  });
});

scroller.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
scroller.addEventListener('mouseleave', () => autoScrollInterval = setInterval(autoScroll, 3000));
  
    function validateForm() {
      const form = document.forms["contactForm"];
      const name = form["name"].value.trim();
      const email = form["email"].value.trim();
      const msg = form["msg"].value.trim();

      const nameRegex = /^[A-Za-z\s]{2,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const msgRegex = /^[A-Za-z0-9\s.,!?'"-]{10,}$/;

      if (!nameRegex.test(name)) {
        alert("Please enter a valid name (letters and spaces only, min 2 chars).");
        return false;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (!msgRegex.test(msg)) {
        alert("Message should be at least 10 characters long and can include letters, numbers, and punctuation.");
        return false;
      }

      return true;
    }
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });