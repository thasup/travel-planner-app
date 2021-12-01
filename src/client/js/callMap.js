// Retrieve weather data from web API
export async function callMap() {
    const googleMap = process.env.API_KEY_GOOGLEMAP;

    const response = await fetch(`https://maps.googleapis.com/maps/api/js?key=${googleMap}&callback=${Client.initMap()}`)

    try {
        console.log("call Map!");
    } catch(error) {
        console.log('error', error);
    }
};