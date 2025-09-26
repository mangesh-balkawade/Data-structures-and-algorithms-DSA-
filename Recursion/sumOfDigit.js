function sumOfDig(no) {
  if (no <= 0) {
    return 0;
  }
  return (no % 10) + sumOfDig(parseInt(no / 10));
}

console.log(sumOfDig(1234));
