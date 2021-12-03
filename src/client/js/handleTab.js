export function handleTab(e, tabName) {
    const tablinks = document.getElementsByClassName('tabs');
    const tabcontent = document.getElementsByClassName('container');
    
    const clickedTab = e.target;
    
    if(!clickedTab.classList.contains('--active-tab')){         
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove('--active-tab');
        };

        clickedTab.classList.add('--active-tab');

        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add('none');
        };

        document.getElementById(tabName).classList.remove('none');
        document.getElementById(tabName).style.display = "block";
    };
};