// Initialize and add the map
export async function initMap() {
    // The location of targetPlace
    const targetPlace = { lat: -25.344, lng: 131.036 };
    // The map, centered at targetPlace
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: targetPlace,
    });
    // The marker, positioned at targetPlace
    const marker = new google.maps.Marker({
      position: targetPlace,
      map: map,
    });
};

window.initMap = initMap;