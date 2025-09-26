function print(lastNo, currentNo) {
  if (currentNo > lastNo) {
    return;
  }
  console.log(currentNo);
  print(lastNo, ++currentNo);
}

print(10, 1);
