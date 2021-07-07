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
      <h1 class="post-item__title"><a href="http://localhost:8080/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h1>
      <p class="post-item__description" tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant, foodsTemplate, drinksTemplate, customerReviewsTemplate) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <div class="movie__image">
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Foto Restaurant ${restaurant.name}" />
  </div>
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p> ⭐️ ${restaurant.rating}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Menu</h4>
    <div class="menu__container">
      <div class="menu__title"><h5>Makanan</h5></div>
      ${foodsTemplate.join('')}
    </div>
    <div class="menu__container">
      <div class="menu__title"><h5>Minuman</h5></div>
      ${drinksTemplate.join('')}
    </div>
  </div>
  <div class="movie__overview">
    <h3>Customer Reviews</h3>
    ${customerReviewsTemplate.join('')}
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
