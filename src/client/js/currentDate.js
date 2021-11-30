export function currentDate() {
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
    let today = `${localDate.getDate()} ${year[localDate.getMonth()]} ${localDate.getFullYear()}`;
    return today;
};