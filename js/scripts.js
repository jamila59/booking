$(document).ready(function() {
$("form#Name").submit(function(event) {

 var response = $("#name");
  $("#output").text(response);
  alert("Booking Successful");
event.preventDefult();
  });
});
