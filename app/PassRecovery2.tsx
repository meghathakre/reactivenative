import {View,Text,Image} from 'react-native';
import React from'react';
import { Link } from 'expo-router';
const PassRecovery2=()=>{
    return(
        <>
<View style={{
           flex:0.9,justifyContent:"center",alignItems:"center"
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
            Enter 4-digit code we sent you on your phone number</Text>
            <Text>
                +98********00
            </Text>
             
        <View style={{justifyContent:"center",alignItems:"center" ,marginTop:20}}>
        
       <Text style={{display:"flex",justifyContent:"center", alignItems:"center",gap:10}}>
       <input type='' style={{width:10,height:10,padding:4,backgroundColor:'lightgrey',borderRadius:"50%"}}/>
<input type=''style={{width:10,height:10,padding:4,backgroundColor:'lightgrey',borderRadius:"50%"}}/>
<input type=''style={{width:10,height:10,padding:4,backgroundColor:'lightgrey',borderRadius:"50%"}}/>
<input type=''style={{width:10,height:10,padding:4,backgroundColor:'lightgrey',borderRadius:"50%"}}/>
</Text>
<Link href={"/Newpassword"} style={{marginTop:25,backgroundColor:"blue",padding:10,paddingHorizontal:100,borderRadius:10,color:"white",width:300,alignItems:'center'}}>Send Again</Link>
<Text>Cancel</Text>
        </View>
        </View>
        <View>
        
        
        </View>
        
       
           
      
        
        </>
    )
}
export default PassRecovery2;