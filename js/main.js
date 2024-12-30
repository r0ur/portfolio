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
      activeSectionId = section.id;
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
 * Copies the email address to the clipboard.
 *
 * This function attempts to use the Clipboard API to copy the email address.
 * If the Clipboard API is not available, it falls back to using a temporary
 * textarea element to copy the email address.
 *
 * @function
 * @name copyEmailToClipboard
 * @returns {void}
 */
function copyEmailToClipboard() {
  const email = 'armando_rour@outlook.com';

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showCopyAlert();
      })
      .catch((error) => {
        console.error('Error copying email: ', error);
      });
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showCopyAlert();
    } catch (error) {
      console.error('Error copying email: ', error);
    }
    document.body.removeChild(textArea);
  }
}

/**
 * Displays a copy alert by removing the 'hidden' and 'opacity-0' classes and adding the 'opacity-100' class.
 * The alert is visible for 3 seconds before it fades out by removing the 'opacity-100' class and adding the 'opacity-0' class.
 * After the fade-out transition (300ms), the 'hidden' class is added back to the alert element.
 */
function showCopyAlert() {
  const alert = document.getElementById('clipboard-alert');
  alert.classList.remove('hidden', 'opacity-0');
  alert.classList.add('opacity-100');

  setTimeout(() => {
    alert.classList.remove('opacity-100');
    alert.classList.add('opacity-0');
    setTimeout(() => {
      alert.classList.add('hidden');
    }, 300);
  }, 3000);
}

$(window).on('load', function () {
  $('.images-marquee').marquee({
    duration: 60000,
    startVisible: true,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
});

$(document).ready(function () {
  $('.marquee').marquee({
    duration: 30000,
    startVisible: true,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
});

/**
 * Opens the mobile menu by removing the 'hidden' class from the element with the
 * 'mobile-menu' ID and adds the 'overflow-hidden' class to the body to prevent
 * scrolling.
 */
function openMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

/**
 * Closes the mobile menu by adding the 'hidden' class to the element with the
 * 'mobile-menu' ID and removes the 'overflow-hidden' class from the body to allow
 * scrolling.
 */
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

/**
 * Initializes the Fancybox plugin for elements with the data attribute 'case-studies'.
 *
 * This function binds Fancybox to elements with the data-fancybox attribute set to 'case-studies',
 * enabling a pan interaction with the mouse wheel and disabling grouping by attributes.
 */
Fancybox.bind("[data-fancybox='case-studies']", {
  wheel: 'pan',
  groupAttr: false,
});

function updateResumeLink() {
  const resumeLink = document.getElementById('resume');
  if (i18next.language === 'es') {
    resumeLink.href = '/assets/docs/UX-Designer_Armando-Rojano.pdf';
  } else {
    resumeLink.href = '/assets/docs/UX-Designer_Armando-Rojano_EN.pdf';
  }
}
