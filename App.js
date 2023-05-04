import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  let [listaMateriais, setListaMateriais] = useState([])
  let [Nome, setNome] = useState()
  let [Valor,setValor] = useState()

  const addMaterial = async () => {
    console.log("abc",Nome,Valor)
    const Material = {Nome:`${Nome}`, Valor:`${Valor}`}
    setListaMateriais([...listaMateriais, Material])
  }

  return (
    <View style={styles.container}>
      <Text>APP - Lista de Material Escolar</Text>
      <StatusBar style="auto" />
      <FlatList
  data={listaMateriais}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Text style={styles.Texto}>{item.Nome} -- {item.Valor}</Text>
  )}
/>
      


      <TextInput 
        value={Nome}
        onChangeText={nome=>setNome(nome)}
        style={styles.TextoInput} 
        placeholder='Nome'/>

      <TextInput 
        value={Valor}
        onChangeText={valor=>setValor(valor)}
        style={styles.TextoInput} 
        placeholder='Valor' />

      <Button
        onPress={addMaterial}
        style={styles.Button}
        title='Submit'
        color='orange' />
  
    
    </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  Texto: {
    fontSize: 24,
  },
  TextoInput: {
    fontSize: 16,
    marginBottom: 15,
    width:'40%',
    height:'8%',
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    textAlign: 'center'
    
  },
  Button:{
    marginBottom:'20%'
  }
});
