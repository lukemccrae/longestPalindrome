longestPalindrome=function(s){
  var longest = 0;
  var length = s.length;

//starting at each letter in the string...
  for(var i=0; i < length; i++){

    //compare the substring from s[i] forwards, to see...
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);

      var l = str.length

      //if it is a palindrome
      //if it is, assign longest with the length of the palindrome
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}

console.log(longestPalindrome('ccaba'));
