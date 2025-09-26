// var MinStack = function () {
//   this.arr = [];
//   this.map = new Map();
//   this.curentIndex = 0;
//   this.min = Number.MAX_VALUE;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   this.arr.push(val);
//   if (this.min > val) {
//     this.map.set(this.arr.length, val);
//     this.min = val;
//   } else {
//     this.map.set(this.arr.length, this.min);
//   }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.arr.pop();
//   this.min = this.map.get(this.arr.length) || Number.MAX_VALUE;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   let top = this.arr.pop();
//   this.arr.push(top);
//   return top;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.map.get(this.arr.length);
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s.length == 0) {
    this.s.push([val, val]);
  } else {
    this.s.push([val, Math.min(val, this.s[this.s.length - 1][1])]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
