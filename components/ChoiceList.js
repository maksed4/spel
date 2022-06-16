import { useState } from "react";
import { Text, FlatList, View, DeviceEventEmitter, StyleSheet } from "react-native"


const ChoiceList = ({ choice, textInput }) => {

    const [computer, setComputer] = useState([])

    const enemy = Math.floor(Math.random() * 3) + 1;

    DeviceEventEmitter.addListener('ComputerChoice', () => {
        setComputer(prev => prev.concat(enemy))
    })

    const _renderItem = ({ item: computerChoice, index }) => {

        let enemychoice;

        if (computerChoice == 1) {
            enemychoice = "sten";
        }
        else if (computerChoice == 2) {
            enemychoice = "sax";
        }
        else {
            enemychoice = "påse";
        }
        if (choice[index] == enemychoice) {
            return (
                <Text style={styles.output}> {"du valde "} {choice[index]}  {" dator valde "} {enemychoice}  {" det blev lika!"}</Text>
            )
        }
        else if (choice[index] == "sten" && enemychoice == "sax" || choice[index] == "påse &&" && enemychoice == "sten" || choice[index] == "sax" && enemychoice == "påse") {
            return (
                <Text style={styles.output} > {"du valde "} {choice[index]} {" dator valde "} {enemychoice} {"det innebär du vann"} </Text>
            )
        } else {
            return (
                <Text style={styles.output}> {"du valde "} {choice[index]} {" dator valde "} {enemychoice} {"du förlorade"}</Text>
            )
        }
    }

    return (
        <View>
            <FlatList
                data={computer}
                keyExtractor={(computer, index) => index}
                renderItem={_renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    output: {
        margin: 10,
        padding: 10,
        backgroundColor: "#00ffff",
        borderRadius: 4
    }
})

export default ChoiceList;