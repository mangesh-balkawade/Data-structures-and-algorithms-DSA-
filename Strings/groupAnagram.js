// // /**
// //  * @param {string[]} strs
// //  * @return {string[][]}
// //  */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    let charMap = new Map();
    for (let i = 0; i < str.length; i++) {
      charMap.set(str[i], (charMap.get(str[i]) || 0) + 1);
    }
    let unqStr = "";

    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      let char = String.fromCharCode(i);
      unqStr += char + (charMap.get(char) || 0);
    }

    let arr = map.get(unqStr) || [];
    console.log({ arr, charMap, unqStr });

    map.set(unqStr, [...arr, str]);
  }
  return [...map.values()];
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let str of strs) {
    let arr = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      console.log(index, arr[index]);
      arr[index] = arr[index] + 1;
    }
    let hashStr = "";

    for (let i of arr) {
      hashStr += "#" + i;
    }

    if (map[hashStr]) {
      map[hashStr] = [...map[hashStr], str];
    } else {
      map[hashStr] = [str];
    }
  }

  return Object.values(map);
};

console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));
// console.log(groupAnagrams(["d"]));
