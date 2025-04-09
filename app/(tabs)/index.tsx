import React from "react";
import {Text, View, Image} from 'react-native';
import { Link, useRouter } from 'expo-router';

const Index=()=>{
  const router =useRouter();
   // router.navigate(/signup);
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
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
      <Text style={{fontSize:40,color:"Black", fontWeight:900}}>
Cybrom

      </Text>
      <Text>Beautiful eCommerce UI Kit 
             for Your Online store</Text>
      <Link href={"/signup"} style={{color:"white",fontWeight:600,backgroundColor:"blue",padding:10,paddingHorizontal:50,borderRadius:10,margin:20}}> Let's get started</Link><br />
      <Link href={"/login"}  style={{}}>i already have an account </Link>
    </View>

  )
}
export default Index;