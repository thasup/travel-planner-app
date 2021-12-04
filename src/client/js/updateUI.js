export function updateUI(cityData, countryData, startDateData, endDateData, duration, data) {
    // Update Overview Container
    const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const adjStartDate = new Date(startDateData);
    const adjEndDate = new Date(endDateData);
    const prettyStartDate = `${adjStartDate.getDate()} ${year[adjStartDate.getMonth()]} ${adjStartDate.getFullYear()}`;
    const prettyEndDate = `${adjEndDate.getDate()} ${year[adjEndDate.getMonth()]} ${adjEndDate.getFullYear()}`;

    const overview = document.querySelector('#overview-container');
    const city = cityData.charAt(0).toUpperCase() + cityData.slice(1);
    overview.innerHTML =   `<p><span id="highlight">${city}, ${countryData}</span></p>\n
                            <p>${prettyStartDate} - ${prettyEndDate}\n(${duration} days)</p>
                            <img id="flag" src="${data[0].flag}" alt="${countryData}_falg">\n
                            <p><span id="keys">Capital : </span>${data[0].capital}</p>\n
                            <p><span id="keys">Currency : </span>${data[0].currencies[0].name} (${data[0].currencies[0].symbol})</p>\n
                            <p><span id="keys">Language : </span>${data[0].languages[0].name}</p>\n
                            <p><span id="keys">Population : </span>${data[0].population.toLocaleString()}</p>\n
                            <p><span id="keys">Area : </span>${data[0].area.toLocaleString()} sq.km</p>`;
};