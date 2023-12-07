// Code by Rohan Pawar on November 15 2023
// Script for Search Function
var slickInitialized = true;
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Slick slider
  var slickSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more breakpoints and settings as needed
    ],
  };
  $(".g-4").slick(slickSettings);

  document
    .getElementById("searchForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get the user input from the search bar
      var searchInput = document.getElementById("search").value.toLowerCase();

      // Filter and display only relevant cards
      var cardItems = document.getElementsByClassName("card-item");
      var noResultsMessage = document.getElementById("noResultsMessage");

      var resultsFound = false;

      for (var i = 0; i < cardItems.length; i++) {
        var category = cardItems[i].getAttribute("data-category").toLowerCase();
        if (category.includes(searchInput)) {
          cardItems[i].style.display = "inline-block";
          resultsFound = true;
        } else {
          cardItems[i].style.display = "none";
        }
      }

      // Toggle the Slick slider visibility
      if (searchInput !== "" && slickInitialized) {
        // Destroy the Slick slider
        $(".g-4").slick("unslick");
        slickInitialized = false;
      } else if (searchInput == "" && !slickInitialized) {
        // Initialize the Slick slider
        $(".g-4").slick(slickSettings);
        slickInitialized = true;
      }

      // Display no results message
      if (!resultsFound) {
        noResultsMessage.style.display = "block";
        cardsTitle.style.display = "none";
      } else {
        noResultsMessage.style.display = "none";
        cardsTitle.style.display = "block";
      }
    });
});
