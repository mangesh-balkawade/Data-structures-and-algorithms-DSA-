var isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  }
  if (n <= 0) {
    return false;
  }
  n = Math.abs(n / 2);
  console.log(n);

  return isPowerOfTwo(n);
};

console.log(isPowerOfTwo(3));
