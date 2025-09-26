function findSecondLargest(arr) {
    let large = arr[0];
    let secondLarge = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let currentNo = arr[i];
        if (currentNo > large) {
            secondLarge = large;
            large = currentNo;
        }
        else if (currentNo > secondLarge && currentNo != large) {
            secondLarge = currentNo
        }

    }

    return secondLarge;
}



console.log(findSecondLargest([1, 2, 3, 3.5, 4, 3.8, 4]));
