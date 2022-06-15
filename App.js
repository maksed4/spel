import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from "react"
import Header from './components/header';
import Input from './components/Input';
import ChoiceList from './components/ChoiceList';

export default function App() {

  const [choice, setChoice] = useState([]);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Input setChoice={setChoice} />
      <ChoiceList choice={choice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
