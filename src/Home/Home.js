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
export const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.text1}>Heyasa! Welcome</Text>
          <Text style={styles.text2}>
            You can save your money daily, weekly or monthly
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.text3}>I already have an account</Text>
          </TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View style={styles.flagGroup}>
            <Image
              style={styles.langImg}
              source={require('../assets/images/flags/us.png')}
            />
            <Image
              style={styles.langImg}
              source={require('../assets/images/flags/france.png')}
            />
          </View>
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
