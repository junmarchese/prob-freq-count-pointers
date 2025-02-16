// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message.length === 0) return true;
    if (letters.length === 0) return false;

    let letterFreq = {};

    for (let char of letters) {
        letterFreq[char] = (letterFreq[char] || 0) + 1;
    }

    for (let char of message) {
        if (!letterFreq[char]) {
            return false;
        }
        letterFreq[char]--;
    }

    return true;
}
