import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {SafeAreaView} from 'react-native-safe-area-context';

export const PhoneNumber = ({onSubmit, phoneNumber, setPhoneNumber}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  useEffect(() => {
    setIsLoading(false);
  });
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/phone/phone_number.jpg')}
          />
          <Text style={styles.text1}>Continue with Phone</Text>
          <Text style={styles.text}>
            You'll receive a 6 digit code to verify.
          </Text>
          <PhoneInput
            style={styles.inputPhone}
            defaultValue={value}
            defaultCode="CM"
            layout="second"
            onChangeText={setPhoneNumber}
            onChangeFormattedText={text => {
              setFormattedValue(text);
              setPhoneNumber(text);
            }}
            placeholder="Phone Number"
            disableArrowIcon
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSubmit(formattedValue);
              setIsLoading(true);
            }}>
            <Text style={styles.buttonText}>
              {isLoading ? (
                <ActivityIndicator size="large" color="yellow" />
              ) : (
                'Continue'
              )}
            </Text>
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
  text1: {
    marginTop: 60,
    fontSize: 28,
    color: '#000000',
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
  inputPhone: {
    fontSize: 32,
    backgroundColor: 'red',
  },
});
