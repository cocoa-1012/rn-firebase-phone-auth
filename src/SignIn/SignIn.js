import React, {useState} from 'react';
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
  const [text, onChangeText] = useState('');
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
            onChangeText={onChangeText}
            value={text}
            placeholder="Your Phone Number"
          />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeText}
            // value={text}
            placeholder="Your Password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
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
