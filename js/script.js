var feedback-form = document.querySelector(".feedback-form");
var feedback-open = document.querySelector(".btn-feedback");
var feedback-close = feedback-form.querySelector(".btn-close");

feedback-open.addEventListener("clic", function(event) {
  event = preventDefault();
  feedback-form.classList.add("feedback-form-show");
} )
