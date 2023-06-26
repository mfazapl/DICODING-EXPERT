import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/route';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    menu, hero, main, drawer, footer,
  }) {
    this._menu = menu;
    this._drawer = drawer;
    this._main = main;
    this._hero = hero;
    this._footer = footer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menu: this._menu,
      drawer: this._drawer,
      main: this._main,
      hero: this._hero,
      footer: this._footer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
