$(document).ready(function() {
  // Function to fetch and display the translation
  function fetchTranslation() {
    // Get the language code entered by the user
    var languageCode = $("#language_code").val();
    
    // Fetch translation data from the API
    $.get("https://www.fourtonfish.com/hellosalut/hello/" + languageCode, function(data) {
      // Update the content of the <div> tag with the translation
      $("#hello").text(data.hello);
    });
  }
  
  // Fetch translation when the "Translate" button is clicked
  $("#btn_translate").click(fetchTranslation);
  
  // Fetch translation when Enter key is pressed in the language code input field
  $("#language_code").keypress(function(event) {
    // Check if Enter key is pressed (keyCode 13)
    if (event.which == 13) {
      // Prevent the default action of form submission
      event.preventDefault();
      // Fetch the translation
      fetchTranslation();
    }
  });
});
