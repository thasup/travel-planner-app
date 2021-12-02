export function selector() {
    const selectorList = document.querySelector('.selector-list');
    const forecastMainList = document.querySelector('.forecast-main-list');
    const forecastDetailList = document.querySelector('.forecast-detail-list');

    let counter = 2;

    // Show menu tab
    selectorList.style.display = "block";

    const addForecast = () => {
        for (let i = 0; i < dayCount.children.length; i++) {
            counter++

            // Add forecast-main list
            const newForecastMain =    `<li id="forecast-main-${counter}">
                                            <div id="date"></div>
                                            <div id="icon"></div>
                                            <div id="temp"></div>
                                        </li>`;
            forecastMainList.insertAdjacentHTML('beforeend', newForecastMain);

            // Add forecast-detail list
            const newForecastDetail =   `<li id="forecast-detail-${counter}">
                                            <div id="place"></div>
                                            <div id="icon"></div>
                                            <div id="temp"></div>
                                            <div id="condition"></div>
                                            <div id="precipitation"></div>
                                            <div id="wind-speed"></div>
                                            <div id="humidity"></div>
                                            <div id="pressure"></div>
                                            <div id="visibility"></div>
                                        </li>`;
            forecastDetailList.insertAdjacentHTML('beforeend', newForecastDetail);
        }
        
    };

    // Run function
    addForecast();
};