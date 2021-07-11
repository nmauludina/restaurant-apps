import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="post-item">
    <div class="post-item__thumbnail-wrapper">
      <img class="post-item__thumbnail"
        src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
        alt="Foto Restaurant ${restaurant.name}" tabindex="0">
      <p class="post-item__ribbon" tabindex="0">Kota ${restaurant.city}</p>
    </div>
    <div class="post-item__content">
      <p class="post-item__rating" tabindex="0"> ⭐️ <span class="post-item__rating__value">${restaurant.rating}</span></p>
      <h1 class="post-item__title"><a href="#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h1>
      <p class="post-item__description" tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant, foodsTemplate, drinksTemplate, customerReviewsTemplate) => `
  <h2 class="movie__title" tabindex="0">${restaurant.name}</h2>
  <div class="movie__image">
    <img tabindex="0" class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Foto Restaurant ${restaurant.name}" />
  </div>
  <div class="movie__info">
  <h3 tabindex="0">Informasi</h3>
    <h4 tabindex="0">Kota</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0"> ⭐️ ${restaurant.rating}</p>
    <h4 tabindex="0">Description</h4>
    <p tabindex="0">${restaurant.description}</p>
    <h4 tabindex="0">Menu</h4>
    <div class="menu__container">
      <div class="menu__title"><h5 tabindex="0">Makanan</h5></div>
      ${foodsTemplate}
    </div>
    <div class="menu__container">
      <div class="menu__title"><h5 tabindex="0">Minuman</h5></div>
      ${drinksTemplate}
    </div>
  </div>
  <div class="movie__overview">
    <h3 tabindex="0">Customer Reviews</h3>
    ${customerReviewsTemplate}
  </div>
`;

const foodsTemplate = (foods) => foods.map((food) => `
  <div tabindex="0" class="menu-item">${food.name}</div>
`).join('');

const drinksTemplate = (drinks) => drinks.map((drink) => `
  <div tabindex="0" class="menu-item">${drink.name}</div>
`).join('');

const customerReviewsTemplate = (customerReviews) => customerReviews.map((customerReview) => `
<div class="movie__review">
  <h4 tabindex="0">${customerReview.name} - ${customerReview.date}</h4>
  <p tabindex="0">${customerReview.review}</p>
</div>
`).join('');

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  foodsTemplate,
  drinksTemplate,
  customerReviewsTemplate,
};
