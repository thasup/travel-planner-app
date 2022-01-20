export function updateImage(data) {
    // Show how much images that can acquired via API
    const totalImage = data.totalHits;

    // Define number of images you want to show
    const imgNumber = 7;

    const initialBackground = document.querySelector(".images");
    initialBackground.style.backgroundImage = `url(${data.hits[0].largeImageURL})`;

    // Build new <div> for store background images
    for (let i = 1; i < totalImage && i < imgNumber; i++) {
        const newDiv = document.createElement("div");
        const imgURL = data.hits[i].largeImageURL;

        const imgStyle = `background-image: url(${imgURL});`;

        // Set Attributes
        newDiv.setAttribute("class", `images`);
        newDiv.setAttribute("id", `img-${i}`);
        newDiv.setAttribute("style", imgStyle);

        const background = document.getElementsByClassName("background-img")[0];
        background.appendChild(newDiv);
    }
}
