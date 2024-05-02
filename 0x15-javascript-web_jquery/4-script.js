$(document).ready(function() {
  // When the DIV#toggle_header is clicked
  $("#toggle_header").click(function() {
    // Find the <header> element
    var headerElement = $("header");

    // Check if the header has the class "red"
    if (headerElement.hasClass("red")) {
      // If it has the class "red", remove it and add the class "green"
      headerElement.removeClass("red").addClass("green");
    } else {
      // If it doesn't have the class "red", add the class "red" and remove the class "green"
      headerElement.removeClass("green").addClass("red");
    }
  });
});
