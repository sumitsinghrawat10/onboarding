import React from 'react';
import {View,Text,Image,Button,StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip=()=>(
<Button

title='Skip'
color="#00000"
/>


);

const Next=()=>(
<Button

title='Next'
color="#00000"
/>


);

const OnboardingScreen=({navigation})=>{
return (
<Onboarding
SkipButtonComponent= {Skip}
NextButtonComponent= {Next}
onSkip={()=> navigation.replace("Login")
  }
onDone={()=> navigation.navigate("Login")
  }
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fdeb93',
      image: <Image source={require('../assets/onboarding-img2.png')} />,
      title: 'Onboarding 2',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
      {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/onboarding-img3.png')} />,
      title: 'Onboarding 3',
      subtitle: 'Done with React Native Onboarding Swiper',
    }
  
  ]}
/>

)

}

const styles= StyleSheet.create({
container:{
flex: 1,
alignItems:'center',
justifyContent:'center'
},
})


export default OnboardingScreen;