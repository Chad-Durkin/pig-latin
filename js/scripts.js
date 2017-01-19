var checkForInts = function(inputArray, arrayInts, input) {
    inputArray.forEach(function(stringIndex) {
      for(var intIndex = 0; intIndex < 10; intIndex++) {
        if(stringIndex === arrayInts[intIndex])
        {
          alert(input + " is incorect, only letters here bitch, please try again");
        }
      }
    })
};

var checkForSingleVowels = function(inputArray, arrayVowels) {
  for(var index = 0; index < inputArray.length; index++)
  {
    arrayVowels.forEach(function(vowel) {
      if(inputArray[index] === vowel)
      {
        if(inputArray.length === 1)
        {
          inputArray.splice(index + 1, 0, "ay");
          console.log("single vowel string");
          console.log(inputArray);
        }
        else if(inputArray[index + 1] === " ")
        {
          if(inputArray[index - 1] === " ")
          {
          inputArray.splice(index + 1, 0, "ay");
          console.log("targeted a single vowel in a string");
          console.log(inputArray);
          }
        }
        else if(index + 1 === inputArray.length)
        {
          inputArray.push("ay");
          console.log("theres no room in array, so make more");
          console.log(inputArray);
        }
        else if((inputArray[index - 1] === " ") && (inputArray[index + 1] === ".") || (inputArray[index + 1] === ",") || (inputArray[index + 1] === "!") || (inputArray[index + 1] === "?"))
        {
          inputArray.splice(index + 1, 0, "ay");
          console.log("theres a punctuation char next");
          console.log(inputArray);
          index++;
        }
      }
    })
  }
    return inputArray.slice();
};

var checkForVowelWords = function(inputArray, arrayVowels) {
  for(var index = 0; index < inputArray.length; index++)
  {
    if(index === 0)
    {
      arrayVowels.forEach(function(vowel) {
        if(inputArray[index] === vowel)
        {
          var nextIndex = index + 1;
          while((inputArray[nextIndex] != " ") && (nextIndex < inputArray.length))
          {
            if((inputArray[nextIndex] === ".") || (inputArray[nextIndex] === ",") || (inputArray[nextIndex] === "!") || (inputArray[nextIndex] === "?"))
            {
              break;
            }
            nextIndex++;
          }
          console.log("made it to the first end of the first word");
          inputArray.splice(nextIndex, 0, "ay")
          index = nextIndex;
        }
      })
    }
    else if(inputArray[index] === " ")
    {
      arrayVowels.forEach(function(vowel) {
        if((inputArray[index + 1] === vowel) && (inputArray[index + 2] != "."))
        {
          console.log("this isn't a single vowel");
          var nextIndex = index + 1;
          while((inputArray[nextIndex] != " ") && (nextIndex < inputArray.length))
          {
            if((inputArray[nextIndex] === ".") || (inputArray[nextIndex] === ",") || (inputArray[nextIndex] === "!") || (inputArray[nextIndex] === "?"))
            {
              break;
            }
            nextIndex++;
          }
          console.log("made it to the end of a normal word");
          inputArray.splice(nextIndex, 0, "ay")
          index = nextIndex;
        }
    })
    }
  }
  return inputArray.slice()
};



$(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();

    var arrayInts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var arrayVowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var arrayPeriods = [".", ",", "?", "!"];
    var input = $("#regular").val();
    var inputArray = input.split("");
    var clone = inputArray.slice();
    var finalString;




    finalString = checkForVowelWords(inputArray, arrayVowels);

    checkForInts(inputArray, arrayInts, input);

    finalString = checkForSingleVowels(finalString, arrayVowels);

    console.log(finalString);

    finalString = finalString.join("");

    $("#result").text(finalString);
})

});
