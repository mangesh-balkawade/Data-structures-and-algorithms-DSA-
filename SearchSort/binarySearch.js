function binarySearch(n, arr) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == n) {
      return mid;
    }
    if (arr[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// binarySearch();

console.log(9 % 7);
