$(document).ready(function() {
  // Add item
  $("#add_item").click(function() {
    // Create a new <li> element
    var newItem = $("<li>").text("Item");
    
    // Add the new <li> element to the UL.my_list
    $("ul.my_list").append(newItem);
  });
  
  // Remove item
  $("#remove_item").click(function() {
    // Select the last <li> element in UL.my_list and remove it
    $("ul.my_list li:last-child").remove();
  });
  
  // Clear list
  $("#clear_list").click(function() {
    // Remove all <li> elements from UL.my_list
    $("ul.my_list").empty();
  });
});
