var lengthOfLastWord = function (s) {
  let arr = s
    .replace(/[]{2,}/g, " ")
    .trim()
    .split(" ")
    .slice(-1)[0]
    .length;
  console.log(arr);
};

lengthOfLastWord("Mangesh Balkawade  ");
