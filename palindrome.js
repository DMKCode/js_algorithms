// my solution
function palindrome(str) {
  var newStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  var strArr = newStr.split('').reverse();
  
  if (newStr === strArr.join('')) return true;
  return false;
}

palindrome("eye");


// Credit freeCodeCamp
// basic solution
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

// Credit freeCodeCamp
// intermediate solution
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

// Credit freeCodeCamp
// advanced solution (most performant)

//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++
    back--
  }
  
  //if the whole string has been compared without returning false, it's a palindrome!
  return true

}
