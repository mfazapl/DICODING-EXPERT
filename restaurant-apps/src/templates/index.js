import 'regenerator-runtime'; /* untuk transpile async/await */
import '../styles/main.css';
import '../styles/responsive.css';
import App from '../public/views/app';

const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
  hero: document.querySelector('#hero'),
  footer: document.querySelector('#custom-element'),

});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
