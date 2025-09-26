/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let i = 0;
  let map = new Map();

  while (i < s.length) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  return xor == 0;
};
