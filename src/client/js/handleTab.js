export function handleTab(evt, tabName) {
  // Declare all variables
  let i;
  const tabcontent = document.getElementsByClassName('container');
  const tablinks = document.getElementsByClassName('tabs');

  // Get all elements with class="tabcontent" and hide them
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('none');
  }

  // Get all elements with class="tablinks" and remove the class "--active-tab"
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" --active-tab", "");
  }

  // Show the current tab, and add an "--active-tab" class to the button that opened the tab
  document.getElementById(tabName).classList.remove('none');
  document.getElementById(tabName).style.display = "block";
  
  evt.currentTarget.className += " --active-tab";
};