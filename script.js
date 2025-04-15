// Create animated particles in the background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 15 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      particle.style.animation = `float ${duration}s ${delay}s infinite`;
      particlesContainer.appendChild(particle);
    }
  }
  
  // Typewriter effect for the home section
  const lines = [
    "Moshi Moshi, Hasini here",
    "Welcome to my space",
    "trying to passout from IIITH",
  ];
  let lineIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById('typing');
  const subtext = document.getElementById('subline');
  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        typingElement.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 60);
      } else {
        typingElement.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500);
      }
    } else {
      subtext.style.opacity = "1";
    }
  }
  
  // Handle navbar background change on scroll
  function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)'; /* Adjusted for black */
      navbar.style.padding = '15px 20px';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.8)'; /* Adjusted for black */
      navbar.style.padding = '20px';
    }
  }
  
  // Activate active nav link based on scroll position
  function activateMenuOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  
  // Image popup functionality
  const popup = document.getElementById("img-popup");
  const popupImg = document.getElementById("popup-img");
  const imgs = document.querySelectorAll(".popup-img");
  const closePopup = document.querySelector(".close-popup");
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src || 'default.jpg';
      setTimeout(() => {
        popup.classList.add('active');
      }, 10);
    });
  });
  closePopup.addEventListener("click", () => {
    popup.classList.remove('active');
    setTimeout(() => {
      popup.style.display = "none";
    }, 300);
  });
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);
    }
  });
  
  // Profile photo popup functionality
  const profileLink = document.getElementById('profile-link');
  const profilePopup = document.getElementById('profile-popup');
  const profilePopupImg = document.getElementById('profile-popup-img');
  const closeProfilePopup = profilePopup.querySelector('.close-popup');
  profileLink.addEventListener('click', (e) => {
    e.preventDefault();
    profilePopup.style.display = "flex";
    setTimeout(() => {
      profilePopup.classList.add('active');
    }, 10);
  });
  closeProfilePopup.addEventListener('click', () => {
    profilePopup.classList.remove('active');
    setTimeout(() => {
      profilePopup.style.display = "none";
    }, 300);
  });
  profilePopup.addEventListener('click', (e) => {
    if (e.target === profilePopup) {
      profilePopup.classList.remove('active');
      setTimeout(() => {
        profilePopup.style.display = "none";
      }, 300);
    }
  });
  
  // Animate elements on scroll using IntersectionObserver
  const animateElements = document.querySelectorAll('.achievement-card, .education-item, .gallery-item');
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  animateElements.forEach(element => {
    animateOnScroll.observe(element);
  });
  
  // Q3: Text Analysis Function
  function analyzeText() {
    const textInput = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('analysis-result');
    const words = textInput.trim().split(/\s+/);
  
    // Task 1: Calculate letters, words, spaces, newlines, and special symbols
    let letters = 0;
    let spaces = 0;
    let newlines = (textInput.match(/\n/g) || []).length;
    let specialSymbols = 0;
    for (let char of textInput) {
      if (/[a-zA-Z]/.test(char)) letters++;
      else if (char === ' ') spaces++;
      else if (!/[\w\s\n]/.test(char)) specialSymbols++;
    }
  
    // Task 2: Count pronouns
    const pronouns = {
      'i': 0, 'me': 0, 'mine': 0, 'my': 0, 'myself': 0,
      'you': 0, 'your': 0, 'yours': 0, 'yourself': 0,
      'he': 0, 'him': 0, 'his': 0, 'himself': 0,
      'she': 0, 'her': 0, 'hers': 0, 'herself': 0,
      'it': 0, 'its': 0, 'itself': 0,
      'we': 0, 'us': 0, 'our': 0, 'ours': 0, 'ourselves': 0,
      'they': 0, 'them': 0, 'their': 0, 'theirs': 0, 'themselves': 0
    };
    words.forEach(word => {
      const lowerWord = word.toLowerCase();
      if (pronouns.hasOwnProperty(lowerWord)) pronouns[lowerWord]++;
    });
  
    // Task 3: Count prepositions
    const prepositions = {
      'about': 0, 'above': 0, 'across': 0, 'after': 0, 'against': 0,
      'among': 0, 'around': 0, 'at': 0, 'before': 0, 'behind': 0,
      'below': 0, 'beneath': 0, 'beside': 0, 'between': 0, 'by': 0,
      'down': 0, 'during': 0, 'for': 0, 'from': 0, 'in': 0,
      'inside': 0, 'into': 0, 'near': 0, 'of': 0, 'off': 0,
      'on': 0, 'over': 0, 'through': 0, 'to': 0, 'under': 0,
      'up': 0, 'with': 0, 'within': 0, 'without': 0
    };
    words.forEach(word => {
      const lowerWord = word.toLowerCase().replace(/[.,!?]/g, '');
      if (prepositions.hasOwnProperty(lowerWord)) prepositions[lowerWord]++;
    });
  
    // Task 4: Count indefinite articles
    const articles = { 'a': 0, 'an': 0 };
    words.forEach(word => {
      const lowerWord = word.toLowerCase().replace(/[.,!?]/g, '');
      if (articles.hasOwnProperty(lowerWord)) articles[lowerWord]++;
    });
  
    // Generate output
    let result = `
      <h3>Analysis Results:</h3>
      <p><strong>Letters:</strong> ${letters}</p>
      <p><strong>Words:</strong> ${words.length}</p>
      <p><strong>Spaces:</strong> ${spaces}</p>
      <p><strong>Newlines:</strong> ${newlines}</p>
      <p><strong>Special Symbols:</strong> ${specialSymbols}</p>
      <h4>Pronouns:</h4>
      <ul>${Object.entries(pronouns).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}</ul>
      <h4>Prepositions:</h4>
      <ul>${Object.entries(prepositions).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}</ul>
      <h4>Indefinite Articles:</h4>
      <ul>${Object.entries(articles).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}</ul>
    `;
    resultDiv.innerHTML = result;
  }
  
  // Load all initial functionality
  window.onload = function() {
    createParticles();
    typeLine();
    activateMenuOnScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', activateMenuOnScroll);
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
  };
  
  // Function to capture click events and page views
  function trackUserInteractions() {
    // Track page views (on load and navigation)
    function logPageView() {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp}, view, page`);
    }
  
    // Track click events on all elements
    document.addEventListener('click', (event) => {
      const timestamp = new Date().toISOString();
      let eventType = 'click';
      let objectType = 'unknown';
  
      // Determine the type of object clicked
      if (event.target.tagName === 'IMG') {
        objectType = 'image';
      } else if (event.target.tagName === 'A') {
        objectType = 'link';
      } else if (event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT') {
        objectType = 'button/input';
      } else if (event.target.tagName === 'SELECT') {
        objectType = 'dropdown';
      } else if (event.target.tagName === 'P' || event.target.tagName === 'SPAN' || event.target.tagName === 'DIV') {
        objectType = 'text';
      }
  
      // Log the event
      console.log(`${timestamp}, ${eventType}, ${objectType}`);
    });
  
    // Initial page view log
    logPageView();
  
    // Log page view on navigation (simplified for single-page app)
    window.addEventListener('scroll', () => {
      const newPosition = window.scrollY;
      if (newPosition > 100 && !sessionStorage.getItem('lastViewLogged')) {
        logPageView();
        sessionStorage.setItem('lastViewLogged', 'true');
      } else if (newPosition < 100) {
        sessionStorage.removeItem('lastViewLogged');
      }
    });
  }
  
  // Initialize tracking when the page loads
  window.onload = (function(originalOnload) {
    return function() {
      if (originalOnload) originalOnload();
      trackUserInteractions();
    };
  })(window.onload);