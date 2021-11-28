export function handleSubmit(event) {
    event.preventDefault();

    // check what url was put into the form field
    let inputPlace = document.getElementById('place').value;
    let inputUsername = document.getElementById('username').value;
    let inputPlace2 = document.getElementById('place');
    console.log(inputPlace);
    console.log(inputPlace2);
    console.log({inputPlace});
    console.log({inputPlace2});

    // POST request to server side
    if((1+1==2) === true) {

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
            console.log(`::: Fetching Success ::: ${res}`);
            inputLat = res.geonames[0].lat;
            inputLng = res.geonames[0].lng;
            country = res.geonames[0].countryName;
            })
        .then(function() {               
            const forecastFetch = { inputLat, inputLng, country }
            console.log("::: WeatherBit Fetching :::");
            fetch('http://localhost:8888/forecast', {
                method: 'POST',
                credentials: 'same-origin',           
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(forecastFetch)
            })
            .then(res => res.json())
            .then(function(res) {
                console.log(`::: Fetching Success ::: ${res}`);
                const data = res.data[0];                     
                // updateWeather(data);
                // updateDetailsPanel();                    
                city = data.city_name;
                // updateCurrentDate();
                // clearInputs();
            })
        })
    } else (
        // handle error
        alert("Invalid URL")
    );
};