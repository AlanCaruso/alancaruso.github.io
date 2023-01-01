

const items = {

    0: {
        title: 'To Do App',
        url: 'pages/todo-app',
        img: 'img/todo-app.png',
    },

    1: {
        title: 'Experience Rating',
        url: 'pages/rating-component',
        img: 'img/rating-component.png',
    },
    2: {
        title: 'Adventurer Ecommerce',
        url: 'pages/adventurer-ecommerce',
        img: 'img/adventurer-ecommerce.png',
    },
    3: {
        title: 'QR Code Component',
        url: 'pages/qr-code-component-main',
        img: 'img/qr-code.png',
    },
    4: {
        title: 'Personal Card Page',
        url: 'pages/personal-component-card',
        img: 'img/personal-card.png',
    },
    5: {
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