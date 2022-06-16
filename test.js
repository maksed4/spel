
const arr = ['påse', 'sten', 'sax'];
function getRandomWord(words) {

    const randomWord = Math.floor(Math.random() * arr.length);
    const finalResult = words[randomWord];
    console.log(finalResult)
}

getRandomWord(arr)