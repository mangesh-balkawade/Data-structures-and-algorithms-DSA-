/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let len = temperatures.length;
  let currentIndex = len - 1;
  let lastTemp = temperatures[currentIndex];
  stack.push([lastTemp, currentIndex]);
  temperatures[currentIndex] = 0;
  for (let index = currentIndex - 1; index >= 0; index--) {
    let curentTemp = temperatures[index];
    while (stack.length) {
      if (stack[stack.length - 1][0] > curentTemp) {
        temperatures[index] = stack[stack.length - 1][1] - index;
        break;
      } else {
        stack.pop();
      }
    }
    if (!stack.length) {
      temperatures[index] = 0;
    }
    stack.push([curentTemp, index]);
  }
  return temperatures;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let len = temperatures.length;
  let arr = Array(len).fill(0);
  arr[len - 1] = 0;
  let stack = [len - 1];
  console.log({ stack });

  for (let index = len - 2; index >= 0; index--) {
    while (stack.length) {
      if (temperatures[stack[stack.length - 1]] > temperatures[index]) {
        arr[index] = stack[stack.length - 1] - index;
        break;
      } else {
        stack.pop();
      }
    }
    if (!stack.length) {
      arr[index] = 0;
    }
    stack.push(index);
  }
  return arr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
