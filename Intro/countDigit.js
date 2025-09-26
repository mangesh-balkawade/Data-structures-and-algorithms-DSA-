function countDigit(no) {
    let cnt = 0;
    while (no > 0) {
        cnt++;
        no = parseInt(no / 10);
    }
    return cnt;
}

console.log(countDigit(123));
