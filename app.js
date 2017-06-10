longestPalindrome=function(string){

  var result = [];
  //if string is length 1, return it
  if(string.length === 1) {
    return string
  }
  //make input lower case
  var str = string.toLowerCase()

  //create reversed string variable
  var rev = str.split("").reverse().join("")

  //for loop the length of str
  //compare last of str to beginning of rev
  //compare last two of str to beginning two of rev, etc until the last of rev is compared to the beginning of str
  //if a match is found, and the result array is empty, save
  //if result array is not empty,

  function checkLetters(check) {
    for (var j = 0; j < check; j++) {
      if(str[str.length - 1] === rev[check]) {

      }
    }
  }

  for (var i = 0; i < str.length; i++) {
    var check = 1;
    if(i >= str.length / 2) {
      check--;
    } else {
      check++;
    }
    checkLetters(check)
  }
}

longestPalindrome("I like racecars that go fast")

// tsaf og taht sracecar ekil i
// i like racecars that go fast

1
