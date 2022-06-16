import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState } from "react"
import Header from './components/header';
import Input from './components/Input';
import ChoiceList from './components/ChoiceList';

export default function App() {

  const [choice, setChoice] = useState([]);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/uD9js.png")}
        resizeMode='cover'
        style={styles.image}>
        <StatusBar style="auto" />
        <Header />
        <Input setChoice={setChoice} />
        <ChoiceList choice={choice} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }

});
