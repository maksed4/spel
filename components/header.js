import { StyleSheet, Text, View } from "react-native"


const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sten Sax Påse Spel</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontSize: 30,
        marginBottom: 50
    },
    container: {
        alignItems: "center"
    }
})


export default Header;