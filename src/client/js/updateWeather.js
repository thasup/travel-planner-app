export function updateWeather(data) {
    // Define Variables
    const city = document.querySelector('#place');
    const date = document.querySelector('#date');
    const icon = document.querySelector('#icon');
    const temperature = document.querySelector('#temp');
    const condition = document.querySelector('#condition');

    const precipitation = document.querySelector('#precipitation');
    const windSpeed = document.querySelector('#wind-speed');
    const humidity = document.querySelector('#humidity');
    const pressure = document.querySelector('#pressure');
    const visibility = document.querySelector('#visibility');

    const iconPath = 'https://www.weatherbit.io/static/img/icons/';

    // Update UI
    city.innerHTML = `${data.city_name}`;
    date.innerHTML = `${data.data[0].valid_date}`;
    icon.innerHTML = `<img src="${iconPath}${data.data[0].weather.icon}.png" alt="" width="50%" height="50%"/>`;
    temperature.innerHTML = `${data.data[0].temp} <span id="cel">°C</span>`;
    condition.innerHTML = `${data.data[0].weather.description}`;

    precipitation.innerHTML = `Precipitation   ${data.data[0].pop} %`;
    windSpeed.innerHTML = `Wind Speed   ${data.data[0].wind_spd} m/s`;
    humidity.innerHTML = `Humidity   ${data.data[0].rh} %`;
    pressure.innerHTML = `Pressure   ${Math.round(data.data[0].pres)} mb`;
    visibility.innerHTML = `Visibility   ${Math.round(data.data[0].vis)} km`
};