// my solution
function palindrome(str) {
  var newStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  var strArr = newStr.split('').reverse();
  
  if (newStr === strArr.join('')) return true;
  return false;
}

palindrome("eye");