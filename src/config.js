module.exports = {
  siteTitle: 'Katerin Tello',
  siteDescription:
    'Katerin Tello is an enthusiastic Web Developer based in Australia, passionate about exploring new technologies for development and analysis',
  siteKeywords:
    'Katerin Tello, Katerin, Tello, katerintello, software engineer, web developer, javascript, python, java, svvv, indore',
  siteUrl: 'https://katerintello.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Katerin Tello',
  location: 'Lima, Peru',
  email: 'tellourakaterin@gmail.com',
  github: 'https://github.com/KaterinT',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/KaterinT',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/katerin-tello-ura/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/#',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/katerintll/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/urtkate7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    lightSlate: '#a8b2d1',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
