
var overlay = document.querySelector(".overlay");
var feedbackModal = document.querySelector(".feedback-form");
var feedbackOpen = document.querySelector(".btn-feedback");
var feedbackForm = feedbackModal.querySelector(".feedback-form form");
var feedbackClose = feedbackModal.querySelector(".btn-feedback-close");
var feedbackName = feedbackForm.querySelector(".feedback-name");
var feedbackEmail = feedbackForm.querySelector(".feedback-email");
var feedbackText = feedbackForm.querySelector(".feedback-text");
var storageName = localStorage.getItem("feedbackName");
var storageEmail = localStorage.getItem("feedbackEmail");

feedbackOpen.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackModal.classList.add("feedback-form-show");
  overlay.classList.add("overlay-show");
  feedbackName.focus();

  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackText.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackForm.addEventListener("submit", function(event) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    event.preventDefault();
    feedbackModal.classList.remove("feedback-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("feedback-error");
    feedbackName.focus();
  } else {
    localStorage.setItem("feedbackName", feedbackName.value);
    localStorage.setItem("feedbackEmail", feedbackEmail.value);
  }
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackModal.classList.remove("feedback-form-show");
  feedbackModal.classList.remove("feedback-error")
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackModal.classList.contains("feedback-form-show")) {
      feedbackModal.classList.remove("feedback-form-show");
      feedbackModal.classList.remove("feedback-error")
      overlay.classList.remove("overlay-show");
    }
  }
});
