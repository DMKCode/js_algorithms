// my solution
function reverseString(str) {
  var arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return str;
}

reverseString("hello");

// Credit freeCodeCamp
// concise solution
function reverseString(str) {
  return str.split('').reverse().join('');
}