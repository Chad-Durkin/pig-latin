$(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();

    var arrayInts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var input = $("#regular").val();
    var inputArray = input.split("");

    console.log(input);

    inputArray.forEach(function(stringIndex) {

      for(var intIndex = 0; intIndex < 10; intIndex++) {
        if(stringIndex === arrayInts[intIndex])
        {
          alert(input + " is incorect, only letters here bitch, please try again");
        }
      }

    })

})

});
