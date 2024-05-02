$(document).ready(function() {
  // Fetch movie data from the API
  $.get("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
    // Loop through each movie in the fetched data
    $.each(data.results, function(index, movie) {
      // Extract the movie title
      var title = movie.title;
      
      // Create a new <li> element with the movie title
      var listItem = $("<li>").text(title);
      
      // Append the new <li> element to the <ul> tag with the ID "list_movies"
      $("#list_movies").append(listItem);
    });
  });
});
