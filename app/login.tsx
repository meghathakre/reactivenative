import {View,Text} from 'react-native';
import React from'react';
import { Link } from 'expo-router';
// import { useRouter } from 'expo-router';

const Login=()=>{
    // const router =useRouter();
     const onLogin=()=>{
    //     // router.navigate(/signup);
    }
    return(
        <>
        <h1 style={{fontWeight:700}}>Login</h1>
        Good to see you back!
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    
{ <input type='text' style={{width:300,marginTop:20,padding:8,borderRadius:20}} placeholder='Enter Your Email'/> }




<Link href={"/Password"} style={{marginTop:25,backgroundColor:"blue",padding:10,paddingHorizontal:140,borderRadius:10,color:"white"}}>Next
</Link>
      <p>cancel</p>
</View>


</>
    )
}

export default Login;