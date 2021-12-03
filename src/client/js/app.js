// import SCSS
import '../styles/footer.scss';
import '../styles/form.scss';
import '../styles/grid.scss';
import '../styles/base.scss';
import '../styles/overview.scss';

// import JS
import {handleSubmit} from './handleSubmit';
import {alertError} from './alertError';
import {updateImage} from './updateImage';
import {handleDate} from './handleDate';
import {updateUI} from './updateUI';
import {updateWeather} from './updateWeather';

// import html
import html from "../html/index.html";

// import media
import github from '../media/github.png';
import instagram from '../media/instagram.png';
import linkedin from '../media/linkedin.png';

// const githubIcon = new Image();
// const instagramIcon = new Image();
// const linkedinIcon = new Image();

// githubIcon.src = github;
// instagramIcon.src = instagram;
// linkedinIcon.src = linkedin;

// import github from '../media/github.png';
// var img = new Image();
// img.src = github;

// global export
export {
    handleSubmit,
    alertError,
    updateImage,
    handleDate,
    updateUI,
    updateWeather,
}

// Run handleDate function when page loaded
window.addEventListener("load", (event) => {
    Client.handleDate()
});