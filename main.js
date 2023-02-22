

const items = {
    0: {
        title: 'Github Users Searcher',
        url: 'pages/search-github-users',
        img: 'img/search-github-users.png',
    },
    1: {
        title: 'To Do App',
        url: 'pages/todo-app',
        img: 'img/todo-app.png',
    },

    2: {
        title: 'Experience Rating',
        url: 'pages/rating-component',
        img: 'img/rating-component.png',
    },
    3: {
        title: 'Adventurer Ecommerce',
        url: 'pages/adventurer-ecommerce',
        img: 'img/adventurer-ecommerce.png',
    },
    4: {
        title: 'QR Code Component',
        url: 'pages/qr-code-component-main',
        img: 'img/qr-code.png',
    },
    5: {
        title: 'Personal Card Page',
        url: 'pages/personal-component-card',
        img: 'img/personal-card.png',
    },
    6: {
        title: 'Soft UI Design System',
        url: 'https://www.figma.com/file/gHHRAF9Sn1BJ0OUIJdTJnZ/Soft-UI-Components?node-id=1%3A34',
        img: 'img/design-system.png',
    },


}
const createGallery = () => {
    const content = document.querySelector(".content");
    content.innerHTML = Object.keys(items).map(key => {
        return `<a target="_blank" href="${items[key].url}">
            <div class="card">
                <h4>${items[key].title}</h4>
                <img src="${items[key].img}" alt="">
            </div>
        </a>`
    }).join('');

}




createGallery()