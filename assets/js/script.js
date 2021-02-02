$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 500,
        },
        800
        // function () {
        //   // Add hash (#) to URL when done scrolling (default click behavior)
        //   window.location.hash = hash;
        // }
      );
    } // End if
  });
});

const noJobBtn = document.querySelector("#no-job");
const gotJobBtn = document.querySelector("#got-dream-job");
const noJobContent = document.querySelector(".got-no-job-content");
const gotJobContent = document.querySelector(".after-got-job");

noJobBtn.addEventListener("click", () => {
  noJobContent.style.display = "block";
  gotJobContent.style.display = "block";

  noJobContent.style.transisition = "0.3s";
  noJobContent.style.transform = "translateX(0)";
});

gotJobBtn.addEventListener("click", () => {
  noJobContent.style.display = "none";
  gotJobContent.style.display = "block";
});
