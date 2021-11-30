export function updateImage(data) {
    const background = document.querySelector('#background-img');

    background.style.backgroundImage = `url(${data.hits[0].largeImageURL})`;
    background.style.width = `100%`;
    background.style.height = `100%`;
};