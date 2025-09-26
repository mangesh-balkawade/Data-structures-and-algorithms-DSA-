function stringRev(str) {
  if (str.length == 1) {
    return str;
  }
  return stringRev(str.substring(1)) + str.substring(0, 1);
}

let str = "mangesh";
let revstr = stringRev(str);
console.log({ revstr });

if (str == revstr) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
