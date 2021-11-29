export function handleSubmit(event) {
    event.preventDefault();

    // Defined Global Variables
    let inputLat;
    let inputLng;
    let country;
    let city;

    let inputPlace = document.getElementById('place').value;
    let inputUsername = document.getElementById('username').value;

    console.log(inputPlace);

    // POST request to server side
    if(inputPlace !== '') {
        const duo = {inputPlace, inputUsername};
        console.log(duo);

        console.log("::: GeoName Fetching :::");
        fetch('http://localhost:8888/place', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(duo)
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(`::: Fetching Success :::`);
            console.log(res);
            inputLat = res.geonames[0].lat;
            inputLng = res.geonames[0].lng;
            country = res.geonames[0].countryName;
            console.log(inputLat, inputLng, country);
            })
        .then(function() {
            console.log("::: WeatherBit Fetching :::");
            fetch('http://localhost:8888/forecast', {
                method: 'POST',
                credentials: 'same-origin',           
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ inputLat, inputLng, country })
            })
            .then(res => res.json())
            .then(function(res) {
                console.log(`::: Fetching Success :::`);
                console.log(res);
                const data = res.data[0];
                city = data.city_name;
                console.log(city);
            })
        })
    } else (
        // Run alert function when error occured
        Client.alertError()
    );
};