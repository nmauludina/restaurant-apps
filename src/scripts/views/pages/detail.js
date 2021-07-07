import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#movie');
    const foodsTemplate = restaurant.menus.foods.map((food) => `
      <div>${food.name}</div>
    `);
    const drinksTemplate = restaurant.menus.drinks.map((drink) => `
      <div>${drink.name}</div>
    `);
    const customerReviewsTemplate = restaurant.customerReviews.map((customerReview) => `
      <div class="movie__review">
        <h4>${customerReview.name} - ${customerReview.date}</h4>
        <p>${customerReview.review}</p>
      </div>
    `);
    movieContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant,
      foodsTemplate,
      drinksTemplate,
      customerReviewsTemplate,
    );
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();
  },
};

export default Detail;
