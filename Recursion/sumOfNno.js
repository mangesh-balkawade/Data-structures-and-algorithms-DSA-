let n = 5;

function sumOfNNo(currentNo, sum) {
  if (currentNo > n) {
    return sum;
  }
  sum += currentNo;
  ++currentNo;
  return sumOfNNo(currentNo, sum);
}

function sumOfNNoV2(currentNo, sum) {
  if (currentNo == 0) {
    return sum;
  }
  sum += currentNo;
  console.log({ sum });
  --currentNo;
  return sumOfNNo(currentNo, sum);
}

console.log(sumOfNNo(n, 0));
