/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let str of tokens) {
    if (!["*", "/", "+", "-"].includes(str)) {
      stack.push(str);
    } else {
      let firstNo = Number(stack.pop());
      let secNo = Number(stack.pop());
      let ans = parseInt(eval(`${secNo}${str}${firstNo}`));
      stack.push(ans);
    }
    console.log({ stack });
  }

  return parseInt(stack.pop());
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let str of tokens) {
    if (!["*", "/", "+", "-"].includes(str)) {
      stack.push(Number(str));
    } else {
      let firstNo = stack.pop(); // right operand
      let secNo = stack.pop(); // left operand
      let ans;

      switch (str) {
        case "+":
          ans = secNo + firstNo;
          break;
        case "-":
          ans = secNo - firstNo;
          break;
        case "*":
          ans = secNo * firstNo;
          break;
        case "/":
          // Truncate toward 0, same as problem requirement
          ans = Math.trunc(secNo / firstNo);
          break;
      }
      stack.push(ans);
    }
  }

  return stack.pop();
};
