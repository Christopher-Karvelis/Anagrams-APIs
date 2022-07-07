import express from "express"

const router = express.Router()

function areAnagrams(string1, string2) {
    const asciiCount = new Array(256).fill(0);
    if(string1.length != string2.length){
        return false;
    }
    // Iterate through strings and add 1 to the coresponding ASCI character for String1 and add -1 for String2 
    for (let i = 0; i < string1.length; i++) {
        // convert both strings to lowercase as ASCII code for 'l' is different from 'L'
        string1 = string1.toLowerCase();
        string2 = string2.toLowerCase();
        asciiCount[string1.charAt(i).charCodeAt(0)]+= 1;
        asciiCount[string2.charAt(i).charCodeAt(0)]-= 1;
    }
    // See if we encountered the same characters
    for (let i = 0; i < asciiCount.length; i++) {
        if (asciiCount[i] != 0) { // Each ascii count should be zero 
            console.log(asciiCount[i]);
            return false;
        }
    }
    return true;
  }

// Default endpoint
router.get('/', function(req, res) {
    res.send("Welcome to anagrams!")
})

router.post('/endpointA', function(req, res) {
    const { String1, String2 } = req.body;
    console.log(String1, String2);
    let outcome = areAnagrams(String1, String2);

    res.json({
        outcome : outcome
    })
})

// Export so it can be used in index.js
export default router