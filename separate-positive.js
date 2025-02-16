// add whatever parameters you deem necessary
function separatePositive(numsArr) {
    let left = 0;
    let right = numsArr.length - 1;

    while (left < right) {
        if (numsArr[left] > 0) {
            left++;
        } else if (numsArr[right] < 0) {
            right--;
        } else {
            [numsArr[left], numsArr[right]] = [numsArr[right], numsArr[left]];
            left++;
            right--;
        }
    }

    return numsArr;
}
