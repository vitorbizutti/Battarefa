import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Batcadastro</Text>
      
      <Text>Nome</Text>
      <TextInput placeholder='Digite seu nome'></TextInput>

      <Text>Email</Text>
      <TextInput placeholder='Digite seu e-mail'></TextInput>

      <Text>CPF</Text>
      <TextInput placeholder='Digite seu CPF'></TextInput>

      <Text>Senha</Text>
      <TextInput placeholder='Digite sua senha'></TextInput>
    
         <Text style={{fontSize:30,}}>Entar</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
