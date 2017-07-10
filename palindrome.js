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