var body = document.querySelector("body");
window.onload = function () {
  body.classList.add("preloader_ready");
  setTimeout(function () {
    body.classList.remove("preloader_active");
    body.classList.remove("preloader_ready");
  }, 500);
};