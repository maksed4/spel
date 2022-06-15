import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

const Input = ({ setChoice }) => {

    const [textinput, setTextInput] = useState("");



    const handleTextInput = (text) => {
        setTextInput(text)
    }

    const handleAdd = () => {
        setChoice(prev => prev.concat(textinput))
        if (textinput == "maxim") {
            console.log("hello")
        }
    }

    return (
        <View style={styles.input}>
            <TextInput
                style={styles.textinput}
                value={textinput}
                onChangeText={handleTextInput} />
            <Button title="spela" onPress={handleAdd} ></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    textinput: {
        width: "60%",
        backgroundColor: "red",
        marginHorizontal: 20,
        paddingHorizontal: 10
    },
    input: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})



export default Input; 