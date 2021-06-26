import React from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const App=()=>{


return (
 <NavigationContainer>
      <AppStack.Navigator
      headerMode="none"
      >
      <AppStack.Screen  name="Onboarding" 
      component= {OnboardingScreen}
       />
       <AppStack.Screen  name="Login" 
      component= {LoginScreen}
       />

      </AppStack.Navigator>
    </NavigationContainer>


)

}



export default App;