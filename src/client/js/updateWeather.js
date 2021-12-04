export function updateWeather(data, duration, dayCount, departDateValue, returnDateValue) {
    // Define variables
    const forecastSummaryList = document.querySelector('.forecast-summary-list');
    const forecastDetailList = document.querySelector('.forecast-detail-list');
    const iconPath = 'https://www.weatherbit.io/static/img/icons/';
    
    // Check if it can fetch weather forecast or not
    if (((0 <= departDateValue < 16) && (0 <= returnDateValue < 16)) === true) {

        // Add HTML content to <div> elements
        for (let j = 0 ; j < duration ; j++) {
            const index = j + dayCount;
            const year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const adjDate = new Date(data.data[index].valid_date);
            const dd = adjDate.getDate();
            const mm = adjDate.getMonth();
            const shortDate = `${dd} ${year[mm]}`;

            forecastSummaryList.innerHTML +=   `<div class="forecast-summary" id="forecast-summary-${j}">
                                                    <div id="date">${shortDate}</div>
                                                    <div id="icon"><img id="weather-icon" src="${iconPath}${data.data[index].weather.icon}.png" alt="Weather_Icon"/></div>
                                                    <div id="temp">${data.data[index].temp} <span id="cel">°C</span></div>
                                                    <div id="condition">${data.data[index].weather.description}</div>
                                                </div>`;

            forecastDetailList.innerHTML +=    `<div class="forecast-detail" id="forecast-detail-${j}">
                                                    <div id="precipitation">Precipitation   ${data.data[index].pop} %</div>
                                                    <div id="wind-speed">Wind Speed   ${data.data[index].wind_spd} m/s</div>
                                                    <div id="humidity">Humidity   ${data.data[index].rh} %</div>
                                                    <div id="pressure">Pressure   ${Math.round(data.data[index].pres)} mb</div>
                                                    <div id="visibility">Visibility   ${Math.round(data.data[index].vis)} km</div>
                                                </div>`;
        };
    } else {
        for (let j = 0 ; j < 7 ; j++) {
            const year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const adjDate = new Date(data.data[j].valid_date);
            const dd = adjDate.getDate();
            const mm = adjDate.getMonth();
            const shortDate = `${dd} ${year[mm]}`;

            forecastSummaryList.innerHTML +=   `<div class="forecast-summary" id="forecast-summary-${j}">
                                                    <div id="date">${shortDate}</div>
                                                    <div id="icon"><img id="weather-icon" src="${iconPath}${data.data[j].weather.icon}.png" alt="Weather_Icon"/></div>
                                                    <div id="temp">${data.data[j].temp} <span id="cel">°C</span></div>
                                                    <div id="condition">${data.data[j].weather.description}</div>
                                                </div>`;

            forecastDetailList.innerHTML +=    `<div class="forecast-detail" id="forecast-detail-${j}">
                                                    <div id="precipitation">Precipitation   ${data.data[j].pop} %</div>
                                                    <div id="wind-speed">Wind Speed   ${data.data[j].wind_spd} m/s</div>
                                                    <div id="humidity">Humidity   ${data.data[j].rh} %</div>
                                                    <div id="pressure">Pressure   ${Math.round(data.data[j].pres)} mb</div>
                                                    <div id="visibility">Visibility   ${Math.round(data.data[j].vis)} km</div>
                                                </div>`;
        };
    };
};