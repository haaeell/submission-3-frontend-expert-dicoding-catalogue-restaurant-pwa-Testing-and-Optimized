/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <main id="main" tabindex="0">
      <section class="content">
        <h2 class="list-restoran__label">
          Favorites Restaurants
        </h2>
        <div class="search-container">
          <input id="query" type="text" placeholder="Cari Restaurant ..." >
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
      </div>
        <div id="restaurants" class="list-restoran">
        </div>
      </section>
    </main>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
