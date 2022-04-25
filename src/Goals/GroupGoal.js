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
const chartConfig1 = {
  barPercentage: 0.4,
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 102, 98, ${opacity})`,
  strokeWidth: 8, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
};
const chartConfig3 = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(245, 182, 0, ${opacity})`,
  strokeWidth: 8, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
};
const chartConfig4 = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(115, 112, 252, ${opacity})`,
  strokeWidth: 8, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
};
const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Swim'], // optional
  data: [0.4],
};
const data1 = {
  labels: ['Run'], // optional
  data: [0.2],
};
const data3 = {
  labels: ['Swim'], // optional
  data: [0.8],
};
const data4 = {
  labels: ['Run'], // optional
  data: [0.5],
};

const dummyData = [
  {
    id: 0,
    fullName: 'Amr Masher',
  },
  {
    id: 1,
    fullName: 'John Doe',
  },
  {
    id: 2,
    fullName: 'Fed',
  },
  {
    id: 3,
    fullName: 'Smith',
  },
];
export const GroupGoal = ({navigation}) => {
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
            <View style={styles.overlayChart}>
              <ProgressChart
                data={data1}
                width={screenWidth}
                height={350}
                strokeWidth={20}
                radius={50}
                chartConfig={chartConfig1}
                hideLegend={true}
              />
            </View>
            <View style={styles.overlayChart}>
              <ProgressChart
                data={data3}
                width={screenWidth}
                height={350}
                strokeWidth={20}
                radius={80}
                chartConfig={chartConfig3}
                hideLegend={true}
              />
            </View>
            <View style={styles.overlayChart}>
              <ProgressChart
                data={data4}
                width={screenWidth}
                height={350}
                strokeWidth={20}
                radius={110}
                chartConfig={chartConfig4}
                hideLegend={true}
              />
            </View>
          </View>
          <Text style={styles.text4}>RM 450</Text>
          <Text style={styles.text5}>You</Text>
          <View style={styles.targetDetails}>
            <View style={styles.detail}>
              <Text style={styles.detailMain}>$1500</Text>
              <Text style={styles.detailDesc}>Target amount</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailMain}>July 2018</Text>
              <Text style={styles.detailDesc}>Target date</Text>
            </View>
          </View>
          <View style={styles.userDisplay}>
            {dummyData.map((item, id) => (
              <Text style={styles.userBadge} key={id}>
                {item.fullName.toUpperCase().slice(0, 2)}
              </Text>
            ))}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.buttonText}>Saving now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  text1: {
    fontSize: 28,
    color: '#000000',
  },
  text4: {
    fontWeight: 'bold',
    lineHeight: 35,
    fontSize: 28,
    padding: 0,
    textAlign: 'center',
    color: 'rgba(68, 207, 191, 1)',
    borderBottomColor: 'rgba(68, 207, 191, 1)',
    borderBottomWidth: 3,
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
    fontWeight: 'bold',
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
