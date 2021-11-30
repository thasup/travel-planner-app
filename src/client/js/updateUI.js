export function updateUI(city, country, start, end) {
    const header = document.querySelector('.head');

    header.style.innerHTML = `<p>${city}, ${country}</p><p>${start} - ${end}</p>`;
};