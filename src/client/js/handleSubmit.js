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

    // Calculate date from input data
    let getStartDate = new Date(inputStartDate);
    let getEndDate = new Date(inputEndDate);
    let getTodayDate = new Date();

    let departDateValue = getStartDate.getDate() - getTodayDate.getDate(); // 6
    let returnDateValue = getEndDate.getDate() - getTodayDate.getDate(); // 9
    let duration = getEndDate.getDate() - getStartDate.getDate() + 1; // 4

    // Debug
    console.log({getStartDate, getEndDate, getTodayDate});
    console.log({departDateValue, returnDateValue, duration});

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
            inputLat = res.geonames[0].lat;
            inputLng = res.geonames[0].lng;
            country = res.geonames[0].countryName;
            Client.updateUI(inputPlace, country, inputStartDate, inputEndDate)

            // Debug
            console.log(res);
            console.log({inputLat, inputLng, country});
            console.log({inputPlace, country, inputStartDate, inputEndDate});
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
                const data = res;
                city = res.city_name;
                Client.updateWeather(data, duration, departDateValue)

                // Debug
                console.log(res);
                console.log(city);
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
    } else {
        // Run alertError function when error occured
        const errorMsg = document.querySelector('#error-msg');
        errorMsg.style.display = "block";
    };
};