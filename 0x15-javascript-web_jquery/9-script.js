$(document).ready(function() {
  // Fetch translation data from the API
  $.get("https://hellosalut.stefanbohacek.dev/?lang=fr", function(data) {
    // Extract the translation of "hello"
    var helloTranslation = data.hello;
    
    // Update the content of the <div> tag with the translation
    $("#hello").text(helloTranslation);
  });
});
