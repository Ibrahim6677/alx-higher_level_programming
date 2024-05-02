$(document).ready(function() {
  $("#btn_translate").click(function() {
    // Get the language code entered by the user
    var languageCode = $("#language_code").val();
    
    // Fetch translation data from the API
    $.get("https://www.fourtonfish.com/hellosalut/hello/" + languageCode, function(data) {
      // Update the content of the <div> tag with the translation
      $("#hello").text(data.hello);
    });
  });
});
