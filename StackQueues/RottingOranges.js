//https://leetcode.com/problems/rotting-oranges/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// By Using Double While Loop
var orangesRotting = function (grid) {
  let queue = [];
  let col = grid[0].length;
  let row = grid.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      }
    }
  }

  let len = queue.length;
  let min = 0;
  while (len) {
    let flag = false;
    while (len) {
      let rottenEdge = queue.shift();

      let i = rottenEdge[0];
      let j = rottenEdge[1];

      let edges = [
        [i + 1, j],
        [i - 1, j],
        [i, j - 1],
        [i, j + 1],
      ];

      //console.log({ rottenEdge, i, j, edges });

      for (let item of edges) {
        let [i, j] = item;
        // console.log({ i, j });
        if (i < 0 || j < 0 || i >= row || j >= col) {
          continue;
        }
        let gridValue = grid[i][j];

        if (gridValue && gridValue == 1) {
          grid[i][j] = 2;
          queue.push([i, j]);
          flag = true;
        }
      }
      len--;
    }

    len = queue.length;

    if (flag) {
      min++;
    } else {
      break;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }
  return min;
};

// By Using Levels
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let col = grid[0].length;
  let row = grid.length;
  let maxLevel = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    let rottenElem = queue.shift();
    let [i, j, level] = rottenElem;

    let edges = [
      [i + 1, j],
      [i - 1, j],
      [i, j - 1],
      [i, j + 1],
    ];

    for (let item of edges) {
      let [i, j] = item;

      if (i < 0 || j < 0 || i >= row || j >= col) {
        continue;
      }

      let gridValue = grid[i][j];

      if (gridValue && gridValue == 1) {
        grid[i][j] = 2;
        queue.push([i, j, level + 1]);
        maxLevel = level + 1;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return maxLevel;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
