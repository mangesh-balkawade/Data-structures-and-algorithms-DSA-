var MyQueue = function () {
  // as queue
  this.stack1 = []; // reverse order
  this.stack2 = []; // proper order
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let len = this.stack1.length;
  if (this.stack2.length == 0) {
    for (let i = 0; i < len; i++) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let len = this.stack1.length;
  if (this.stack2.length == 0) {
    for (let i = 0; i < len; i++) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
