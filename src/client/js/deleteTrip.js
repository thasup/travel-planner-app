export const deleteTrip = (event) => {
    event.preventDefault();
    
    const delPlace = document.querySelector('#place');
    const delStartDate = document.querySelector('#start-date');
    const delEndDate = document.querySelector('#end-date');

    const delImage = document.querySelector('.background-img');
    const delOverview = document.querySelector('#overview-container');
    const delSummary = document.querySelector('.forecast-summary-list');
    const delDetail = document.querySelector('.forecast-detail-list');

    delPlace.value = '';
    delStartDate.value = '';
    delEndDate.value = '';

    delImage.innnerHTML = '<div class="images" id="img-0"></div>';
    delOverview.innnerHTML = '';
    delSummary.innnerHTML = '';
    delDetail.innnerHTML = '';
};