import express from "express"
import Anagram from "../anagram.js";

const router = express.Router();
let anagram = new Anagram();

// Default endpoint
router.get('/', function(req, res) {
    res.send("Welcome to anagrams!")
})
// Post endpoint A
router.post('/A', function(req, res) {
    const { string1, string2 } = req.body;
    // console.log(string1, string2);
    var outcome = anagram.areAnagrams(string1, string2);
    res.json({
        outcome : outcome
    })
})
// Post endpoint B
router.post('/B', function(req, res) {
    const { word, sentence } = req.body;
    // console.log(word, sentence);
    var outcome = anagram.getAnagrams(word, sentence);
    res.json({
        outcome : outcome
    })
})
// Post endpoint C
router.post('/C', function(req, res) {
    const { sentence } = req.body;
    // console.log(sentence);
    var outcome = anagram.getAnagramGroups(sentence);
    res.json({
        outcome : outcome
    })
})
// Export so it can be used in index.js
export default router