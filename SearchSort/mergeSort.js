// function mergeSort(arr) {
//   if (arr.length == 1) {
//     return arr;
//   }
//   let mid = parseInt(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// function merge(arr1, arr2) {
//   let l = 0;
//   let r = 0;
//   let merge = [];

//   while (l < arr1.length && r < arr2.length) {
//     if (arr1[l] < arr2[r]) {
//       merge.push(arr1[l]);
//       l++;
//     } else {
//       merge.push(arr2[r]);
//       r++;
//     }
//   }
//   while (l < arr1.length) {
//     merge.push(arr1[l]);
//     l++;
//   }
//   while (r < arr2.length) {
//     merge.push(arr2[r]);
//     r++;
//   }

//   console.log({ arr1, arr2, merge });

//   return merge;
// }

/**
 *
 * @param {Number[]} arr
 */
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let mid = parseInt(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/**
 *
 * @param {Number[]} left
 * @param {Number[]} right
 */
function merge(left, right) {
  let ret = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ret.push(left[i]);
      i++;
    } else {
      ret.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    ret.push(left[i]);
    i++;
  }
  while (j < right.length) {
    ret.push(right[j]);
    j++;
  }
  return ret;
}

console.log(mergeSort([10, 4, 2, 5, 8, 3, 7, 1, 9, 11]));
