import express from "express";
import Anagram from "../anagram.js";

const router = express.Router();
let anagram = new Anagram();

// Default endpoint
router.get('/', function(req, res) {
    res.send("Welcome to anagrams!");
});
// Post endpoint A checks whether or not the two words sent in the body are anagrams.
router.post('/A', function(req, res) {
    const { string1, string2 } = req.body;
    // console.log(string1, string2);
    var outcome = anagram.areAnagrams(string1, string2);
    res.json({
        outcome : outcome
    });
});
// Post endpoint B returns all unique single word anagrams of string1 in string2.
router.post('/B', function(req, res) {
    const { string1, string2 } = req.body;
    // console.log(word, sentence);
    var outcome = anagram.getAnagrams(string1, string2);
    res.json({
        outcome : outcome
    });
});
// Post endpoint C returns all anagram groups present in the string1.
router.post('/C', function(req, res) {
    const { string1 } = req.body;
    // console.log(sentence);
    var outcome = anagram.getAnagramGroups(string1);
    res.json({
        outcome : outcome
    });
});
// Export class
export default router;