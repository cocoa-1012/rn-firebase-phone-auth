import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PhoneAuth} from './src/Auth';
import {Goals} from './src/Goals';
// import {PersonalGoal} from './src/Goals/PersonalGoal';
import {Home} from './src/Home/Home';
import {CreatePwd} from './src/SignIn/CreatePwd';
import {SignIn} from './src/SignIn/SignIn';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Goals"
          component={Goals}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Auth"
          component={PhoneAuth}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePwd"
          component={CreatePwd}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
