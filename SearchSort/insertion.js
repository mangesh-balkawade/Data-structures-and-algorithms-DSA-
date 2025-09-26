function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertion([3, 2, 5, 1, 8, 4, 3]));
// 2 3 5 1 8 4
