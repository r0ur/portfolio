/**
 * Smoothly scrolls the page to a specified section.
 * @param {string} id - The id of the section to scroll to.
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
}

/**
 * Smoothly scrolls the page to the top.
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function copyEmailToClipboard() {
  const email = 'armando_rour@outlook.com';
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const alert = document.getElementById('alert');
      alert.classList.remove('hidden', 'opacity-0');
      alert.classList.add('opacity-100');

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
