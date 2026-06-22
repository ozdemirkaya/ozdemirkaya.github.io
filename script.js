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
      const emailAddress = 'ozdemiirkaya@gmail.com';
      
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

  // 5. Contact Form submission (Web3Forms API Integration)
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
      statusMsg.style.display = 'none'; // Clear any previous message
      
      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let res = await response.json();
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;

        if (response.status === 200) {
          // Success
          statusMsg.style.display = 'flex';
          statusMsg.className = 'form-status success';
          statusMsg.innerHTML = `<i data-lucide="check-circle" style="width: 18px; height: 18px;"></i> Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağım!`;
          contactForm.reset();
        } else {
          // API error
          statusMsg.style.display = 'flex';
          statusMsg.className = 'form-status error';
          statusMsg.innerHTML = `<i data-lucide="alert-triangle" style="width: 18px; height: 18px;"></i> Hata: ${res.message || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'}`;
        }

        // Re-init lucide icons for statusMsg
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        // Hide status message after 6 seconds
        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 6000);
      })
      .catch(error => {
        console.error('Submission error:', error);
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        
        statusMsg.style.display = 'flex';
        statusMsg.className = 'form-status error';
        statusMsg.innerHTML = `<i data-lucide="alert-triangle" style="width: 18px; height: 18px;"></i> Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edin.`;
        
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 6000);
      });
    });
  }
  
  // 6. Interactive Terminal simulation (typing animation trigger)
  const terminalCmd = document.querySelector('.terminal-cmd');
  if (terminalCmd) {
    // We can add minor typing effects or leave it static as desired
  }
});
