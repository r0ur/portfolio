document.addEventListener('DOMContentLoaded', function () {
  const resources = {
    en: {
      translation: {
        Presentation: 'Armando Rojano | Designer',
        Work: 'Work',
        About: 'About',
        Contact: 'Contact',
        WorkMobile: 'Work',
        AboutMobile: 'About',
        ContactMobile: 'Contact',
        EmailMeMobile: 'Email me',
        Title:
          'Hello! I\'m Armando Rojano, a <span class="font-light">multidisciplinary designer</span> with over 3 years of experience.',
        Subtitle:
          'I bridge <span class="font-light">design <span class="font-medium">and</span> development</span> to craft intuitive and impactful digital solutions.',
        UXResearch: 'UX Research',
        OXLogistics: 'Web App',
        Yuni: 'Mobile App',
        Mait: 'Mobile App',
        Doia: 'Web App',
        Read1: 'Read Case Study →',
        Read2: 'Read Case Study →',
        Read3: 'Read Case Study →',
        Read4: 'Read Case Study →',
        UXDesign: 'UX Design',
        Carousel: 'Hold Shift + Mouse Scroll Wheel',
        CarouselMobile: 'Drag horizontally to see more snapshots!',
        WebDevelopment: 'Web Development',
        Portfolio: 'Portfolio',
        PortfolioDescription:
          'A simple, and responsive portfolio website to showcase my projects.',
        AboutSection: 'About',
        AboutInfo:
          'I work as a <span class="font-light">UX Engineer</span> at <a class="underline hover:decoration-accent" href="https://www.linkedin.com/company/ilum-prosperity-sherpas/" target="_blank">Ilum Prosperity Sherpas,</a> developing solutions for the ideas that emerge within the company.',
        AboutDetails:
          'My expertise includes visual design, content design, motion design, and web development, allowing me to explore the full spectrum of digital creation.',
        AboutHobbies:
          "When I'm not designing, I enjoy exploring my passions—it fuels my creativity—for photojournalism, novels, short-stories, movies, running, and continuous personal growth.",
        Background: 'Background',
        BackgroundSubtitle:
          'My curiosity, and adaptability allow me to thrive in dynamic environments.',
        BackgroundTitle01:
          '<span class="font-normal">Freelance</span> Graphic Designer',
        BackgroundDescription01:
          'Midway through my digital arts career, I worked on visual design, photography and retouching, as well as video editing and production.',
        BackgroundTitle02:
          'UX Designer <span class="font-normal">at Ilum Prosperity Sherpas</span>',
        BackgroundDate02: 'August 2021 — January 2022',
        BackgroundDescription02:
          'After completing my degree, I started as a user experience designer, dedicating six months to designing the experience for a logistics service.',
        BackgroundTitle03:
          'UX Designer and Researcher <span class="font-normal">at Ilum Prosperity Sherpas</span>',
        BackgroundDate03: 'January 2022 — March 2024',
        BackgroundDescription03:
          'I took on a role as a UX designer and researcher. I began handling core responsibilities while also covering additional roles as needed.',
        BackgroundTitle04:
          '<span class="font-normal">Freelance</span> UX Designer',
        BackgroundDate04: 'Since 2023',
        BackgroundDescription04:
          'Returning to freelancing, I redesigned my logo mark, now encompassing all my skills as a multidisciplinary designer.',
        BackgroundTitle05:
          'UX Engineer <span class="font-normal">at Ilum Prosperity Sherpas</span>',
        BackgroundDate05: 'March 2024 — Present',
        BackgroundDescription05:
          'To broaden my skillset as a digital creator, I began contributing as a web developer, handling both frontend and backend tasks alongside my UX design work.',
        Resume: 'Resume here',
        Certificates: 'Certificates',
        Certificate01:
          'UX Design Professional Certificate <span class="font-normal">by</span> Google',
        Certificate02:
          'Design Thinking Professional Certificate <span class="font-normal">by</span> CertiProf',
        Certificate03:
          'Scrum Foundation Professional Certification <span class="font-normal">by</span> CertiProf',
        Technologies: 'Technologies',
        TechnologiesDescription:
          'These are the tools I have used, but I always enjoy learning new tech.',
        Design: 'Design',
        DataBase: 'Database',
        VersionControl: 'Version Control',
        Others: 'Others',
        Connect: "Let's connect!",
        ScrollUp: 'Scroll up ↑',
        ClipboardAlert:
          '<img src="assets/icons/white/copy-white.svg" class="size-6" /> Email copied to clipboard.',
      },
    },
    es: {
      translation: {
        Presentation: 'Armando Rojano | Diseñador',
        Work: 'Proyectos',
        About: 'Sobre mí',
        Contact: 'Contacto',
        WorkMobile: 'Proyectos',
        AboutMobile: 'Sobre mí',
        ContactMobile: 'Contacto',
        EmailMeMobile: 'Envíame un correo',
        Title:
          '¡Hola! Soy Armando Rojano, <span class="font-light">diseñador multidisciplinario</span> con más de 3 años de experiencia.',
        Subtitle:
          'Creo soluciones digitales intuitivas e impactantes, combinando <span class="font-light">diseño <span class="font-medium">y</span> desarrollo.</span>',
        UXResearch: 'Investigación UX',
        OXLogistics: 'Aplicación Web',
        Yuni: 'Aplicación Móvil',
        Mait: 'Aplicación Móvil',
        Doia: 'Aplicación Web',
        Read1: 'Leer caso de estudio →',
        Read2: 'Leer caso de estudio →',
        Read3: 'Leer caso de estudio →',
        Read4: 'Leer caso de estudio →',
        MobileApp: 'Aplicación Móvil',
        UXDesign: 'Diseño UX',
        Carousel: 'Mantén Shift + Rueda del ratón',
        CarouselMobile: '¡Arrastra horizontalmente para ver más capturas!',
        WebDevelopment: 'Desarrollo Web',
        Portfolio: 'Portafolio',
        PortfolioDescription:
          'Un sitio web simple y responsivo para mostrar mis proyectos.',
        AboutSection: 'Sobre mí',
        AboutInfo:
          'Me desempeño como <span class="font-light">UX Engineer</span> en <a class="underline hover:decoration-accent" href="https://www.linkedin.com/company/ilum-prosperity-sherpas/" target="_blank">Ilum Prosperity Sherpas,</a> desarrollando soluciones para las ideas que surgen dentro de la empresa.',
        AboutDetails:
          'Mi experiencia incluye diseño visual, diseño de contenido, motion design y desarrollo web, lo que me ha permitido explorar el espectro completo del diseño digital.',
        AboutHobbies:
          'Cuando no estoy diseñando, disfruto de lo que me apasiona, ya que alimenta mi creatividad, como el fotoperiodismo, las novelas, los cuentos, las películas, el ejercicio y mi crecimiento personal.',
        Background: 'Experiencia',
        BackgroundSubtitle:
          'Mi curiosidad y adaptabilidad me han permitido progresar en entornos dinámicos.',
        BackgroundTitle01:
          'Diseñador Gráfico <span class="font-normal">Freelance</span>',
        BackgroundDescription01:
          'En la última mitad de mi licenciatura en artes digitales, trabajé en diseño visual, fotografía y retoque, así como en edición y producción de video.',
        BackgroundTitle02:
          'Diseñador UX <span class="font-normal">en Ilum Prosperity Sherpas</span>',
        BackgroundDate02: 'Agosto 2021 — Enero 2022',
        BackgroundDescription02:
          'Después de completar mi licenciatura, comencé como diseñador de experiencia de usuario, dedicando seis meses a diseñar un servicio de logística.',
        BackgroundTitle03:
          'Diseñador e Investigador UX <span class="font-normal">en Ilum Prosperity Sherpas</span>',
        BackgroundDate03: 'Enero 2022 — Marzo 2024',
        BackgroundDescription03:
          'Inicié el rol como diseñador e investigador UX. Comencé a manejar más responsabilidades, además de cubrir roles adicionales según fuera necesario.',
        BackgroundTitle04:
          'Diseñador UX <span class="font-normal">Freelance</span>',
        BackgroundDate04: 'Desde 2023',
        BackgroundDescription04:
          'Regresé al trabajo independiente, rediseñando mi logo y abarcando todas mis habilidades como diseñador multidisciplinario.',
        BackgroundTitle05:
          'UX Engineer <span class="font-normal">en Ilum Prosperity Sherpas</span>',
        BackgroundDate05: 'Marzo 2024 — Presente',
        BackgroundDescription05:
          'Para ampliar mis habilidades como diseñador, comencé a contribuir como desarrollador web, manejando tareas tanto de frontend como de backend junto con mi trabajo de diseño UX.',
        Resume: 'Revisa mi CV',
        Certificates: 'Certificados',
        Certificate01:
          'Certificado de Diseño de Experiencia del Usuario <span class="font-normal">de</span> Google',
        Certificate02:
          'Certificado Profesional de Design Thinking <span class="font-normal">de</span> CertiProf',
        Certificate03:
          'Certificado Profesional de Fundamentos de Scrum <span class="font-normal">de</span> CertiProf',
        Technologies: 'Tecnologías',
        TechnologiesDescription:
          'Estas son las herramientas que he utilizado, pero siempre disfruto aprender nuevas tecnologías.',
        Design: 'Diseño',
        DataBase: 'Base de Datos',
        VersionControl: 'Control de versiones',
        Others: 'Otras',
        Connect: '¡Conectemos!',
        ScrollUp: 'Regresar al inicio ↑',
        ClipboardAlert:
          '<img src="assets/icons/white/copy-white.svg" class="size-6" /> Correo copiado al portapapeles.',
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

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function (err, t) {
      if (err) return console.log('Algo salió mal al cambiar el idioma', err);
      updateContent();
    });
  };

  function updateContent() {
    document.getElementById('presentation').innerText =
      i18next.t('Presentation');
    document.getElementById('nav-work').innerText = i18next.t('Work');
    document.getElementById('nav-about').innerText = i18next.t('About');
    document.getElementById('nav-contact').innerText = i18next.t('Contact');
    document.getElementById('nav-ux-research-mobile').innerText =
      i18next.t('WorkMobile');
    document.getElementById('nav-ux-design-mobile').innerText =
      i18next.t('AboutMobile');
    document.getElementById('nav-web-dev-mobile').innerText =
      i18next.t('ContactMobile');
    document.getElementById('nav-email-me-mobile').innerText =
      i18next.t('EmailMeMobile');
    document.getElementById('title').innerHTML = i18next.t('Title');
    document.getElementById('subtitle').innerHTML = i18next.t('Subtitle');
    document.getElementById('ux-research').innerText = i18next.t('UXResearch');
    document.getElementById('ox-logistics').innerText =
      i18next.t('OXLogistics');
    document.getElementById('yuni').innerText = i18next.t('Yuni');
    document.getElementById('mait').innerText = i18next.t('Mait');
    document.getElementById('doia').innerText = i18next.t('Doia');
    document.getElementById('read-01').innerText = i18next.t('Read1');
    document.getElementById('read-02').innerText = i18next.t('Read2');
    document.getElementById('read-03').innerText = i18next.t('Read3');
    document.getElementById('read-04').innerText = i18next.t('Read4');
    document.getElementById('ux-design').innerText = i18next.t('UXDesign');
    document.getElementById('carousel').innerText = i18next.t('Carousel');
    document.getElementById('carousel-mobile').innerText =
      i18next.t('CarouselMobile');
    document.getElementById('web-development').innerText =
      i18next.t('WebDevelopment');
    document.getElementById('portfolio').innerText = i18next.t('Portfolio');
    document.getElementById('portfolio-description').innerText = i18next.t(
      'PortfolioDescription'
    );
    document.getElementById('about-section').innerText =
      i18next.t('AboutSection');
    document.getElementById('about-info').innerHTML = i18next.t('AboutInfo');
    document.getElementById('about-details').innerText =
      i18next.t('AboutDetails');
    document.getElementById('about-hobbies').innerText =
      i18next.t('AboutHobbies');
    document.getElementById('background').innerText = i18next.t('Background');
    document.getElementById('background-subtitle').innerText =
      i18next.t('BackgroundSubtitle');
    document.getElementById('background-title-01').innerHTML =
      i18next.t('BackgroundTitle01');
    document.getElementById('background-description-01').innerText = i18next.t(
      'BackgroundDescription01'
    );
    document.getElementById('background-title-02').innerHTML =
      i18next.t('BackgroundTitle02');
    document.getElementById('background-date-02').innerText =
      i18next.t('BackgroundDate02');
    document.getElementById('background-description-02').innerText = i18next.t(
      'BackgroundDescription02'
    );
    document.getElementById('background-title-03').innerHTML =
      i18next.t('BackgroundTitle03');
    document.getElementById('background-date-03').innerText =
      i18next.t('BackgroundDate03');
    document.getElementById('background-description-03').innerText = i18next.t(
      'BackgroundDescription03'
    );
    document.getElementById('background-title-04').innerHTML =
      i18next.t('BackgroundTitle04');
    document.getElementById('background-date-04').innerText =
      i18next.t('BackgroundDate04');
    document.getElementById('background-description-04').innerText = i18next.t(
      'BackgroundDescription04'
    );
    document.getElementById('background-title-05').innerHTML =
      i18next.t('BackgroundTitle05');
    document.getElementById('background-date-05').innerText =
      i18next.t('BackgroundDate05');
    document.getElementById('background-description-05').innerText = i18next.t(
      'BackgroundDescription05'
    );
    document.getElementById('resume').innerText = i18next.t('Resume');
    document.getElementById('certificates').innerText =
      i18next.t('Certificates');
    document.getElementById('certificate-01').innerHTML =
      i18next.t('Certificate01');
    document.getElementById('certificate-02').innerHTML =
      i18next.t('Certificate02');
    document.getElementById('certificate-03').innerHTML =
      i18next.t('Certificate03');
    document.getElementById('technologies').innerText =
      i18next.t('Technologies');
    document.getElementById('technologies-description').innerText = i18next.t(
      'TechnologiesDescription'
    );
    document.getElementById('design').innerText = i18next.t('Design');
    document.getElementById('data-base').innerText = i18next.t('DataBase');
    document.getElementById('version-control').innerText =
      i18next.t('VersionControl');
    document.getElementById('others').innerText = i18next.t('Others');
    document.getElementById('connect').innerText = i18next.t('Connect');
    document.getElementById('scroll-up').innerText = i18next.t('ScrollUp');
    document.getElementById('clipboard-alert').innerHTML =
      i18next.t('ClipboardAlert');

    /*     const currentLanguage = i18next.language;
    if (currentLanguage === 'es') {
      document.getElementById('btn-es').style.display = 'none';
      document.getElementById('btn-es-mobile').style.display = 'none';
      document.getElementById('btn-en').style.display = 'block';
      document.getElementById('btn-en-mobile').style.display = 'block';
    } else {
      document.getElementById('btn-es').style.display = 'block';
      document.getElementById('btn-es-mobile').style.display = 'block';
      document.getElementById('btn-en').style.display = 'none';
      document.getElementById('btn-en-mobile').style.display = 'none';
    } */
  }
});
