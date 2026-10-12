/**
 * Reanty Real Estate - Main Interactive Scripts
 * --------------------------------------------------------------------------
 * Features:
 * 1. Sticky header shadow on scroll
 * 2. Mobile drawer navigation toggle
 * 3. Reusable Stepped Tabs Controller (Hero & Today Sells sections)
 * 4. Property Category Filter Tabs
 * 5. Customer Testimonials Slider
 * 6. Toast Notifications & Form Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Sticky Header Shadow on Scroll
  // --------------------------------------------------------------------------
  const mainHeader = document.getElementById('mainHeader');
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      mainHeader.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation Toggle
  // --------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileNav = (open) => {
    if (!hamburgerBtn || !mobileNavDrawer) return;
    hamburgerBtn.classList.toggle('active', open);
    mobileNavDrawer.classList.toggle('open', open);
    if (mobileNavBackdrop) mobileNavBackdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.contains('open');
      toggleMobileNav(!isOpen);
    });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', () => toggleMobileNav(false));
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileNav(false));
  });

  // --------------------------------------------------------------------------
  // 3. Reusable Stepped Tabs Controller
  // --------------------------------------------------------------------------
  /**
   * Initializes a stepped tab component with interactive pills, numbered buttons,
   * and a synchronized sliding indicator line.
   *
   * @param {Object} options
   * @param {string} options.attr - Custom data-attribute name (e.g., 'data-house')
   * @param {string} options.indicatorLineId - DOM ID of indicator line
   * @param {string[]} options.numberIds - Array of DOM IDs for numeric pills
   * @param {Function} [options.onSwitch] - Callback executed on active tab change: (index) => void
   */
  const initSteppedTabs = ({ attr, indicatorLineId, numberIds, onSwitch }) => {
    const tabs = document.querySelectorAll(`.stepped-tab-item[${attr}]`);
    const numbers = numberIds.map((id) => document.getElementById(id)).filter(Boolean);
    const indicatorLine = document.getElementById(indicatorLineId);
    const offsets = { '1': '0px', '2': '20px', '3': '40px' };

    const setIndicatorPos = (index) => {
      if (indicatorLine) {
        indicatorLine.style.setProperty('--indicator-pos', offsets[index] || '0px');
      }
    };

    const switchTab = (index) => {
      const currentActive = document.querySelector(`.stepped-tab-item[${attr}].active`);
      if (currentActive && currentActive.getAttribute(attr) === index) return;

      tabs.forEach((tab) => {
        tab.classList.toggle('active', tab.getAttribute(attr) === index);
      });

      numbers.forEach((num) => {
        num.classList.toggle('active', num.getAttribute(attr) === index);
      });

      setIndicatorPos(index);

      if (typeof onSwitch === 'function') {
        onSwitch(index);
      }
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const val = tab.getAttribute(attr);
        if (val) switchTab(val);
      });
    });

    numbers.forEach((num) => {
      num.addEventListener('click', () => {
        const val = num.getAttribute(attr);
        if (val) switchTab(val);
      });
    });

    setIndicatorPos('1');
    return { switchTab };
  };

  // Hero Section Stepped Tabs Setup
  const heroImages = {
    '1': './assets/images/hero-house.jpg',
    '2': './assets/images/dream-living-main.jpg',
    '3': './assets/images/showcase-banner.jpg',
  };

  // Preload hero images into browser cache for zero-latency crossfade
  Object.values(heroImages).forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const heroMainImage = document.getElementById('heroMainImage');
  const heroNextImage = document.getElementById('heroNextImage');

  initSteppedTabs({
    attr: 'data-house',
    indicatorLineId: 'heroIndicatorLine',
    numberIds: ['heroNum1', 'heroNum2', 'heroNum3'],
    onSwitch: (houseIndex) => {
      if (heroMainImage && heroImages[houseIndex]) {
        if (heroNextImage) {
          heroNextImage.src = heroImages[houseIndex];
          heroNextImage.style.opacity = '1';
          setTimeout(() => {
            heroMainImage.src = heroImages[houseIndex];
            heroNextImage.style.opacity = '0';
          }, 400);
        } else {
          heroMainImage.style.opacity = '0.3';
          setTimeout(() => {
            heroMainImage.src = heroImages[houseIndex];
            heroMainImage.style.opacity = '1';
          }, 150);
        }
      }
    },
  });

  // Today Sells Properties Stepped Tabs Setup
  initSteppedTabs({
    attr: 'data-today-house',
    indicatorLineId: 'todayIndicatorLine',
    numberIds: ['todayNum1', 'todayNum2', 'todayNum3'],
  });

  // --------------------------------------------------------------------------
  // 4. Featured Property Filter Tabs (All, Apartment, Villa, Land)
  // --------------------------------------------------------------------------
  const categoryTabBtns = document.querySelectorAll('.category-tab-btn');
  const propertyCards = document.querySelectorAll('.property-card');

  categoryTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-category');

      propertyCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const isMatch = selectedCategory === 'all' || cardCategory === selectedCategory;
        if (isMatch) {
          card.style.display = 'block';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 100);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. Testimonial Slider / Carousel
  // --------------------------------------------------------------------------
  const testimonials = [
    {
      img: './assets/images/testimonial-avatar.jpg',
      quote: 'We make sure you have a fine distance with the sickness. We make you never lose hope. We make sure you have with the sickness.',
      name: 'Yunus Seyhan',
      role: 'Postgraduate Student',
    },
    {
      img: './assets/images/testimonial-avatar.jpg',
      quote: 'Renting helped me find my dream condo in downtown Cleveland in just three days. The transparent pricing and smooth communication were exceptional.',
      name: 'Sarah Jenkins',
      role: 'Architectural Designer',
    },
    {
      img: './assets/images/testimonial-avatar.jpg',
      quote: 'Outstanding real estate platform! Every broker I contacted was extremely professional and the virtual tours saved me weeks of traveling.',
      name: 'Marcus Vance',
      role: 'Real Estate Investor',
    },
  ];

  let currentTestimonialIndex = 0;
  const clientImg = document.getElementById('clientImg');
  const clientQuote = document.getElementById('clientQuote');
  const clientName = document.getElementById('clientName');
  const clientRole = document.getElementById('clientRole');
  const prevBtn = document.getElementById('prevTestimonialBtn');
  const nextBtn = document.getElementById('nextTestimonialBtn');

  const updateTestimonial = (index) => {
    const item = testimonials[index];
    if (!item) return;

    if (clientImg && item.img) {
      clientImg.src = item.img;
    }

    if (clientQuote && clientName && clientRole) {
      clientQuote.style.opacity = '0';
      clientName.style.opacity = '0';
      clientRole.style.opacity = '0';

      setTimeout(() => {
        clientQuote.textContent = item.quote;
        clientName.textContent = item.name;
        clientRole.textContent = item.role;

        clientQuote.style.opacity = '1';
        clientName.style.opacity = '1';
        clientRole.style.opacity = '1';
      }, 150);
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  }

  // --------------------------------------------------------------------------
  // 6. Interactive Toast Notifications & Form Handlers
  // --------------------------------------------------------------------------
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  const showToast = (message) => {
    if (toastNotice && toastMessage) {
      clearTimeout(toastTimer);
      toastMessage.textContent = message;
      toastNotice.classList.add('show');
      toastTimer = setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 3500);
    }
  };

  // Reusable Form Submission Handlers
  const formConfigs = [
    { id: 'newsletterStripForm', msg: 'Thank you for subscribing to our newsletter!' },
    { id: 'footerNewsletterForm', msg: 'Thank you for subscribing!' },
    { id: 'contactForm', msg: 'Thank you! Your message has been sent successfully.' },
  ];

  formConfigs.forEach(({ id, msg }) => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast(msg);
        form.reset();
      });
    }
  });

  // "How it works" button preview
  const playVideoBtn = document.getElementById('playVideoBtn');
  if (playVideoBtn) {
    playVideoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Virtual tour video player loaded!');
    });
  }
});
