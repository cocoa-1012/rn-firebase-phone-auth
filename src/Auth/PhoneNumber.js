import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {SafeAreaView} from 'react-native-safe-area-context';

export const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  useEffect(() => {
    console.log('aaaa', phoneNumber, formattedValue);
  });
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/phone/phone_number.jpg')}
          />
          <Text style={styles.text}>
            You'll receive a 4 digit code to verify next.
          </Text>
          <PhoneInput
            defaultValue={value}
            defaultCode="CM"
            layout="second"
            onChangeText={setPhoneNumber}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            placeholder="Phone Number"
            disableArrowIcon
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('Alert Title');
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffdc3d',
    margin: 40,
    padding: 15,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});
