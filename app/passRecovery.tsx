import React from "react";
import {Text, View, Image,TextInput,StyleSheet} from 'react-native';
import { Link, useRouter } from 'expo-router';
const PassRecovery=()=>{
    const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');


   
    return(
        <>
        <View style={{
           flex:1,justifyContent:"center",alignItems:"center"
        }}>
          <Image
               style={{
                width:100,
                height:100,
                borderRadius:"50%"
               }}
               alt="hello"
               source={{
                      uri: "https://cdn.vectorstock.com/i/1000v/02/41/check-out-flat-icon-of-gift-bag-vector-45200241.jpg",
                    }}/>
            <Text style={{
                fontWeight:500,
                fontSize:30,
              
            }}>
                Password Recovery
            </Text>
            
            <Text>
                How you would like to restore your password?</Text>
                <View>
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
            
            </View>
<Link href={"/PassRecovery2"} style={{marginTop:25,backgroundColor:"blue",padding:10,paddingHorizontal:140,borderRadius:10,color:"white"}}>Next
</Link>
<Text style={{margin:20}}>cancel</Text>
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