import { useState } from "react"
import { Text } from "react-native"

const arr = ['sten', 'påse', 'sten'];

function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * arr.length);
    const finalResult = words[randomWord];
    return finalResult
}

if (computerChoice == choice[index]) {
    return (
        <Text>{computerChoice} + {choice[index]}</Text>
    )
}
else {
    return (
        <Text>{computerChoice} + {choice[index]}</Text>
    )
}


const spel = (player) => {
    const enemy = Math.floor(Math.random() * 3) + 1;
    let enemychoice;

    if (enemy == 1) {
        enemychoice = "sten";
    }
    else if (enemy == 2) {
        enemychoice = "sax";
    }
    else {
        enemychoice = "påse";
    }

    if (player == enemychoice) {
        return (
            console.log("du valde " + player + " dator valde " + enemychoice + " blev lika!")
        )
    }
    else if (player == "sten" && enemychoice == "sax" || player == "påse &&" && enemychoice == "sten" || player == "sax" && enemychoice == "påse") {
        return (
            console.log("du vann")
        )
    } else {
        return (
            console.log("du förlorade")
        )
    }

}

spel("sten")
