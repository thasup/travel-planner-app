// import SCSS
import '../styles/footer.scss';
import '../styles/form.scss';
import '../styles/grid.scss';
import '../styles/base.scss';
import '../styles/container.scss';
import '../styles/loader.scss';

// import JS
import {handleSubmit} from './handleSubmit';
import {handleTab} from './handleTab';
import {updateImage} from './updateImage';
import {handleDate} from './handleDate';
import {updateUI} from './updateUI';
import {updateWeather} from './updateWeather';
import {handleLoader} from './handleLoader';

// import html
import html from "../html/index.html";

// import media
import github from '../media/github.png';
import instagram from '../media/instagram.png';
import linkedin from '../media/linkedin.png';
import facebook from '../media/facebook.png';
import compass from '../media/compass.png';

// global export
export {
    handleSubmit,
    handleTab,
    updateImage,
    handleDate,
    updateUI,
    updateWeather,
    handleLoader
}

// Run handleDate function when page loaded
window.addEventListener("load", (event) => {
    Client.handleDate()
});

// Automatic change background image with setTimeout loop
window.addEventListener("submit", (event) => {
    event.preventDefault();

    // Define time length for wait
    const wait = 6000;

    const toggleActive = (element, index, maxIndex) => {
        setTimeout(() => {
            element.classList.add('--active-image');
            setTimeout(() => {
                element.classList.remove('--active-image');
                if (index === maxIndex) {
                    runLoop();
                };
            }, wait);
        }, wait * index);  
    };

    const runLoop = () => {
        const allImage = document.getElementsByClassName('images');
   
        for (let index = 0; index < allImage.length; index++) {
            const element = allImage[index];
            toggleActive(element, index, allImage.length - 1);
        };
    };

    const showDetail = () => {
        const detail = document.getElementsByClassName('detail')[0];
        detail.classList.remove('none');
    };

    // Run function
    runLoop();
    showDetail();
});