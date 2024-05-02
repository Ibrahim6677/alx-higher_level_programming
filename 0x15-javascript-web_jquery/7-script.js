$(document).ready(function() {
  // Fetch character data from the API
  $.get("https://swapi-api.alx-tools.com/api/people/5/?format=json", function(data) {
    // Extract the character name from the fetched data
    var characterName = data.name;
    
    // Update the content of the <div> tag with the character name
    $("#character").text(characterName);
  });
});
