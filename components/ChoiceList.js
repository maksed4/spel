import { Text, FlatList, View } from "react-native"


const ChoiceList = ({ choice }) => {

    const _renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={choice}
            keyExtractor={(item, index) => index}
            renderItem={_renderItem} />
    )
}


export default ChoiceList;