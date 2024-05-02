$(document).ready(function() {
  // When the DIV#update_header is clicked
  $("#update_header").click(function() {
    // Find the <header> element
    var headerElement = $("header");
    
    // Update the text of the <header> element
    headerElement.text("New Header!!!");
  });
});
