import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  let [listaMateriais, setListaMateriais] = useState([])
  let [Nome, setNome] = useState()
  let [Valor,setValor] = useState()

  const addMaterial = async () => {
    if(!Nome || !Valor){
      alert("Preencha os dois campos")
    }else{
      console.log("abc",Nome,Valor)
      const Material = {Nome:`${Nome}`, Valor:`${Valor}`}
      setListaMateriais([...listaMateriais, Material])
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.TextoTitle}>APP - Lista de Material Escolar</Text>
      <StatusBar style="auto" />
      <FlatList
      style={styles.List}
  data={listaMateriais}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Text style={styles.Texto}>{item.Nome}  |  {item.Valor}</Text>
  )}
/>
      


      <TextInput 
        required
        value={Nome}
        onChangeText={nome=>setNome(nome)}
        style={styles.TextoInput} 
        placeholder='Nome'/>

      <TextInput 
        value={Valor}
        onChangeText={valor=>setValor(valor)}
        style={styles.TextoInput} 
        placeholder='Valor' />
  <View style={styles.botao}>
      <Button
        onPress={addMaterial}
        style={styles.Botao}
        title='Submit'
        color='orange' />
  </View>
    
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
    textAlign:'center',
    textTransform:'uppercase'

  },
  TextoTitle: {
    fontSize: 24,
    marginTop:'30%',
  },
  List: {
    backgroundColor:'salmon',
    padding: 20,
    width:'60%',
    marginBottom: '5%',
    marginTop:'5%',
    borderRadius:10,
    borderWidth:3,
    shadowOffset:'black'
    

  },
  TextoInput: {
    fontSize: 16,
    marginBottom: 15,
    width:'40%',
    height:'8%',
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 25,
    borderWidth: 2,
    textAlign: 'center'
    
  },
  botao:{
    marginBottom:10
  }
});
