var factorials = function(integer) {
  if (integer < 0){
    return "Not a positive whole number"
  }
  if (integer.toString().indexOf(".") > -1) {
    return "Not a positive whole number"
  }
  if (integer === 0) {
    return 1;
  }
  return (integer * factorials(integer - 1));
};

$(document).ready(function() {
  $("form#factorial-number").submit(function(event) {
    var factNumber = $("input#factNumber").val();
    var result = factorials(factNumber);

    $(".result").text(result);
    
    $("#result").show();
    event.preventDefault();
  });
});