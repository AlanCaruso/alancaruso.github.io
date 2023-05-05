import items from "./assets/js/portfolio.js";
import introLanguages from "./assets/data/languagesData.js";

function createGallery() {
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
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.hash) {
    if (window.location.hash === "#es") {
      title.textContent = introLanguages.es.title;
      subTitle.textContent = introLanguages.es.subTitle;
      intro.textContent = introLanguages.es.intro;
    }
  }

  const languageButton = document.querySelectorAll(".language-menu a");

  for (let i = 0; i <= languageButton.length; i++) {
    if (languageButton[i]) {
      languageButton[i].onclick = function click() {
        setTimeout(function () {
          location.reload(true);
        }, 200);
      };
    } else {
      console.log("language option does not exist");
    }
  }
});

createGallery();
