import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import batlogo from './assets/Logo2.png' 

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={batlogo}
      style={styles.image}
      />
      <Text
      style={styles.text}
      >Faça seu Batcadastro</Text>
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
image:{
width:310,
height:190,
position:'absolute',
top:200,
},
text:{
color:'yellow',
position:'absolute',
fontSize:30,
backgroundColor:'#330033',
padding:10,
bottom:200,

}
});
