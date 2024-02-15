import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import animal from '../chap02_jsx_basic/assets/images/animal.png'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.titleContatiner}>
        <Text style={styles.title}>hello react</Text>
       
      </View>
      <View style={styles.itemContainer}>
      <Image
          source={animal}
        />
        <Text style={styles.item}>jsx를 이용한 컴포넌트 렌더링</Text>
        <Text style={styles.item}>javascript를 이용한 방법보다 수월</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1, 
    backgroundColor:'#FFF',
    alignItems:'center',
    marginTop:30
  },
  titleContatiner:{
    flex:0.2,
    justifyContent:'center',
    backgroundColor:'#99FFCC',
    width:"100%",
    alignItems:"center"
  },
  title:{
    fontSize:30,
    color:"blue"
  },
  itemContainer:{
    flex:0.8,
    justifyContent:'center',
    backgroundColor:'#99FFFF',
    width:"100%",
    alignItems:'center'
  },
  item:{
    fontSize:20,
    color:"#003300"
  }
})



