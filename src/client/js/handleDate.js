export function handleDate() {

    // Create a new date instance dynamically with JS
    let localDate = new Date();
    const year = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'];
    let dd = localDate.getDate();
    let mm = year[localDate.getMonth()];
    let yy = localDate.getFullYear();
    let today = `${dd} ${mm} ${yy}`;

    // Prevent date input to be able to select previous date
    let DD = localDate.getDate();
    let MM = localDate.getMonth() + 1;

    if (DD < 10) {
        DD = `0${DD}`;
    };

    if (MM < 10) {
        MM = `0${MM}`;
    };

    let minDay = `${yy}-${MM}-${DD}`;

    console.log({today, minDay});

    document.getElementById("start-date").setAttribute("min", minDay);
    document.getElementById("end-date").setAttribute("min", minDay);

    // Calculate trip duration from input

    return today, minDay;
};