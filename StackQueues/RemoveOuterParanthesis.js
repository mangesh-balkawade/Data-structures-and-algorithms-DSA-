// https://leetcode.com/problems/remove-outermost-parentheses/description/

// /**
//  * @param {string} s
//  * @return {string}
//  */
var removeOuterParentheses = function (s) {
  let ret = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (cnt == 0) {
      cnt++;
      continue;
    }
    if (s[i] == "(") {
      ret += "(";
      cnt++;
    } else {
      cnt--;
      if (cnt == 0) {
        continue;
      } else {
        ret += ")";
      }
    }
  }
  return ret;
};

// /**
//  * @param {string} s
//  * @return {string}
//  */
var removeOuterParentheses = function (s) {
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(["(", cnt]);
      cnt++;
    } else {
      cnt--;
      stack.push([")", cnt]);
    }
  }

  let ret = "";
  while (stack.length) {
    let item = stack.pop();
    if (item[1] != 0) {
      ret = item[0] + ret;
    }
  }
  return ret;
};

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
      if (stack.length != 1) {
        ret += "(";
      }
    } else {
      if (stack.length != 1) {
        ret += ")";
      }
      stack.pop();
    }
  }

  return ret;
};

var removeOuterParentheses = function (s) {
  let ret = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      cnt++;
      if (cnt != 1) {
        ret += "(";
      }
    } else {
      if (cnt != 1) {
        ret += ")";
      }
      cnt--;
    }
  }
  return ret;
};
