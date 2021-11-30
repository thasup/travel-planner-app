export function updateUI(cityData, countryData, startDateData, endDateData) {
    const header = document.querySelector('.head');

    header.innerHTML = `<p>${cityData}, ${countryData}</p>\n<p>${startDateData} - ${endDateData}</p>`;
};