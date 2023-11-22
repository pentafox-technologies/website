// ES5 way
// exports.onClientEntry = () => {
// ES6 way
import "./src/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./src/styles/preloader.css";
// import "jquery/dist/jquery.min.js";
// import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
