import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import { restaurants } from '../DATA.json';


/*
*
*   app bar
*
*/

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});


/*
*
*   main content
*
*/

const posts = document.getElementById("posts");
var content = ""

for (let i = 0; i < restaurants.length; i++) {
    content += `
        <div class="post-item">
            <div class="post-item__thumbnail-wrapper">
                <img class="post-item__thumbnail"
                        src="${restaurants[i].pictureId}"
                        alt="Foto Restaurant ${restaurants[i].name}" tabindex="0">
                <p class="post-item__ribbon" tabindex="0">Kota ${restaurants[i].city}</p>
            </div>
            <div class="post-item__content">
                <p class="post-item__rating" tabindex="0">Rating:  <span class="post-item__rating__value">${restaurants[i].rating}</span></p>
                <h1 class="post-item__title"><a href="#" tabindex="0">${restaurants[i].name}</a></h1>
                <p class="post-item__description" tabindex="0">${restaurants[i].description}</p>
            </div>
        </div>
    `;
}

posts.innerHTML = content;

var date = new Date();
var year = date.getFullYear();
const footer = document.querySelector("footer");
footer.innerHTML = `<p tabindex="1">Copyright &copy; ${year} - Kenyang.in</p>`