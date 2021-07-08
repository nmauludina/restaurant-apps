import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="explore">
        <h3 class="explore__label" tabindex="0">Favorite Restaurant</h3>
        <div id="posts" class="posts"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const drawerBorder = document.querySelector('#drawer');
    drawerBorder.style = 'border: 5px solid #FF8303';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
