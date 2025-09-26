/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let map1 = new Map();
  let map2 = new Map();

  // foo bar
  let i = 0;
  while (i < s.length) {
    if (
      (map1.get(s[i]) && map1.get(s[i]) != t[i]) ||
      (map2.get(t[i]) && map2.get(t[i]) != s[i])
    ) {
      return false;
    }
    map1.set(s[i], t[i]);
    map2.set(t[i], s[i]);
    i++;
  }

  return true;
};

console.log(isIsomorphic("paper", "title"));
