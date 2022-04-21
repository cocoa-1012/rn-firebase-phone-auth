import auth from '@react-native-firebase/auth';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Authenticated} from './Authenticated';
import {PhoneNumber} from './PhoneNumber';
import {VerifyCode} from './VerifyCode';

const Stack = createNativeStackNavigator();

export const PhoneAuth = ({navigation}) => {
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
    console.log('phone auth user');
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) return <Authenticated navigation={navigation} />;

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  return <PhoneNumber onSubmit={signIn} />;
};
