export function handleSubmit(event) {
    event.preventDefault();

    // Defined Global Variables
    let inputLat;
    let inputLng;
    let country;
    let city;
    let countryCode;
    let hits;

    let inputPlace = document.getElementById('place').value;
    let inputStartDate = document.getElementById('start-date').value;
    let inputEndDate = document.getElementById('end-date').value;

    // Calculate date from input data
    let getStartDate = new Date(inputStartDate);
    let getEndDate = new Date(inputEndDate);
    let getTodayDate = new Date();

    let departDateValue = getStartDate.getDate() - getTodayDate.getDate();
    let returnDateValue = getEndDate.getDate() - getTodayDate.getDate();
    let duration = getEndDate.getDate() - getStartDate.getDate() + 1;

    if (((0 <= departDateValue < 16) && (0 <= returnDateValue < 16)) === false) {
        departDateValue = 0;
        returnDateValue = 6;
    };

    // Debug
    console.log({getStartDate, getEndDate, getTodayDate});
    console.log({departDateValue, returnDateValue, duration});

    Client.handleLoader();

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
                countryCode = res.country_code;
                Client.updateWeather(data, duration, departDateValue, departDateValue, returnDateValue);

                // Debug
                console.log(res);
                console.log({city, countryCode});
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
                            Client.updateImage(res);
                        })
                    } else {
                            console.log(`::: Fetching City Image Success :::`);
                            console.log(res);
                            Client.updateImage(res);
                    }
                })

                // RestCountry Fetching
                .then(function() {
                    console.log(`::: RestCountry Fetching :::`);
                    fetch('http://localhost:8888/countryInfo', {
                        method: 'POST',
                        credentials: 'same-origin',           
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ countryCode })
                    })
                    .then(res => res.json())
                    .then(function(res) {
                        console.log(`::: Fetching Success :::`);
                        const data = res;
                        Client.updateUI(inputPlace, country, inputStartDate, inputEndDate, duration, data);

                        // Debug
                        console.log(res);
                    })

                    // Clear input
                    .then(function() {
                        document.getElementById('place').value = '';
                        document.getElementById('start-date').value = '';
                        document.getElementById('end-date').value = '';
                    });
                });
            });
        });
    } else {
        // Run alertError function when error occured
        const errorMsg = document.querySelector('#error-msg');
        errorMsg.style.display = "block";
    };
};