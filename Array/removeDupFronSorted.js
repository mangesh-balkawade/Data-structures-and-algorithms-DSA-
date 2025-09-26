var removeDuplicates = function (arr) {
  let sptr = 1;
  let uniqueElement = 1;
  for (let i = 0; i < arr.length; i++) {
    while (sptr < arr.length && arr[sptr] == arr[i]) {
      sptr++;
    }
    if (sptr != arr.length) {
      arr[i + 1] = arr[sptr];
      uniqueElement = i + 2;
    } else {
      break;
    }
  }
  return uniqueElement;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
