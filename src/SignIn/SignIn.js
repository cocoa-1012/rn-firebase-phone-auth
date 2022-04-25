import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
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

export const SignIn = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [dataList, setDataList] = useState();
  const [canLog, setCanLog] = useState(false);
  const getInfo = async () => {
    console.log('Getinfo started');
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        let tt = [];
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          tt.push(documentSnapshot.data());
          console.log('tt: ', documentSnapshot.id, documentSnapshot.data());
        });
        setDataList(tt);
        console.log('get info datalist', tt);
      });
  };

  const signIn = () => {
    console.log('clicked signin button', dataList);
    if (dataList) {
      Object.values(dataList).map(item =>
        item.phoneNumber == phoneNumber && item.password == password
          ? // ? setCanLog(true)
            navigation.navigate('PersonalGoal')
          : console.log('SFS'),
      );
      console.log('Is include', canLog);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/sign/signin.png')}
          />
          <Text style={styles.text1}>Signin</Text>
          <Text style={styles.text2}>Create your bank account in easy way</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="Your Phone Number"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Your Password"
          />
          <TouchableOpacity style={styles.button} onPress={() => signIn()}>
            <Text style={styles.buttonText}>Sign In</Text>
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
