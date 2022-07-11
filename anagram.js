class Anagram {
    // Formats and splits strings to lowercase words ignoring punctuation 
    getWordsArray(string) {
        let word = "";
        const words = [];
        let w = 0;
        for (let i = 0; i < string.length; i++) {
            let char = string.charAt(i);
            let asciiCode = char.charCodeAt(0);                    // Get the ascii code of each character
            if (97 <= asciiCode && asciiCode <= 122) {             // Lowercase char
                word = word.concat(char);
            } else if (65 <= asciiCode && asciiCode <= 90) {       // Uppercase char
                let c = String.fromCharCode(asciiCode + 32);       // Convert to lowercase by adding 32
                word = word.concat(c);      
            } else if (asciiCode == 32 && word != "") {            // White space char found so we have a completed word.
                words.push(word);
                word = "";
            }
        }
        if (word != "") {                                       
            words.push(word);                                      // Add the last word of the sentence to the array
        }
        return words;
    }
    // Main function of endpoint A that checks if two words are anagrams
    areAnagrams(string1, string2) {
        // Convert both strings to lowercase and ignore punctuation
        let word1 = this.getWordsArray(string1)[0];
        let word2 = this.getWordsArray(string2)[0];
        if (word1.length != word2.length){
            return false;
        }
        const chars = new Map();                                    
        for (let i = 0; i < word1.length; i++) {
            let wrd1Char = word1.charAt(i);
            let wrd2Char = word2.charAt(i);
            // Add letters of word1 and increment by one
            if (chars.has(wrd1Char)) {
                let count = chars.get(wrd1Char);
                chars.set(wrd1Char, count+1);
            } else {
                chars.set(wrd1Char, 1);
            }
             // Add letters of word2 and decrement by one
            if (chars.has(wrd2Char)) {
                let count = chars.get(wrd2Char);
                chars.set(wrd2Char, count-1);
            } else {
                chars.set(wrd2Char, -1);
            }
        }
        // Check if the characters of string2 exist in the hashet removing each time the char found
        for (let i = 0; i < word1.length; i++) {
            let wrd1Char = word1.charAt(i);
            if (chars.get(wrd1Char) != 0) {
                return false;
            } 
        }
        return true;
    }
    // Main function of endpoint B wich returns all anagrams of the word found in the sentence
    getAnagrams(word, sentence) {
        const anagrams = [];
        if (word.length < 1) {
            return anagrams;
        }
        const uniqueAnagrams = new Set();                          // Set with O(1) look up to check for unique anagrams in the sentence
        let words = this.getWordsArray(sentence);                  // Break the string in to an array of words
        word = this.getWordsArray(word)[0];                        // Convert word to lowercase and ignore punctuation
        for (let i = 0; i < words.length; i++) {
            if (this.areAnagrams(word, words[i])) {             
                if (!uniqueAnagrams.has(words[i])) {               // Check for uniqueness of the anagram
                    uniqueAnagrams.add(words[i]);
                    anagrams.push(words[i]);
                }
            }
        }
        return anagrams;
    }
    // Main function of endpoint C returns the anagram gropus that the sentence contains
    getAnagramGroups(sentence) {
        const groupAnagrams = [];
        const groupsMap = new Map();                               // HashMap<key: ascii array of angram groups, value: array of anagrams>
        let words = this.getWordsArray(sentence);                  // Break the string in to an array of words
        for (let i = 0; i < words.length; i++) {
            const chars26 = new Array(26).fill(0);                 // Create asccii array as a unique identifier of anagram groups
            for (let j = 0; j < words[i].length; j++) {           
                let char = words[i].charAt(j);
                let code = char.charCodeAt(0);               
                chars26[code] += 1;
            }
            let wordsArray = [];                                   // Array to collect all the anagrams of each group
            let groupKey = chars26.toString();                     // Convert ascii array to string to use it as HashMap key
            if (groupsMap.has(groupKey)) {               
                wordsArray = groupsMap.get(groupKey);              // Update the anagrams group if groupKey already exist
            }
            wordsArray.push(words[i]);
            groupsMap.set(groupKey, wordsArray);
        }
        groupsMap.forEach((wordsArray, key) => {                   // Iterate through the HashMap to build the groups
           if (wordsArray.length >= 2) { 
                const uniqueAnagrams = new Set();
                const group = [];
                console.log(wordsArray.toString());
                wordsArray.forEach((word) => {
                    if (!uniqueAnagrams.has(word)) {               // Check for uniqueness of the anagram
                        uniqueAnagrams.add(word);
                        group.push(word);
                    }
                });
                groupAnagrams.push(group);
           } 
        });
        return groupAnagrams;
    }
}
export default Anagram;                                            // Export class