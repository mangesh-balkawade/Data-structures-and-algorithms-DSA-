function binarySearch(n, arr) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == n) {
      return true;
    }
    if (arr[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

binarySearch();
