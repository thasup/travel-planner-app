export function handleSubmit(event) {
    event.preventDefault();

    // check what url was put into the form field
    let inputURL = document.getElementById('name').value;
    console.log(inputURL);

    // POST request to server side
    if(Client.checkForURL(inputURL) === true) {

        console.log("::: Form Submitted :::");
        fetch('http://localhost:8000/data', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({url: inputURL})
        })
        .then(res => res.json())
        .then(function(res) {
            Client.updateUI(res)
            console.log(res);
            console.log("::: Fetching Success :::");
        });
    } else (
        // handle error
        alert("Invalid URL")
    );
};