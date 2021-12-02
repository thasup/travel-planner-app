export function updateUI(cityData, countryData, startDateData, endDateData) {
    const header = document.querySelector('.head');
    const city = cityData.charAt(0).toUpperCase() + cityData.slice(1);

    header.innerHTML = `<p>${city}, ${countryData}</p>\n<p>${startDateData} - ${endDateData}</p>`;
};