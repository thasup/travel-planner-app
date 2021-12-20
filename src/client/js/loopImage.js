export function loopImage() {
    // Define time length for waiting new background image to change
    const wait = 6000;

    const images = document.getElementsByClassName('images');
    
    const toggleActive = (element, index, maxIndex) => {
        setTimeout(() => {
            element.style.opacity = 0.75;
            console.log(`timeout-1 ${index}`);
            setTimeout(() => {
                element.style.opacity = 0;
                console.log(`timeout-2 ${index}`);
                if (index === maxIndex) {
                    runLoop();
                };
            }, wait);
        }, wait * index);  
    };

    const runLoop = () => {
        for (let index = 0; index < images.length; index++) {
            const element = document.getElementById(`img-${index}`);
            toggleActive(element, index, images.length - 1);
        };
    };

    runLoop();
};