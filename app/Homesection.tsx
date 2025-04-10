import React from "react";
import {Text, View, Image, TouchableOpacity, Button, ScrollView} from 'react-native';
import { Link, useRouter } from 'expo-router';
const Homesection=()=>{
    return(
        <>
         <ScrollView>
        <View>
         <Image
                                   style={{
                                    width:40,
                                    height:40,
                                   marginTop:6,
                                    borderRadius:"50%"
                                   }}
                                   alt="hello"
                                   source={{
                                          uri: "https://www.shutterstock.com/shutterstock/photos/2455707707/display_1500/stock-photo-happy-pretty-asian-woman-carrying-colorful-shopping-bags-isolated-on-yellow-studio-background-2455707707.jpg",
                                        }}/> 
                                    
                   </View>   
                   <View>
                   <Text style={{marginLeft:60,marginTop:-34,backgroundColor:"blue",color:"white",width:90,padding:4,textAlign:"center" ,borderRadius:16}}>My Activity</Text></View>

                   <View>
                    <Text style={{fontWeight:600,fontSize:30}}>
                        Hello,Megha!
                    </Text>
                   </View>
                   <View style={{backgroundColor:"lightgrey",marginTop:20,borderRadius:10}}>
                    <Text style={{fontWeight:400,padding:10,fontSize:20}}>
Announcement

                    </Text>
                    <Text style={{padding:5,textAlign:"left"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat optio laboriosam recusandae magni reprehenderit repellendus
                    </Text>

                   </View>
                   <View>
                    <Text style={{fontSize:20,fontWeight:600,marginTop:20}}>
                        Recently Viewed
                    </Text>
                   </View>
                   <View style={{marginTop:10,display:"flex" ,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                   <View>
                   <Image
                   style={{
                    width:40,
                    height:40,
                   marginTop:6,
                    borderRadius:"50%"
                   }}
                                              
                    alt="hello"
                    source={{
                   uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                 }}/> 
                                                   
                   </View>
                   <View>
                   <Image
                   style={{
                    width:40,
                    height:40,
                   marginTop:6,
                    borderRadius:"50%"
                   }}
                                              
                    alt="hello"
                    source={{
                   uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                 }}/> 
                                                   
                   </View>
                   <View>
                   <Image
                   style={{
                    width:40,
                    height:40,
                   marginTop:6,
                    borderRadius:"50%"
                   }}
                                              
                    alt="hello"
                    source={{
                   uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                 }}/> 
                                                   
                   </View>
                   
                    <View>
                   <Image
                   style={{
                    width:40,
                    height:40,
                   marginTop:6,
                    borderRadius:"50%"
                   }}
                                              
                    alt="hello"
                    source={{
                   uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                 }}/> 
                                                   
                   </View><View>
                   <Image
                   style={{
                    width:40,
                    height:40,
                   marginTop:6,
                    borderRadius:"50%"
                   }}
                                              
                    alt="hello"
                    source={{
                   uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                 }}/> 
                                                   
                   </View><View>
                   <Image
                   style={{
                    width:40,
                    height:40,
                   marginTop:6,
                    borderRadius:"50%"
                   }}
                                              
                    alt="hello"
                    source={{
                   uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                 }}/> 
                                                   
                   </View>
                   </View>
                   <View>
                    <Text style={{fontSize:20,fontWeight:700,marginTop:10}}>
                       My Orders

                    </Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                   <Text style={{marginTop:10,backgroundColor:"lightblue", width:100,padding:6,borderRadius:16,textAlign:"center",color:"blue"}}>
                    To Pay
                   </Text>
                   <Text style={{marginTop:10,backgroundColor:"lightblue", width:100,padding:8,borderRadius:16,textAlign:"center",color:"blue"}}>
                    To Receive
                   </Text>
                   <Text style={{marginTop:10,backgroundColor:"lightblue", width:100,padding:8,borderRadius:16,textAlign:"center",color:"blue"}}>
                    To Review
                   </Text>
                   </View>
                   <View>
                    <Text style={{fontWeight:700,fontSize:20}}>
                        Stories
                    </Text>
                   </View>
                  
                   <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <Image
                                               style={{
                                                width:100,
                                                height:200,
                                                
                                               }}
                                               alt="hello"
                                               source={{
                                                      uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                    }}/> 
                               <Image
                                                          style={{
                                                           width:100,
                                                           height:200,
                                                           
                                                          }}
                                                          alt="hello"
                                                          source={{
                                                                 uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                               }}/> 
                                                                      <Image
                                                          style={{
                                                           width:100,
                                                           height:200,
                                                           
                                                          }}
                                                          alt="hello"
                                                          source={{
                                                                 uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                               }}/>  <Image
                                                               style={{
                                                                width:100,
                                                                height:200,
                                                                
                                                               }}
                                                               alt="hello"
                                                               source={{
                                                                      uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                                    }}/>                
                   </View>
                   <View>
                    <Text>
                       New iteams
                    </Text>
                   </View>
                   <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View>
                    <Image
                                               style={{
                                                width:100,
                                                height:200,
                                                
                                               }}
                                               alt="hello"
                                               source={{
                                                      uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                    }}/> 
                                                    
                                                    <Text>
                                                        
                                                       best pdoduct
                                                    </Text>
                                                    <Text>
                                                        
                                                        $17,00
                                                    </Text>
                                                    </View>
<View>

                               <Image
                                                          style={{
                                                           width:100,
                                                           height:200,
                                                           
                                                          }}
                                                          alt="hello"
                                                          source={{
                                                                 uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                               }}/> 
 <Text>
                                                        
                                                        best pdoduct
                                                     </Text>
                                                     <Text>
                                                         
                                                         $17,00
                                                     </Text>
                                                               </View>
                                                               <View>
                                                                      <Image
                                                          style={{
                                                           width:100,
                                                           height:200,
                                                           
                                                          }}
                                                          alt="hello"
                                                          source={{
                                                                 uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                               }}/> 
                                                                <Text>
                                                        
                                                        best pdoduct
                                                     </Text>
                                                     <Text>
                                                         
                                                         $17,00
                                                     </Text>
                                                               </View>
                                                               <View>
                                                               <Image
                                                               style={{
                                                                width:100,
                                                                height:200,
                                                                
                                                               }}
                                                               alt="hello"
                                                               source={{
                                                                      uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                                    }}/>  
                                                                    <Text>
                                                        
                                                        best pdoduct
                                                     </Text>
                                                     <Text>
                                                         
                                                         $17,00
                                                     </Text>              
                   </View>
                   </View>
                  <View>
                    <Text >
                        Most Popular
                    </Text>
                  </View>
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View>
                    <Image
                                               style={{
                                                width:100,
                                                height:200,
                                                
                                               }}
                                               alt="hello"
                                               source={{
                                                      uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                    }}/> 
                                                    
                                                    <Text>
                                                        
                                                       best pdoduct
                                                    </Text>
                                                    <Text>
                                                        
                                                        $17,00
                                                    </Text>
                                                    </View>
<View>

                               <Image
                                                          style={{
                                                           width:100,
                                                           height:200,
                                                           
                                                          }}
                                                          alt="hello"
                                                          source={{
                                                                 uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                               }}/> 
 <Text>
                                                        
                                                        best pdoduct
                                                     </Text>
                                                     <Text>
                                                         
                                                         $17,00
                                                     </Text>
                                                               </View>
                                                               <View>
                                                                      <Image
                                                          style={{
                                                           width:100,
                                                           height:200,
                                                           
                                                          }}
                                                          alt="hello"
                                                          source={{
                                                                 uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                               }}/> 
                                                                <Text>
                                                        
                                                        best pdoduct
                                                     </Text>
                                                     <Text>
                                                         
                                                         $17,00
                                                     </Text>
                                                               </View>
                                                               <View>
                                                               <Image
                                                               style={{
                                                                width:100,
                                                                height:200,
                                                                
                                                               }}
                                                               alt="hello"
                                                               source={{
                                                                      uri: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg",
                                                                    }}/>  
                                                                    <Text>
                                                        
                                                        best pdoduct
                                                     </Text>
                                                     <Text>
                                                         
                                                         $17,00
                                                     </Text>              
                   </View>
                   </View>


                   
                   </ScrollView>
                    </>
    )
}
export default Homesection;