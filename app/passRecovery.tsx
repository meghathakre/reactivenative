import React from "react";
import {Text, View, Image,TextInput,StyleSheet} from 'react-native';

const PassRecovery=()=>{
    const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');


   
    return(
        <>
        <View style={{
           flex:0.4,justifyContent:"center",alignItems:"center"
        }}>
            <Text style={{
                fontWeight:500,
                fontSize:30,
              
            }}>
                Password Recovery
            </Text>
            <View>
            <Text>
                How you would like to restore your password?
                <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Sms"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Email"
          keyboardType="numeric"
        />
            </Text>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default PassRecovery;