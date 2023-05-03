import items from "./assets/js/portfolio.js";
import introLanguages from "./assets/js/language.js";

window.onload = function () {
  const createGallery = () => {
    const content = document.querySelector(".content");
    content.innerHTML = Object.keys(items)
      .map((key) => {
        return `<a target="_blank" href="${items[key].url}">
              <div class="card">
                  <h4>${items[key].title}</h4>
                  <img src="${items[key].img}" alt="">
              </div>
          </a>`;
      })
      .join("");
  };

  createGallery();

  if (window.location.hash) {
    if (window.location.hash === "#es") {
      title.textContent = introLanguages.es.title;
    }
  }
};
