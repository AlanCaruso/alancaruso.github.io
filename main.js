import items from "./assets/js/portfolio.js";

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
