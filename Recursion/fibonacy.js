/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) {
    return 0;
  }
  --n;
  return fib(n - 2) + fib(n - 1);
};

// let n = 2;
// let no1 = 0,
//   no2 = 1;
// while (n != 0) {
//   let temp = no1;
//   no1 = no2;
//   no2 = temp + no2;
//   n--;
// }

// console.log(no2);
