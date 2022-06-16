import { Button, View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"


const StartScreen = () => {

    const nav = useNavigation();

    const handleNavigate = () => {
        nav.navigate('main')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{"Welcome to my game "}</Text>
            <Text style={styles.title2}>{"use the button to get to the game "}</Text>
            <Button
                style={styles.button}
                title="till spelet"
                onPress={handleNavigate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        marginTop: 50,
        marginBottom: 50,
        fontSize: 25,
        backgroundColor: "red"
    },
    title2: {
        marginTop: 50,
        marginBottom: 50,
        fontSize: 15
    },
    button: {
        borderRadius: 4
    }
})

export default StartScreen;