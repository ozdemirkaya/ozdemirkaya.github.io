document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 1. Header scroll effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksMenu = document.getElementById('nav-links-menu');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (mobileMenuBtn && navLinksMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinksMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinksMenu.classList.remove('active');
      });
    });
  }

  // 3. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 4. Email click to copy micro-interaction
  const emailBtn = document.getElementById('contact-email-btn');
  const emailText = document.getElementById('email-text');
  
  if (emailBtn && emailText) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const originalText = emailText.textContent;
      const emailAddress = 'ozdemirkaya.dev@gmail.com';
      
      navigator.clipboard.writeText(emailAddress).then(() => {
        emailText.textContent = 'Panoya Kopyalandı! ✓';
        emailText.style.color = 'var(--secondary)';
        
        setTimeout(() => {
          emailText.textContent = originalText;
          emailText.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('E-posta kopyalanamadı: ', err);
        // Fallback: Open mail link
        window.location.href = `mailto:${emailAddress}`;
      });
    });
  }

  // 5. Contact Form submission simulation
  const contactForm = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const statusMsg = document.getElementById('form-status-msg');

  if (contactForm && submitBtn && statusMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Change UI to sending state
      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Gönderiliyor... <span class="cursor" style="height: 10px; width: 6px;"></span>`;
      
      // Simulate API call
      setTimeout(() => {
        // Form submitted successfully
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        
        statusMsg.className = 'form-status success';
        statusMsg.innerHTML = `<i data-lucide="check-circle" style="width: 18px; height: 18px;"></i> Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağım!`;
        
        // Re-init lucide icons for statusMsg
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
        
        // Clear form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 5000);
        
      }, 1500);
    });
  }
  
  // 6. Interactive Terminal simulation (typing animation trigger)
  const terminalCmd = document.querySelector('.terminal-cmd');
  if (terminalCmd) {
    // We can add minor typing effects or leave it static as desired
  }
});
