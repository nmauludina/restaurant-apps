import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  footer: document.querySelector('footer'),
  toContent: document.querySelector('#linktocontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const date = new Date();
app._footer.innerHTML = `<p tabindex="0">Copyright &copy; ${date.getFullYear()} - Kenyangin</p>`;
