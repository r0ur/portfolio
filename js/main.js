/**
 * Smoothly scrolls the page to a specified section and updates navigation styles.
 *
 * This function scrolls the page to the section with the given ID, adjusts for the header height,
 * and updates the navigation menu to reflect the active section by adding specific styles.
 *
 * @param {string} id - The ID of the section to scroll to.
 */
function scrollToSection(id) {
  const element = document.getElementById(id);
  const headerOffset = document.querySelector('header').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });

  const navItems = document.querySelectorAll('nav div[id^="nav-"]');
  navItems.forEach((item) => {
    item.classList.remove('line-through', 'text-accent');
  });

  const activeNavItem = document.getElementById(`nav-${id}`);
  if (activeNavItem) {
    activeNavItem.classList.add('line-through', 'text-accent');
  }
}

/**
 * Highlights the navigation item of the currently active section.
 *
 * This function loops through all sections on the page and checks which one is currently visible
 * by comparing the section's top bounding rectangle to the window's inner height. The ID of the
 * visible section is then used to update the navigation menu styles by adding specific styles
 * to the corresponding navigation item.
 *
 * If the user scrolls to the bottom of the page and no section is visible, no navigation item is
 * highlighted.
 */
function highlightActiveSection() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('nav div[id^="nav-"]');

  let activeSectionId = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
      activeSectionId = section.id; // Guardar la ID de la sección visible
    }
  });

  navItems.forEach((item) => {
    item.classList.remove('line-through', 'text-accent');
  });

  if (activeSectionId) {
    const activeNavItem = document.getElementById(`nav-${activeSectionId}`);
    if (activeNavItem) {
      activeNavItem.classList.add('line-through', 'text-accent');
    }
  }
}

/**
 * Adds an event listener to the window's scroll event to trigger the highlightActiveSection function.
 */
window.addEventListener('scroll', highlightActiveSection);

/**
 * Smoothly scrolls the page to the top.
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Copies the email to the clipboard and shows a notification to the user.
 */
function copyEmailToClipboard() {
  const email = 'armando_rour@outlook.com';
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const alert = document.getElementById('alert');
      alert.classList.remove('hidden', 'opacity-0');
      alert.classList.add('opacity-100');

      // Hide the alert after 3 seconds
      setTimeout(() => {
        alert.classList.remove('opacity-100');
        alert.classList.add('opacity-0');
        setTimeout(() => {
          alert.classList.add('hidden');
        }, 300);
      }, 3000);
    })
    .catch((error) => {
      console.error('Error al copiar el correo: ', error);
    });
}

/**
 * Initializes the marquee plugin on the elements with the class 'marquee'
 * to create a scrolling effect.
 */
$(document).ready(function () {
  $('.marquee').marquee({
    // Duration of the animation in milliseconds
    duration: 80000,

    // If true, the marquee will start visible
    startVisible: true,

    // Delay in milliseconds before starting the animation
    delayBeforeStart: 0,

    // Direction of the animation
    direction: 'left',

    // If true, the marquee will be duplicated to cover the entire width of the element
    duplicated: true,
  });
});

function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.add('hidden');
}
