$(document).ready(function() {
  // When the DIV#red_header is clicked
  $("DIV#red_header").click(function() {
    // Find the <header> element using its tag name
    var headerElement = $("header");
    
    // Update the text color to red
    headerElement.css("color", "#FF0000");
  });
});