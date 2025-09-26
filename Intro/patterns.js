function pat1(rows, column) {
    let str = "";
    for (let i = 0; i < rows; i++) {
        for (j = 0; j < column; j++) {
            str += "*"
        }
        str += "\n"
    }
    return str;
}

function pat2(no) {
    let str = "";
    for (let i = 0; i < no; i++) {
        for (j = 0; j < i + 1; j++) {
            str += String(j + 1);
        }
        str += "\n";
    }
    return str;
}

function pat3(rows, columns) {
    let str = "";
    for (let i = 0; i < rows; i++) {
        for (j = 0; j < columns - i; j++) {
            str += String(j + 1);
        }
        str += "\n";
    }
    return str;
}

function pat4(rows, columns) {
    let str = "";
    for (let i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            if (j >= columns - i - 1) {
                str += String(j)
            }
            else {
                str += " "
            }
        }
        str += "\n";
    }
    return str;
}

// console.log(pat1(4, 4));
// console.log(pat2(4));
// console.log(pat3(5, 5));
console.log(pat4(5, 5));

