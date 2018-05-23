import "bootstrap";

import { autocomplete } from '../components/autocomplete';
autocomplete();


// todo : this should be in a different file

// When the user scrolls the page, execute myFunction

// Get the navbar
var stickyForm = document.getElementById("sticky-form");

// Get the offset position of the navbar
if (stickyForm) {
  var sticky = stickyForm.offsetTop;
  window.onscroll = function() {myFunction()};
}
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    stickyForm.classList.add("sticky")
  } else {
    stickyForm.classList.remove("sticky");
  }
}
