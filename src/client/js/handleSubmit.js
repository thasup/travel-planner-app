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

        console.log("::: Form Submitted :::");
        const duo = {inputPlace, inputUsername}
        fetch('http://localhost:8888/place', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(duo)
        })
        .then(res => res.json())
        .then(function(res) {
            // Client.updateUI(res)
            console.log(res);
            console.log("::: Fetching Success :::");
        });
    } else (
        // handle error
        alert("Invalid URL")
    );
};