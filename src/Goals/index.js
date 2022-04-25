import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GroupGoal} from './GroupGoal';
import {PersonalGoal} from './PersonalGoal';

const Tab = createBottomTabNavigator();

export const Goals = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'PersonalGoal') {
            iconName = 'home';
          }
          if (route.name === 'Details') {
            iconName = 'information-circle';
          }
          if (route.name === 'GroupGoal') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
          // return <Text>{iconName}</Text>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="PersonalGoal"
        component={PersonalGoal}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="GroupGoal"
        component={GroupGoal}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'none',
  },
});
