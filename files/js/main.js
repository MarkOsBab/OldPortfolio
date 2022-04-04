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