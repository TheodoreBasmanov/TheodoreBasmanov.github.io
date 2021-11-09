document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < document.getElementsByClassName('header-nav-elements').length; i++){
    if (document.getElementsByClassName('header-nav-elements')[i]["href"] === document.URL){
      activeElement = document.getElementsByClassName('header-nav-elements')[i];
      activeElement.className = 'header-nav-elements header-nav-elements-current';
      activeElement.removeAttribute("href");
      break;
    }
  }
  });