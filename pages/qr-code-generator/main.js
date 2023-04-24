const image = document.querySelector("img"),
    input = document.querySelector("textarea"),
    button = document.querySelector("button"),
    title = document.getElementsByClassName("title"),
    api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

function generateQr() {

    image.src = `${api}${input.value}`;

}


