const links = document.querySelectorAll(".header ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

$(document).ready(function() {
  $(".works__box__item__desc").hide();
  $(".works__box__item__btn").show();
  $('.works__box__item__btn').click(function() {
      $(this).parent().find(".works__box__item__desc").slideToggle();
  });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.setAttribute('class', 'theme--dark');
        localStorage.setItem('class', 'theme--dark'); //add this
    }
    else {
        document.body.setAttribute('class', 'theme');
        localStorage.setItem('class', 'theme'); //add this
    }    
}
const currentTheme = localStorage.getItem('class') ? localStorage.getItem('class') : null;

if (currentTheme) {
    document.body.setAttribute('class', currentTheme);

    if (currentTheme === 'theme--dark') {
        toggleSwitch.checked = true;
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);