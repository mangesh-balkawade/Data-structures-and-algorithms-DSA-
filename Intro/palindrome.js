
//123
function isPalindromeNo(no) {
    let originalNo = no;
    let revNo = 0;
    while (no > 0) {
        let lastDigit = no % 10;
        revNo = lastDigit + (revNo * 10);
        no = parseInt(no / 10);
    }
    if (originalNo == revNo) {
        return true
    }
    return false
}

console.log(isPalindromeNo(121));
