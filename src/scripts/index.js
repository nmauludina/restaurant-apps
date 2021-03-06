import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import { restaurants } from '../DATA.json';


/*
*
*   open / close navigation
*
*/

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");
const heroElement = document.querySelector("#hero");
const footerElement = document.querySelector("footer");
 
hamburgerButtonElement.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});
 
 
mainElement.addEventListener("click", event => {
 drawerElement.classList.remove("open");
 event.stopPropagation();
});

heroElement.addEventListener("click",event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});

footerElement.addEventListener("click",event => {
    drawerElement.classList.remove("open");
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

/*
*
*   footer
*
*/

var date = new Date();
var year = date.getFullYear();

footerElement.innerHTML = `<p tabindex="0">Copyright &copy; ${year} - Kenyangin</p>`
