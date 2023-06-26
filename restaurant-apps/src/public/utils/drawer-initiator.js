const DrawerInitiator = {
  init({
    menu, drawer, main, hero,
  }) {
    if (menu) {
      menu.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
    }

    if (main) {
      main.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    }

    if (hero) {
      hero.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    }
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
