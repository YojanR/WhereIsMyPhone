/**
 * Autor: Diana Esthefania Carrillo Cano
 */

import React, { Component } from 'react';
import {  StyleSheet,  View,  Text, Button, Vibration, PermissionsAndroid, TouchableOpacity} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import Toast from 'react-native-simple-toast';
import Torch from 'react-native-torch';


export async function linterna() {
  
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'Permisos de Camara - ReactNativeCode',
        'message': 'La aplicación de ReactNativeCode necesita acceso a tu Camara.'
      }
    )

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Permisos aceptados");
    }
    else {
      Alert.alert("Permisos denegados");
    }
  } catch (err) {
    console.warn(err)
  }

}//fin function Linterna()


  
export default class App extends Component {

  async componentDidMount() {
    await linterna()
  }

  turnONTorch() {
    Torch.switchState(true); // Encender Torch.
  }

  turnOFFTorch() {
    Torch.switchState(false); // Apagar Torch.
  }

  
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.paragraph}>
          WIMP
        </Text>

        <TouchableOpacity onPress={this.turnONTorch.bind(this)} activeOpacity={0.6}>
          <Text> Encender linterna </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.turnOFFTorch.bind(this)} activeOpacity={0.6} >
          <Text> Apagar linterna </Text>
        </TouchableOpacity>

        <SwipeButton      //LINTERNA
            disabled={false}
            railBackgroundColor="white" //fondo
            railBorderColor="grey"    //borde de switch
            railFillBorderColor="pink"  //borde de deslizamiento 
            railFillBackgroundColor="168, 64, 239, 0.38" //fondo deslizamiento
            swipeSuccessThreshold= "55"//55% de deslizamiento para cambiar de estado
            title="Linterna"
            onSwipeSuccess={() => {     //cuando el swipebutton cambie de estado ON 
              Toast.showWithGravity("Linterna activada :D", Toast.LONG, Toast.CENTER);                             
              Torch.switchState(true);
            }}
            onSwipeFail={() => {      //cuando el swipebutton cambie de estado OFF 
              Toast.showWithGravity("Linterna desactivada D:", Toast.LONG, Toast.CENTER);
              Torch.switchState(false);
            }}
        />

        <SwipeButton      //VIBRACIÓN
            disabled={false}
            railBackgroundColor="white" //fondo
            railBorderColor="grey"    //borde de switch
            railFillBorderColor="pink"  //borde de deslizamiento 
            railFillBackgroundColor="168, 64, 239, 0.38" //fondo deslizamiento
            swipeSuccessThreshold= "55"//55% de deslizamiento para cambiar de estado
            title="Vibración"
            onSwipeSuccess={() => {     //cuando el swipebutton cambie de estado ON
              Toast.showWithGravity(" Vibración activada :D", Toast.LONG, Toast.CENTER);
              Vibration.vibrate(300);
              
            }}
            onSwipeFail={() => {      //cuando el swipebutton cambie de estado OFF
              Toast.showWithGravity("Vibración desactivada D:", Toast.LONG, Toast.CENTER);
              Vibration.cancel();
            }}
        />

    </View>
    
    );//fin return
  }//fin render
}//Fin class App



styles = StyleSheet.create(
{
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }, TextStyle: {
    color: '#fff',
    textAlign: 'center',
  }
});