export function handleSubmit(event) {
    event.preventDefault();

    // Defined Global Variables
    let inputLat;
    let inputLng;
    let country;
    let city;
    let hits;

    let inputPlace = document.getElementById('place').value;
    let inputStartDate = document.getElementById('start-date').value;
    let inputEndDate = document.getElementById('end-date').value;

    console.log(inputPlace, inputStartDate, inputEndDate);

    // POST request to server side
    if(inputPlace !== '') {

        // GeoName Fetching
        console.log(`::: GeoName Fetching :::`);
        fetch('http://localhost:8888/place', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ inputPlace })
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(`::: Fetching Success :::`);
            console.log(res);
            inputLat = res.geonames[0].lat;
            inputLng = res.geonames[0].lng;
            country = res.geonames[0].countryName;
            console.log(inputLat, inputLng, country);

            Client.updateUI(inputPlace, country, inputStartDate, inputEndDate)
            console.log(inputPlace, country, inputStartDate, inputEndDate);
        })
        
        // WeatherBit Fetching
        .then(function() {
            console.log(`::: WeatherBit Fetching :::`);
            fetch('http://localhost:8888/forecast', {
                method: 'POST',
                credentials: 'same-origin',           
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ inputLat, inputLng })
            })
            .then(res => res.json())
            .then(function(res) {
                console.log(`::: Fetching Success :::`);
                console.log(res);
                const data = res;
                city = res.city_name;
                console.log(city);
                Client.updateWeather(data)
            })

            // PixaBay Fetching
            .then(function() {
                console.log(`::: PixaBay City Image Fetching :::`);
                fetch('http://localhost:8888/image', {
                    method: 'POST',
                    credentials: 'same-origin',           
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ city, country })
                })
                .then(res => res.json())
                .then(function(res) {
                    console.log(`::: Initial Fetching Success :::`);
                    hits = res.totalHits;

                    // If images of input place does not exist, fetch country images instead.
                    if (hits === 0) {
                        console.log(`::: Fail to Fetch City Image :::`);
                        fetch('http://localhost:8888/countryImage', {
                            method: 'POST',
                            credentials: 'same-origin',           
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ city, country })
                        })
                        .then(res => res.json())
                        .then(function(res) {
                            console.log(`::: Fetching Country Image Success :::`);
                            console.log(res);
                            Client.updateImage(res)
                        })
                    } else {
                            console.log(`::: Fetching City Image Success :::`);
                            console.log(res);
                            Client.updateImage(res)
                    }
                })
            })
        })
    } else (
        // Run alertError function when error occured
        Client.alertError()
    );
};