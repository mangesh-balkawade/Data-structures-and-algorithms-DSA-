/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if ((s.length & 1) == 1) {
    return false;
  }

  let stack1 = [];

  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack1.push(s[i]);
    } else {
      let lastChar = stack1.pop();
      let mapValue = map[lastChar];
      if (mapValue != s[i]) {
        return false;
      }
    }
  }
  if (stack1.length == 0) {
    return true;
  }
  return false;
};

//2-------

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if ((s.length & 1) == 1) {
    return false;
  }

  let stack1 = [];

  for (let i = 0; i < s.length; i++) {
    if (["{", "(", "["].includes(s[i])) {
      stack1.push(s[i]);
    } else {
      let lastChar = stack1.pop();
      if (
        (s[i] == ")" && lastChar != "(") ||
        (s[i] == "}" && lastChar != "{") ||
        (s[i] == "]" && lastChar != "[")
      ) {
        return false;
      }
    }
  }
  if (stack1.length == 0) {
    return true;
  }
  return false;
};
