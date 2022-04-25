import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {Home} from '../Home/Home';
// import {SignIn} from '../SignIn/SignIn';
import {StyleSheet, Text} from 'react-native';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Text>Home Screen</Text>;
};

const DetailsScreen = () => {
  return <Text>Details</Text>;
};
export const BottomTabs = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator sceneContainerStyle={styles.bottomTab}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Signin" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    display: 'flex',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'none',
  },
});
