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

    const path = 'https://thasup-travel-app.herokuapp.com' || 'http://localhost/8888';

    if (((0 <= departDateValue < 16) && (0 <= returnDateValue < 16)) === false) {
        departDateValue = 0;
        returnDateValue = 6;
    };

    // Debug
    console.log({ getStartDate, getEndDate, getTodayDate });
    console.log({ departDateValue, returnDateValue, duration });

    Client.handleLoader();


    // postData('https://example.com/answer', { answer: 42 })
    //     .then(res => {
    //         console.log(data); // JSON data parsed by `data.json()` call
    //     });

    // POST request to server side
    if (inputPlace !== '') {


        // GeoName Fetching
        console.log(`::: GeoName Fetching :::`);
        Client.postData(`${path}/place`, { inputPlace })
            .then(res => {
                console.log(`::: Fetching Success :::`);
                inputLat = res.geonames[0].lat;
                inputLng = res.geonames[0].lng;
                country = res.geonames[0].countryName;

                // Debug
                console.log(res);
                console.log({ inputLat, inputLng, country });
                console.log({ inputPlace, country, inputStartDate, inputEndDate });
            })

            // WeatherBit Fetching
            .then(function () {
                console.log(`::: WeatherBit Fetching :::`);
                Client.postData(`${path}/forecast`, { inputLat, inputLng })
                    .then(res => {
                        console.log(`::: Fetching Success :::`);
                        city = res.city_name;
                        countryCode = res.country_code;
                        Client.updateWeather(res, duration, departDateValue, departDateValue, returnDateValue);

                        // Debug
                        console.log(res);
                        console.log({ city, countryCode });
                    })

                    // PixaBay Fetching
                    .then(function () {
                        console.log(`::: PixaBay City Image Fetching :::`);
                        Client.postData(`${path}/image`, { city })
                            .then(res => {
                                console.log(`::: Initial Fetching Success :::`);
                                hits = res.totalHits;

                                // If images of input place does not exist, fetch country images instead.
                                if (hits === 0) {
                                    console.log(`::: Fail to Fetch City Image :::`);
                                    Client.postData(`${path}/countryImage`, { country })
                                        .then(res => {
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
                            .then(function () {
                                console.log(`::: RestCountry Fetching :::`);
                                Client.postData(`${path}/countryInfo`, { countryCode })
                                    .then(res => {
                                        console.log(`::: Fetching Success :::`);
                                        Client.updateUI(inputPlace, country, inputStartDate, inputEndDate, duration, res);

                                        // Debug
                                        console.log(res);
                                    })

                                    // Clear input
                                    .then(function () {
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