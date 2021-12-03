export function updateUI(cityData, countryData, startDateData, endDateData) {

// =====================
// Update Menu Container
// =====================
    const menu = document.querySelector('.menu-container');

    // Show menu tab
    menu.style.display = "block";

// ========================
// Update Overview Container
// ========================
    const overview = document.querySelector('#overview-container');
    const city = cityData.charAt(0).toUpperCase() + cityData.slice(1);
    overview.innerHTML = `<p>${city}, ${countryData}</p>\n<p>${startDateData} - ${endDateData}</p>`;

// ========================
// Update Weather Container
// ========================
    
};