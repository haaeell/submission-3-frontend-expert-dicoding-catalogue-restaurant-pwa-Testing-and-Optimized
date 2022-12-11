import RestaurantSource from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <div class="banner">
        <div class="banner__inner">
          <h2 class="banner__title">RESTAURANTKUYYY</h2>
        </div>
      </div>

      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restoran__label">
            Cari Restaurant
          </h2>
          <div class="list-restoran"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restoran');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
