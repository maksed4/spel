import { StyleSheet, Text } from "react-native"


const Header = () => {
    return (
        <Text style={styles.title}>Sten Sax Påse Spel</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontSize: 30,
        marginBottom: 50
    }
})


export default Header;