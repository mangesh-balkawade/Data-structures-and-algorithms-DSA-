function power(no, currentItr) {
  if (currentItr == 1) {
    return no;
  }
  return no * power(no, --currentItr);
}

console.log(power(3, 3));
