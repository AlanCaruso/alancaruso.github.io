import introLanguages from "./assets/data/languagesData.js";
import language from "./assets/js/language.js";
import items from "./assets/data/portfolioData.js";

const createGallery = function () {
  const content = document.querySelector(".content");

  content.innerHTML = Object.keys(items)
    .map((key) => {
      return `<a target="_blank" href="${items[key].url}">
            <div class="portfolio-card">
                <div class="tag" data-tag="${items[key].tags}">
                  <span class="tag-text">${items[key].tagsTitle}</span>
                </div>
                <h4>${items[key].title}</h4>
                <img src="${items[key].img}" alt="">
            </div>
        </a>`;
    })
    .join("");

  setTimeout(addTags, 1000);
};

const addTags = function () {
  const posts = document.querySelectorAll(".tag");

  posts.forEach((post) => {
    const tagElement = post.querySelector(".tag-text");
    const postTag = post.getAttribute("data-tag");
    Object.keys(items).forEach((key) => {
      const tag = items[key].tags;
      if (postTag === tag) {
        tagElement.classList.add(`${tag}-tag`);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.hash) {
    if (window.location.hash === "#es") {
      title.textContent = introLanguages.es.title;
      subTitle.textContent = introLanguages.es.subTitle;
      intro.textContent = introLanguages.es.intro;
    }
  }

  language();
});

createGallery();
