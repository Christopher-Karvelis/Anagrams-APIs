class Anagram {

    getWordsArray(string) {
        let word = "";
        const words = [];
        var w = 0;
        for (let i = 0; i < string.length; i++) {
            let char = string.charAt(i);
            let asciiCode = char.charCodeAt(0);
            if (97 <= asciiCode && asciiCode <= 122) {
                word = word.concat(char);
            } else if (65 <= asciiCode && asciiCode <= 90) {
                let c = String.fromCharCode(asciiCode + 32);
                word = word.concat(c);
            } else if (asciiCode == 32) {     
                words[w] = word;
                word = "";
                w++;
            }
        }
    
        if (word != "") {
            words[w] = word;
        }
        return words;
    }
    // main function of endpoint A
    areAnagrams(string1, string2) {
        if (string1.length != string2.length){
            return false;
        }
        // Convert both strings to lowercase and ignore punctuation
        let word1 = this.getWordsArray(string1)[0];
        let word2 = this.getWordsArray(string2)[0];
        // 
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
    // main function of endpoint B
    getAnagrams(word, sentence) {
        const anagrams = [];
        const uniqueAnagrams = new Set();               // Set with O(1) look up to check for unique anagrams in the sentence
        let words = this.getWordsArray(sentence);            // Break the string in to an array of words
        word = this.getWordsArray(word)[0];                  // Convert word to lowercase and ignore punctuation
        let j = 0;
        for (let i = 0; i < words.length; i++) {
            if (this.areAnagrams(word, words[i])) {
                if (!uniqueAnagrams.has(words[i])) {
                    uniqueAnagrams.add(words[i]);
                    anagrams[j] = words[i];
                    j++;
                }
            }
        }
        return anagrams;
    }
    // main function of endpoint C
    getAnagramGroups(sentence) {
        const groupAnagrams = [];
        const wordArrays = new Map();
        let g = 0;
        let words = this.getWords(sentence);                   // Break the string in to an array of words
        for (let i = 0; i < words.length; i++) {
            const chars26 = new Array(26).fill(0);
            for (let j = 0; j < words[i].length; j++) {
                let char = words[i].charAt(j);
                let code = char.charCodeAt(0) % 97;
                chars26[code] += 1;
            }
            let setWords = new Set();
            if (wordArrays.has(chars26.toString())) {
                setWords = wordArrays.get(chars26.toString());
            }
            setWords.add(words[i]);
            wordArrays.set(chars26.toString(), setWords);
            console.log(setWords);
        }
        wordArrays.forEach((setWords, key) => {
           if (setWords.size > 1) {
                const uniqueAnagrams = new Set();
                const group = []
                let w = 0;
                setWords.forEach((word) => {
                    if (!uniqueAnagrams.has(word)) {
                        uniqueAnagrams.add(word);
                        group[w] = word;
                        w++
                    }
                });
                groupAnagrams[g] = group;
                g++
           } 
        });
        return groupAnagrams;
    }
}
export default Anagram // Export class