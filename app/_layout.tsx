import React from'react';
import { Stack, Tabs } from 'expo-router';


const RootLayout=()=>{
  return(
    <>
<Stack screenoptions={{headershown:false}}>
    <Stack.Screen name="index"/>
    <Stack.Screen name="login"/>
    <Stack.Screen name="signup"/>
    <Stack.Screen name="password"/>
    <Stack.Screen name="passRecovery"/>
    <Stack.Screen name="passRecovery2"/>
    <Stack.Screen name="Newpassword"/>
    <Stack.Screen name="lastrecover"/>
    <Stack.Screen name="profile"/>
    <Stack.Screen name="Homesection"/>

  
    </Stack>
    
    </>

  )
}
export default RootLayout;

