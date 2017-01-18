$(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();

    var arrayInts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var arrayVowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var input = $("#regular").val();
    var inputArray = input.split("");
    var clone = inputArray.slice();


    console.log(input);

    inputArray.forEach(function(stringIndex) {
      for(var intIndex = 0; intIndex < 10; intIndex++) {
        if(stringIndex === arrayInts[intIndex])
        {
          alert(input + " is incorect, only letters here bitch, please try again");
        }
      }
    })

    var stringIndexCounter = 0;

    inputArray.forEach(function(stringIndex) {
      for(var intIndex = 0; intIndex < arrayVowels.length; intIndex++) {
        if(stringIndex === arrayVowels[intIndex])
        {
          clone.splice(stringIndexCounter + 1, 0, "ay");
        }
      }
      stringIndexCounter++;
    })

    console.log(clone.join(""));
})

});
