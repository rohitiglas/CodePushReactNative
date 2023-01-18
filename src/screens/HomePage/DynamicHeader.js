import * as React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Header_Max_Height = 200;
const Header_Min_Height = 70;

export default function DynamicHeader({animHeaderValue}) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  console.log('animateHeaderBackgroundColor', animateHeaderBackgroundColor);

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}>
      {animateHeaderHeight === 70 ? (
        <>
          <Text style={styles.headerText}>Rohit</Text>
          <Text style={styles.headerText}>Mukul</Text>
          <Text style={styles.headerText}>Raj</Text>
          <Text style={styles.headerText}>Rohan</Text>
          <Text style={styles.headerText}>Faraj</Text>
          <Text style={styles.headerText}>Asish</Text>
        </>
      ) : (
        <>
          <Text style={styles.headerText}>Rohit</Text>
        </>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
