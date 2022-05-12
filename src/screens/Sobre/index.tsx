import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import bg from '../../assets/imgs/localização.png';
import { Image } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Sobre() {
 return (
   <View style={styles.container}>
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#009900',  width: '100%', height: '100%'}}>
      <Text style={{color:'#fff', fontSize: 30}}>Comunidade Nova Jericó</Text>
      <Text style={{color:'#fff', fontSize: 20}}>INFORMAÇÕES DE CONTATO ADICIONAIS</Text>
      <Button icon={{name:'phone', color:'#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
     <Text style={{color:'#fff', fontSize: 20}}>(82) 98813-5428</Text>
     <Button icon={{name:'email', color:'#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
     <Text style={{color:'#fff', fontSize: 20}}>andersonsilvanj82@gmail.com</Text>
     <Text style={{color:'#fff', fontSize: 20}}>compreicaro@hotmail.com</Text>
     <Button icon={{name:'map', color:'#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
     <Text style={{color:'#fff', fontSize: 20}}>Localização</Text>
     
   </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})