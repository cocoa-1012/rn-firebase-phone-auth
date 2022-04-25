import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Authenticated = ({navigation, signOut}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/phone/phone_success.png')}
          />
          <Text style={styles.text1}>Verification Successful</Text>
          <Text style={styles.text2}>
            Congress! you are verified member. You can login your registered
            phone number and password to gain your account
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreatePwd')}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          {/* <Text style={styles.text3} onPress={() => signOut()}>
            Sign out
          </Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: 50,
    marginBottom: 30,
  },
  text1: {
    marginTop: 60,
    fontSize: 28,
    color: '#000000',
  },
  text2: {
    fontSize: 20,
    padding: 25,
    margin: 20,
    lineHeight: 32,
    textAlign: 'center',
    color: '#555',
  },
  text3: {
    fontSize: 20,
    padding: 25,
    lineHeight: 32,
    textAlign: 'center',
    color: '#555',
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
