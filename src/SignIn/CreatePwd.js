import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const CreatePwd = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [repwd, setRepwd] = useState('');
  const [pwd, setPwd] = useState('');
  const [isSame, setIsSame] = useState(true);
  const inputRef = useRef(null);

  const retrieveData = async title => {
    try {
      const value = await AsyncStorage.getItem(title);
      if (value !== null) {
        // We have data!!
        console.log('Value', value);
        setPhoneNumber(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log('Value: ', error);
    }
  };

  const storePwd = () => {
    if (pwd != '' && isSame) {
      firestore()
        .collection('Users')
        .add({
          phoneNumber: phoneNumber,
          password: pwd,
        })
        .then(() => {
          console.log('User added!');
        });
      navigation.navigate('SignIn');
    } else {
      alert('please confirm your pwd');
    }
  };

  useEffect(() => {
    repwd === pwd ? setIsSame(true) : setIsSame(false);
    retrieveData('phoneNumber1');
  }, [repwd]);
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/sign/pwd.png')}
          />
          <Text style={styles.text1}>Create Passwords</Text>
          <Text style={styles.text2}>Enter your new Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPwd}
            value={pwd}
            placeholder="Enter your password"
          />

          <Text style={styles.text2}>Confirm your new Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setRepwd}
            value={repwd}
            placeholder="Repeat your password"
          />
          {!isSame && (
            <Text style={styles.text4}>
              Confirm password should be the same.
            </Text>
          )}
          <TouchableOpacity style={styles.button} onPress={() => storePwd()}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    marginTop: 50,
    marginBottom: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text1: {
    fontSize: 28,
    color: '#000000',
  },
  text2: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    color: '#555',
  },
  text3: {
    marginTop: 30,
    marginBottom: 50,
    fontSize: 18,
    color: '#000000',
  },
  text4: {
    color: 'red',
  },
  flagGroup: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  langImg: {
    margin: 15,
    width: 32,
    height: 20,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#2ab6b6',
    margin: 40,
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
