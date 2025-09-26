function countOccurrences(arr, no) {
  if (arr.length == 0) {
    return 0;
  }
  return (arr[0] == no ? 1 : 0) + countOccurrences(arr.slice(1), no);
}

console.log(countOccurrences([1, 2, 1, 1, 3, 1], 1));
