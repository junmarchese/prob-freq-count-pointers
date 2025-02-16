// add whatever parameters you deem necessary
function averagePair(numsArray, targetAvg) {
    let left = 0;
    let right = numsArray.length - 1;

    while (left < right) {
        let avg = (numsArray[left] + numsArray[right]) / 2;
        if (avg === targetAvg) return true;
        if (avg < targetAvg) left++;
        else right--;
    }

    return false;
}
