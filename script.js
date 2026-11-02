/**
 * PAVITHRA — PERSONAL PORTFOLIO INTERACTIVITY
 * Clean, modern vanilla JavaScript for smooth animations, mobile drawer,
 * active navigation tracking, typing effect, live preview modal, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. LOADER OVERLAY
     ========================================================================== */
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    const hideLoader = () => {
      loaderOverlay.classList.add('fade-out');
      setTimeout(() => {
        loaderOverlay.remove();
      }, 700);
    };

    // Hide loader once window loads, with fallback safety timeout
    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 600);
    } else {
      window.addEventListener('load', () => setTimeout(hideLoader, 500));
      setTimeout(hideLoader, 2000); // safety fallback
    }
  }

  /* ==========================================================================
     2. DYNAMIC HERO TYPING EFFECT
     ========================================================================== */
  const typingTarget = document.getElementById('typing-text');
  if (typingTarget) {
    const roles = [
      'Aspiring .NET Developer',
      'C# & SQL Server Specialist',
      'Former Software Trainer (2 Yrs)',
      'Web Application Developer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    const typeRole = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typingTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 85;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing word, pause before deleting
        isDeleting = true;
        typingSpeed = 1800;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(typeRole, typingSpeed);
    };

    // Initial slight delay before typing begins
    setTimeout(typeRole, 700);
  }

  /* ==========================================================================
     3. STICKY NAVBAR & ACTIVE SECTION OBSERVER
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScrollNavbar = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar();

  // Active section tracking with IntersectionObserver
  const sectionObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ==========================================================================
     4. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const navToggle = document.getElementById('nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openMobileDrawer = () => {
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileDrawer = () => {
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', closeMobileDrawer);
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileDrawer);
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && 
          !mobileDrawer.contains(e.target) && 
          !navToggle.contains(e.target)) {
        closeMobileDrawer();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    });
  }

  /* ==========================================================================
     5. SCROLL REVEAL ANIMATIONS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     6. STATS NUMBER COUNTER ANIMATION
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const countUpNumbers = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const duration = 1600; // ms
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  };

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          countUpNumbers();
        }
      });
    }, { threshold: 0.4 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================================================
     7. SKILL PROGRESS BAR ANIMATION
     ========================================================================== */
  const skillBars = document.querySelectorAll('.progress-bar-fill');
  const skillsSection = document.getElementById('skills');

  if (skillsSection && skillBars.length > 0) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            bar.classList.add('animated');
          });
        }
      });
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsSection);
  }

  /* ==========================================================================
     8. SKILLS FILTER TABS
     ========================================================================== */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCat === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ==========================================================================
     9. IN-PAGE LIVE PROJECT PREVIEW MODAL
     ========================================================================== */
  const previewModal = document.getElementById('previewModal');
  const previewIframe = document.getElementById('previewIframe');
  const previewModalTitle = document.getElementById('previewModalTitle');
  const modalExternalLink = document.getElementById('modalExternalLink');
  const closePreviewModalBtn = document.getElementById('closePreviewModalBtn');
  const openPreviewBtns = document.querySelectorAll('.open-preview-modal-btn');

  const openPreview = (url, title) => {
    if (!previewModal || !previewIframe) return;
    previewIframe.src = url;
    previewModalTitle.textContent = `${title} — Live Preview`;
    modalExternalLink.href = url;
    previewModal.classList.add('open');
    previewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    if (!previewModal || !previewIframe) return;
    previewModal.classList.remove('open');
    previewModal.setAttribute('aria-hidden', 'true');
    previewIframe.src = 'about:blank'; // free memory
    document.body.style.overflow = '';
  };

  openPreviewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-preview-url') || 'sri-homemade-cakes/index.html';
      const title = btn.getAttribute('data-preview-title') || 'Sri Homemade Cakes';
      openPreview(url, title);
    });
  });

  if (closePreviewModalBtn) {
    closePreviewModalBtn.addEventListener('click', closePreview);
  }

  if (previewModal) {
    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) {
        closePreview();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && previewModal.classList.contains('open')) {
        closePreview();
      }
    });
  }

  /* ==========================================================================
     10. TOAST NOTIFICATIONS HELPER
     ========================================================================== */
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message, type = 'toast-info', duration = 3500) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${type === 'toast-success' ? '✓' : 'ℹ'}</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.3s, transform 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  /* ==========================================================================
     11. ONE-CLICK EMAIL COPY
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'pavithrait25@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyEmailBtn.innerHTML = '<span>Copied! ✓</span>';
        showToast('Email address copied to clipboard!', 'toast-success');
        setTimeout(() => {
          copyEmailBtn.innerHTML = '<span>Copy</span>';
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email copied to clipboard!', 'toast-success');
      }
    });
  }

  /* ==========================================================================
     12. RESUME DOWNLOAD TRACKER / FEEDBACK
     ========================================================================== */
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
      showToast('Resume download starting... Thank you for reviewing my profile!', 'toast-success');
    });
  }

  /* ==========================================================================
     13. CONTACT FORM VALIDATION & DIRECT WHATSAPP INTEGRATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const formFeedback = document.getElementById('formFeedback');
  const sendViaWhatsAppBtn = document.getElementById('sendViaWhatsAppBtn');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    // Name validation
    const nameVal = nameInput.value.trim();
    const nameErr = document.getElementById('nameError');
    if (!nameVal) {
      nameErr.textContent = 'Please enter your name.';
      isValid = false;
    } else {
      nameErr.textContent = '';
    }

    // Email validation
    const emailVal = emailInput.value.trim();
    const emailErr = document.getElementById('emailError');
    if (!emailVal) {
      emailErr.textContent = 'Please enter your email address.';
      isValid = false;
    } else if (!validateEmail(emailVal)) {
      emailErr.textContent = 'Please provide a valid email format.';
      isValid = false;
    } else {
      emailErr.textContent = '';
    }

    // Message validation
    const messageVal = messageInput.value.trim();
    const msgErr = document.getElementById('messageError');
    if (!messageVal) {
      msgErr.textContent = 'Please enter your message.';
      isValid = false;
    } else if (messageVal.length < 10) {
      msgErr.textContent = 'Please enter at least 10 characters.';
      isValid = false;
    } else {
      msgErr.textContent = '';
    }

    return isValid;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value;
      const message = messageInput.value.trim();

      // Launch user's default email client pre-populated
      const mailtoLink = `mailto:pavithrait25@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry Type: ${subject}\n\nMessage:\n${message}`)}`;

      window.location.href = mailtoLink;

      formFeedback.className = 'form-feedback success';
      formFeedback.textContent = 'Thank you! Opening your email client to dispatch the message to pavithrait25@gmail.com.';
      showToast('Opening email client...', 'toast-info');
    });
  }

  // Instant WhatsApp Send from Form
  if (sendViaWhatsAppBtn) {
    sendViaWhatsAppBtn.addEventListener('click', () => {
      const name = nameInput.value.trim() || 'Website Visitor';
      const email = emailInput.value.trim() || 'Not specified';
      const subject = subjectInput.value || 'General Inquiry';
      const message = messageInput.value.trim();

      if (!message) {
        document.getElementById('messageError').textContent = 'Please type a short note before sending to WhatsApp.';
        messageInput.focus();
        return;
      }

      const formattedText = `Hi Pavithra! 👋%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Inquiry:* ${encodeURIComponent(subject)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/919566750694?text=${formattedText}`;

      window.open(waUrl, '_blank', 'noopener');
      showToast('Redirecting to WhatsApp chat...', 'toast-success');
    });
  }

  /* ==========================================================================
     14. BACK TO TOP BUTTON
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     15. DYNAMIC FOOTER YEAR
     ========================================================================== */
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     16. SUBTLE 3D TILT EFFECT ON HERO CODE CARD (DESKTOP)
     ========================================================================== */
  const heroCodeCard = document.getElementById('heroCodeCard');
  if (heroCodeCard && window.innerWidth > 992) {
    heroCodeCard.addEventListener('mousemove', (e) => {
      const rect = heroCodeCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      heroCodeCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    heroCodeCard.addEventListener('mouseleave', () => {
      heroCodeCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }

});
