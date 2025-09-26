let arr = [5, 4, 3, 2, 1];
function arrSum(n) {
  if (n == arr.length) {
    return 0;
  }
  return arr[n] + arrSum(++n);
}

function arrSumSplit(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + arrSumSplit(arr.slice(1));
}
console.log(arrSumSplit(arr));
