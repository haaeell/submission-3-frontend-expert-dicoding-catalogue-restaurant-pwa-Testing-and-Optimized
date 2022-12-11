import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restoran-item">
    <a href="/#/detail/${restaurant.id}">
      <img class="restoran-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restoran-item__content">
        <p class="restoran-item__city">${restaurant.city}  <span class="restoran-item__rating" aria-label="rating restoran ${restaurant.rating}"><i class="fa fa-star"></i>${restaurant.rating}</span>
        </p>
        <h3 class="restoran-item__name">${restaurant.name}</h3>
      </div>
    </a>
  </article>
`;
const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__wrapper">
    <div class="restaurant-detail__info">
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <p class="restaurant-detail__about">
        <span class="restaurant-detail__rating"><i class="fa fa-star"></i>${restaurant.rating}</span> 
        ${restaurant.categories.map((category) => `
          <span class="restaurant-detail__category">${category.name}</span>
        `).join('')}
      </p>
      <p class="restoran-detail__location font-secondary">${restaurant.address}, ${restaurant.city}</p>
      <img class="restaurant-detail__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <p class="restoran-detail__description">${restaurant.description}</p>
    </div>
    
    <h3>Menu List</h3>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
        <h4>Makanan</h4>
        <ul class="restaurant-detail__foods">
          ${restaurant.menus.foods.map((food) => `
            <li>${food.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="drinks">
        <h4>Minuman</h4>
        <ul class="restaurant-detail__drinks">
          ${restaurant.menus.drinks.map((drink) => `
            <li>${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>

    <h3>Review Customer</h3>
    <div class="restaurant-detail__review">
      ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
        <i class="fa-sharp fa-solid fa-user customer-avatar"></i>
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;
const createLikeButtonTemplate = () => (`
  <button aria-label="like this restaurants" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`);

const createUnlikeButtonTemplate = () => (`
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`);

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
