let rlsync = require("readline-sync");

let story = {}
const WORD_TYPES = ['noun', 'verb', 'adverb', 'adjective'];

WORD_TYPES.forEach( (type) =>  story[type] = rlsync.question(`Enter a ${type}: `));



let result = `Do you ${story.verb} ${story.adjective} ${story.noun} your ${story.adverb}? Great!`;

console.log(result);