import {View,Text,Image} from 'react-native';
import React from'react';
import { Link } from 'expo-router';


const Profile=()=>{
  
    return(
        <>
        <View style={{backgroundColor:"blue", flex:0.8,flexWrap:'wrap'}}>
        <View style={{backgroundColor:"blue", flex:0.8,flexWrap:'wrap'}}></View>
             <Image
                           style={{
                            width:300,
                            height:300,
                            marginLeft:100
                           }}
                           alt="hello"
                           source={{
                                  uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                }}/> 

        </View>
              
                                
                   <Link href={"/Homesection"} style={{marginTop:25,backgroundColor:"blue",padding:10,borderRadius:10,color:"white",textAlign:"center"}}>Let's Start
                   </Link>             
            <Text>
               
            </Text>
        
        </>
    )
}
export default Profile;