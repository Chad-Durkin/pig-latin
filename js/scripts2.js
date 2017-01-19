

var vowelCheck = function(singleWord) {
  if (singleWord.charAt(0,1) === "a") {
    output = singleWord + "ay";
  }
};



var arraySingle = [];
var arrayMultiple = [];
var wordArray = [];
var output;

var revampedArray = [];
var wordArrayLength;
var multiWordOutput;

$(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    var input = $("#regular").val();

    arrayMultiple = input.split(" ");
    if(arrayMultiple.length > 1) {
    wordArray = input.split(" ");
  } else {
}

  wordArrayLength = wordArray.length;


  for (var index = 0; index < wordArrayLength; index++) {
    var change = wordArray[index].split("");
    change = change.join("");
    if (change.charAt(0,1) === "a"){
      revampedArray[index] = change + "ay";
      alert(revampedArray[index]);
    } else {
      revampedArray[index] = change;
    }


  }


  vowelCheck(input);

    $("#result").text(output);
})

});
