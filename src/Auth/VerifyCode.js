import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export const VerifyCode = ({onSubmit, signIn, phoneNumber}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <Text style={styles.text1}>OTP Verification</Text>
          <Text style={styles.text2}>
            An autherication code has been sent you.
          </Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            careHidden={false}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="numeric"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={styles.resend}>
            <Text style={styles.text3}>I didn't receive code.</Text>
            <TouchableOpacity>
              <Text style={styles.text4} onPress={() => signIn(phoneNumber)}>
                &nbsp;Resend code.
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onSubmit(value)}>
            <Text style={styles.buttonText}>Confirm OTP</Text>
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
  text2: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    color: '#555',
  },
  text3: {
    fontSize: 18,
    color: '#000000',
  },
  text4: {
    fontSize: 18,
    color: '#ff0000',
  },
  resend: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    width: '80%',
    marginTop: 50,
    marginBottom: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#2ab6b6',
  },
  focusCell: {
    borderColor: '#000',
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
