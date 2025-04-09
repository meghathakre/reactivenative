import React from'react';
import { Stack } from 'expo-router';

const RootLayout=()=>{
  return(
    <>
<Stack screenoptions={{headershown:false}}>
    <Stack.Screen name="index"/>
    <Stack.Screen name="login"/>
    <Stack.Screen name="signup"/>
    <Stack.Screen name="password"/>
    <Stack.Screen name="passRecovery"/>
  
    
    </Stack>
    
    </>

  )
}
export default RootLayout;

