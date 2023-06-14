/* eslint-disable no-unused-vars */
// import SCSS
import '../styles/footer.scss';
import '../styles/form.scss';
import '../styles/grid.scss';
import '../styles/base.scss';
import '../styles/container.scss';
import '../styles/loader.scss';

// import JS
import { handleSubmit } from './handleSubmit';
import { handleTab } from './handleTab';
import { updateImage } from './updateImage';
import { handleDate } from './handleDate';
import { updateUI } from './updateUI';
import { updateWeather } from './updateWeather';
import { handleLoader } from './handleLoader';
import { loopImage } from './loopImage';
import { postData } from './postData';
import { deleteTrip } from './deleteTrip';

// import html
import html from '../html/index.html';

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
  handleLoader,
  loopImage,
  postData,
  deleteTrip
}

// Run handleDate function when page loaded
window.addEventListener('load', (event) => {
  Client.handleDate()
});

// Automatic change background image with setTimeout loop
window.addEventListener('submit', (event) => {
  event.preventDefault();

  Client.loopImage();
});
