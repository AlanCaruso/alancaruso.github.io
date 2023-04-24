

const items = {
    0: {
        title: 'QR Code Generator',
        url: 'pages/qr-code-generator',
        img: 'img/qr-code-generator.png',
    },
    1: {
        title: 'Github Users Searcher',
        url: 'pages/search-github-users',
        img: 'img/search-github-users.png',
    },
    2: {
        title: 'To Do App',
        url: 'pages/todo-app',
        img: 'img/todo-app.png',
    },

    3: {
        title: 'Experience Rating',
        url: 'pages/rating-component',
        img: 'img/rating-component.png',
    },
    4: {
        title: 'Adventurer Ecommerce',
        url: 'pages/adventurer-ecommerce',
        img: 'img/adventurer-ecommerce.png',
    },
    5: {
        title: 'QR Code Component',
        url: 'pages/qr-code-component-main',
        img: 'img/qr-code.png',
    },
    6: {
        title: 'Personal Card Page',
        url: 'pages/personal-component-card',
        img: 'img/personal-card.png',
    },
    7: {
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