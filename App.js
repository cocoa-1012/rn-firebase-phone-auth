import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PhoneNumber} from './src/Auth/PhoneNumber';
import {Home} from './src/Home/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
