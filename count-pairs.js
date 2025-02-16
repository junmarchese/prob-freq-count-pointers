// add whatever parameters you deem necessary
function countPairs(nums, targetSum) {
    let seen = new Set();
    let count = 0;

    for (let num of nums) {
        if (seen.has(targetSum - num)) {
            count++;
        }
        seen.add(num);
    }

    return count;
}
