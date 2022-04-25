import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Authenticated} from './Authenticated';
import {PhoneNumber} from './PhoneNumber';
import {VerifyCode} from './VerifyCode';

const Stack = createNativeStackNavigator();

export const PhoneAuth = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = async phoneNumber => {
    console.log('phone auth signin', phoneNumber);
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log('try confirmation', confirmation);
    } catch (error) {
      alert(error);
    }
  };

  const confirmVerificationCode = async code => {
    console.log('phone auth confirmverification');
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  };

  auth().onAuthStateChanged(user => {
    console.log('phone auth user', user);
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  const storeData = async (title, value) => {
    try {
      await AsyncStorage.setItem(title, '+16466787403');
      console.log('storeData success');
    } catch (e) {
      // saving error
      console.log('storeData failed', e);
    }
  };
  const retrieveData = async title => {
    try {
      const value = await AsyncStorage.getItem(title);
      if (value !== null) {
        // We have data!!
        console.log('Value', value);
      }
    } catch (error) {
      // Error retrieving data
      console.log('Value: ', error);
    }
  };
  useEffect(() => {
    storeData('phoneNumber1', JSON.stringify(phoneNumber));
    retrieveData('phoneNumber1');
    console.log('phoneAuthcomponent');
  }, [phoneNumber]);
  if (authenticated)
    return (
      <Authenticated
        navigation={navigation}
        signOut={() => {
          auth().signOut();
          storeData('phoneNumber1', '');
          navigation.navigate('Home');
        }}
      />
    );

  if (confirm)
    return (
      <VerifyCode
        onSubmit={confirmVerificationCode}
        signIn={signIn}
        phoneNumber={phoneNumber}
      />
    );

  return (
    <PhoneNumber
      onSubmit={signIn}
      setPhoneNumber={setPhoneNumber}
      phoneNumber={phoneNumber}
    />
  );
};
