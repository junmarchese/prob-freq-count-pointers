// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let str1 = num1.toString(); 
    let str2 = num2.toString();
    let freqCounter = {};

    if (str1.length !== str2.length) return false;

    for (let char of str1) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!freqCounter[char]) return false;
        freqCounter[char]--;
    }

    return true;
}
