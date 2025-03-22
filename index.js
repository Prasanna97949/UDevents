// Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

//   slider

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

// Auto slider function
function moveSlide() {
  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
  moveSlide();
}, 3000);

// faq
const faqButtons = document.querySelectorAll('.faq-btn');

faqButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');

    content.classList.toggle('hidden');
    icon.textContent = content.classList.contains('hidden') ? '+' : '-';
  });
});

  // Tab Switching Logic
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  function activateTab(tab) {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all content
      contents.forEach(content => content.classList.remove("active"));
      // Show the selected content
      document.getElementById(tab.dataset.target).classList.add("active");
  }

  // Default: Activate first tab
  activateTab(document.querySelector(".tab-btn.active"));

  // Add click event to all tabs
  tabs.forEach(tab => {
      tab.addEventListener("click", () => activateTab(tab));
  });



// Function to close all dropdowns
function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('[id$="-dropdown"]');
  dropdowns.forEach(dropdown => {
    dropdown.classList.add('hidden');
  });
}

// Toggle dropdowns in desktop and mobile views
const dropdownButtons = document.querySelectorAll('[id$="-dropdown-btn"]');
dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dropdownId = button.id.replace('-btn', '');
    const dropdown = document.getElementById(dropdownId);

    // Close all dropdowns first
    closeAllDropdowns();

    // Toggle the clicked dropdown
    dropdown.classList.toggle('hidden');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.matches('[id$="-dropdown-btn"]')) {
    closeAllDropdowns();
  }
});
