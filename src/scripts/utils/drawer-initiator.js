/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ menuButton, closeMenu, drawer }) {
    const navHome = document.getElementsByClassName('nav__item')[0];
    const navFavorite = document.getElementsByClassName('nav__item')[1];
    const navAbout = document.getElementsByClassName('nav__item')[2];

    function drawerToggle(element, method) {
      element.addEventListener('click', (event) => {
        method(event, drawer);
      });
    }

    drawerToggle(menuButton, this._toggleDrawer);
    drawerToggle(closeMenu, this._closeDrawer);
    drawerToggle(navHome, this._closeDrawer);
    drawerToggle(navFavorite, this._closeDrawer);
    drawerToggle(navAbout, this._closeDrawer);
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    document.body.style.overflow = 'hidden';
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    document.body.style.overflow = 'scroll';
  },
};

export default DrawerInitiator;
