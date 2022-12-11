/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  pause();
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restoran-item__name');

  const firstRestaurant = locate('.restoran-item__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.restoran-item__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restoran-item__name');

  const firstRestaurant = locate('.restoran-item__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.restoran-item__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.restoran-item__name');

  const firstRestaurantLiked = locate('.restoran-item__name').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restoran-item__name');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restoran-item__name').at(i + 1));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant-detail__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorites');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restoran-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restoran-item__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
