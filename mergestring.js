function mergeStrings(str1, str2) {
    let mergedString = "";
    let maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) {
            mergedString += str1[i];
        }
        if (i < str2.length) {
            mergedString += str2[i];
        }
    }

    return mergedString;
}

// Example usage
let string1 = "abc";
let string2 = "12345";
let result = mergeStrings(string1, string2);
console.log(result); // Output: a1b2c345
