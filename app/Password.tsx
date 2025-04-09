import {View,Text} from 'react-native';
import React from'react';
import { Link } from 'expo-router';
const Password=()=>{
    return(
        <>

        <View style={{flex:0.8,justifyContent:"center",alignItems:"center"}}>
        <h1>Hello,Megha!!</h1>
        <p>Type your password</p>
       <Text style={{display:"flex",justifyContent:"center", alignItems:"center",gap:10}}>
       <input type='' style={{width:20,padding:4,backgroundColor:'lightgrey'}}/>
<input type=''style={{width:20,padding:4,backgroundColor:'lightgrey'}}/>
<input type=''style={{width:20,padding:4,backgroundColor:'lightgrey'}}/>
<input type=''style={{width:20,padding:4,backgroundColor:'lightgrey'}}/>
</Text>

        </View>
        <View>
        <Text style={{textAlign:"center",}}>
            Not You? 
            <Link href={"/passRecovery"}  style={{backgroundColor:"blue", padding:5,borderRadius:"50%",color:"white"}}>Next </Link>
        </Text>
             
        
        </View>
        
       
           
      
        
        </>
    )
}
export default Password;