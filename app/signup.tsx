import {View,Text,Image} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
const Signup=()=>{
    return(
        <>
        <Text style={{fontWeight:500,fontSize:40}}>
            Create account
        </Text>
        <Image  style={{
width:90,
height:90,
borderRadius:"50%",


        }}
        source={{
            uri: "https://static.vecteezy.com/system/resources/previews/006/998/431/non_2x/photo-camera-icons-photo-camera-icon-design-illustration-photo-camera-simple-sign-photo-camera-image-vector.jpg",
          }}
        />
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       
       <input type='text' style={{width:300,marginTop:20,padding:8,borderRadius:20}} placeholder='Enter Your Email'/>
       <input type='text' style={{width:300,marginTop:20,padding:8,borderRadius:20}} placeholder='Enter Your password'/>
       <input type='number' style={{width:300,marginTop:20,padding:8,borderRadius:20}} placeholder='your number'/>
       
       
       <Link href={"/login"} style={{marginTop:25,backgroundColor:"blue",padding:10,paddingHorizontal:140,borderRadius:10}}>Done
       </Link>
             
       </View>
       </>
       
    )
}
export default Signup;