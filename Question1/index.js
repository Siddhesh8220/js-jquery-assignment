// fucntion to calculate wordcount in the sentence
function findWordCount(sentence){
    return sentence.split(" ").length > 3;
}

// original Sentense
let str = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`

// replacing space preceded by "." or "?" with "|"
let replacedStr = str.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").replace(/[0-9]/g, "X")

// split string 
let processedStr = replacedStr.split("|");

// filter array based on wordcount in each sentence
let result = processedStr.filter(findWordCount)
for(let i = 0; i < result.length; i++){
    console.log(`${i+1}. ${result[i]}`);
}