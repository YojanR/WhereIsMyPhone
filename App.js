/**
 * Autor: Diana Esthefania Carrillo Cano
 */

import React from 'react';
import {  StyleSheet,  View,  Text, Button, Vibration} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import Toast from 'react-native-simple-toast';

export default function App() {

  const DURATION = 1500 ;
  const NOTIF = 200 ;
  let VIBENABLED = 0;
  let VIBRATING = 0;
  let StartVibrationFunction
  let StopVibrationFunction
  let NotificationOfVibrationEnabled

  NotificationOfVibrationEnabled=()=>{
    Vibration.vibrate(NOTIF);
  }

  StartVibrationFunction=()=>{
    if (VIBENABLED==1){
      if (VIBRATING==0){
        // Device Will Vibrate for 10 seconds
        Vibration.vibrate(DURATION) ;
        VIBRATING=1;
      }
    }}

  StopVibrationFunction=()=>{
    if(VIBRATING==1){
      Vibration.cancel();
      VIBRATING=0;
    }
   }

  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>
          WIMP
        </Text>

        <SwipeButton      //VIBRACIÓN
            disabled={false}
            railBackgroundColor="white" //fondo
            railBorderColor="grey"    //borde de switch
            railFillBorderColor="pink"  //borde de deslizamiento 
            railFillBackgroundColor="168, 64, 239, 0.38" //fondo deslizamiento
            swipeSuccessThreshold= "55"//55% de deslizamiento para cambiar de estado
            title="Vibración"
            onSwipeSuccess={() => {     //cuando cambie de estado ON muestra un toast
              Toast.showWithGravity("Encendido", Toast.LONG, Toast.CENTER);
              NotificationOfVibrationEnabled();
                                    VIBENABLED=1;
            }}
            onSwipeFail={() => {      //cuando cambie de estado OFF muestra un toast
              Toast.showWithGravity("Apagado", Toast.LONG, Toast.CENTER);
              VIBENABLED=0;
            }}
        />

    </View>
    
  );
}

const styles = StyleSheet.create({
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
  },
});