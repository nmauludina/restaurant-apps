import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div id="hero" class="hero">
        <div class="hero__inner">
          <h2 class="hero__title" tabindex="0">Perut keroncongan? Cari makan di <span>Kenyangin</span> sekarang!</h2>
        </div>
      </div>

      
      <section class="content">
        <div class="explore">
          <h3 class="explore__label" tabindex="0">Explore Restaurant</h3>
          <div id="posts" class="posts"></div>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantsList();
    const restaurantContainer = document.querySelector('#posts');
    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
