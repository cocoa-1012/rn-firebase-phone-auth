import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(68, 207, 191, ${opacity})`,
  strokeWidth: 8, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const data = {
  labels: ['Swim'], // optional
  data: [0.4],
};

export const PersonalGoal = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.screen}>
          <View>
            <ProgressChart
              data={data}
              width={screenWidth}
              height={350}
              strokeWidth={20}
              radius={140}
              chartConfig={chartConfig}
              hideLegend={true}
            />
          </View>
          <Text style={styles.text2}>Iceland trip</Text>
          <Text style={styles.text4}>RM 840</Text>
          <View style={styles.targetDetails}>
            <View style={styles.detail}>
              <Text style={styles.detailMain}>RM 1500</Text>
              <Text style={styles.detailDesc}>Target amount</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailMain}>July 2018</Text>
              <Text style={styles.detailDesc}>Target date</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Saving now</Text>
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
    backgroundColor: 'none',
    minHeight: screenHeight,
  },
  text1: {
    fontSize: 28,
    color: '#000000',
  },
  text2: {
    fontSize: 18,
    color: '#000',
    fontWeight: '900',
    marginTop: 20,
    marginBottom: 50,
    borderBottomColor: 'rgba(68, 207, 191, 1)',
    borderBottomWidth: 3,
  },
  text4: {
    fontWeight: 'bold',
    lineHeight: 35,
    fontSize: 28,
    padding: 0,
    textAlign: 'center',
    color: '#000',
  },
  text5: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(68, 207, 191, 1)',
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
  overlayChart: {
    position: 'absolute',
  },
  targetDetails: {
    width: screenWidth * 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
  },
  detailMain: {
    fontWeight: '900',
    fontSize: 22,
    color: '#000',
  },
  userDisplay: {
    display: 'flex',
    flexDirection: 'row',
    width: screenWidth * 0.8,
    justifyContent: 'space-between',
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  userBadge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    width: 60,
    height: 60,
    backgroundColor: '#2ab616',
    borderRadius: 30,
    textAlign: 'center',
    margin: 0,
    textAlignVertical: 'center',
  },
});
