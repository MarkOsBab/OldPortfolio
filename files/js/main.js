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
(function(){
  emailjs.init("i5G8FFUfFZK0wW36F");
})();
$('#app').on('submit', function(event) {
event.preventDefault(); // prevent reload

var formData = new FormData(this);
formData.append('service_id', 'service_7s0c5ic');
formData.append('template_id', 'template_a77qy4l');
formData.append('user_id', 'i5G8FFUfFZK0wW36F');
function onSubmit(token) {
  document.getElementById("app").submit();
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function() {
    alert('Your mail is sent!');
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });
  }
});