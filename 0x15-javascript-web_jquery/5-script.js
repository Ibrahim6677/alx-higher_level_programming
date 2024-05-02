$(document).ready(function() {
  // When the DIV#add_item is clicked
  $("#add_item").click(function() {
    // Create a new <li> element
    var newItem = $("<li>").text("Item");
    
    // Add the new <li> element to the UL.my_list
    $("UL.my_list").append(newItem);
  });
});
