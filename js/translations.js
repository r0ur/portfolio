const resources = {
  en: {
    translation: {
      Work: 'Work',
      About: 'About',
      Contact: 'Contact',
      Title:
        'Hello! I\'m Armando Rojano, a <span class="font-light">multidisciplinary designer</span> with over 3 years of experience.',
      Subtitle:
        'I bridge <span class="font-light">design <span class="font-medium">and</span> development</span> to craft intuitive and impactful digital solutions.',
      UXResearch: 'UX Research',
      UXDesign: 'UX Design',
      WebDevelopment: 'Web Development',
      Background: 'Background',
      Resume: 'Resume here.',
    },
  },
  es: {
    translation: {
      Work: 'Proyectos',
      About: 'Acerca de',
      Contact: 'Contáctame',
      Title:
        '¡Hola! Soy Armando Rojano, un <span class="font-light">diseñador multidisciplinario</span> con más de 3 años de experiencia.',
      Subtitle:
        'Creo soluciones digitales intuitivas e impactantes, combinando <span class="font-light">diseño <span class="font-medium">y</span> desarrollo.</span>',
      UXResearch: 'Investigación UX',
      UXDesign: 'Diseño UX',
      WebDevelopment: 'Desarrollo web',
      Background: 'Experiencia',
      Resume: 'Revisa mi CV',
    },
  },
};

i18next.init(
  {
    lng: 'es',
    debug: true,
    resources,
  },
  function (err, t) {
    updateContent();
  }
);

function changeLanguage(lng) {
  i18next.changeLanguage(lng, function (err, t) {
    if (err) return console.log('Algo salió mal al cambiar el idioma', err);
    updateContent();
  });
}

function updateContent() {
  document.getElementById('nav-work').innerText = i18next.t('Work');
  document.getElementById('nav-about').innerText = i18next.t('About');
  document.getElementById('nav-contact').innerText = i18next.t('Contact');
  document.getElementById('title').innerHTML = i18next.t('Title');
  document.getElementById('subtitle').innerHTML = i18next.t('Subtitle');
  document.getElementById('ux-research').innerText = i18next.t('UXResearch');
  document.getElementById('ux-design').innerText = i18next.t('UXDesign');
  document.getElementById('web-development').innerText =
    i18next.t('WebDevelopment');
  document.getElementById('background').innerText = i18next.t('Background');
  document.getElementById('resume').innerText = i18next.t('Resume');
  // Actualiza más elementos según sea necesario
}
