import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  let listaInicial = [{Nome:"Caderno", Valor:40}, {Nome:"Lapis", Valor: 3}]
  let [listaMateriais, setListaMateriais] = useState([listaInicial])
  let [Nome, setNome] = useState()
  let [Valor,setValor] = useState()
  console.log(Nome,Valor)

  let addMaterial = (nome, valor) => {
    console.log(nome,valor)
    let Material = {nome:`${nome}`, Valor:`${valor}`}
    setListaMateriais(listaMateriais.concat(Material))
  }
  console.log(Nome,Valor)


  return (
    <View style={styles.container}>
      <Text>APP - Lista de Material Escolar</Text>
      <StatusBar style="auto" />
      {listaMateriais.map((itens, index)=>{
          return (<FlatList
            style={styles.Lista}

      data = {itens}
      renderItem={({item})=> <Text key={index} style={styles.Texto}>{item.Nome}, {item.Valor}</Text>} 
  />)
      })}
      


      <TextInput 
        value={Nome}
        onChangeText={nome=>setNome(nome)}
        style={styles.input} 
        placeholder='Nome'/>

      <TextInput 
        value={Valor}
        onChangeText={valor=>setValor(valor)}
        style={styles.input} 
        placeholder='Valor' />

      <Button
        onPress={addMaterial}
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
    fontSize: 24,
    marginBottom: 25,
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    textAlign: 'center'
    
  }
});
