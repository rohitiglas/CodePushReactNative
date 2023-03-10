import React from 'react';
import {StatusBar} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LoadAssets,
  StyleGuide,
  assets as componentAssets,
} from './src/components';
// import Episodes, {episodes} from './src/Episodes';
// import Things from './src/Things';
// import Chrome, {assets as chromeAssets} from './src/Chrome';
// import LiquidSwipe, {assets as liquidSwipeAssets} from './src/LiquidSwipe';
import UberEats, {
  assets as uberEatsAssets,
  fonts as uberEatsFonts,
} from './src/UberEats';
import iPod, {fonts as ipodFonts} from './src/iPod';
// import AppleActivity from './src/AppleActivity';
// import CoinbasePro from './src/CoinbasePro';
// import Instagram from './src/Instagram';
// import Airbnb, {
//   assets as airbnbAssets,
//   fonts as airbnbFonts,
// } from './src/Airbnb';
// import WhatsApp, {assets as whatsAppAssets} from './src/WhatsApp';
// import Hue from './src/Hue';
// import UberEatsSwipe, {assets as uberEatsAssets2} from './src/UberEatsSwipe';

enableScreens();

// const fonts = {...uberEatsFonts, ...ipodFonts, ...airbnbFonts};
// const assets: number[] = [
//   ...episodes.map(episode => episode.icon),
//   ...liquidSwipeAssets,
//   ...chromeAssets,
//   ...uberEatsAssets,
//   ...uberEatsAssets2,
//   ...airbnbAssets,
//   ...componentAssets,
//   ...whatsAppAssets,
// ];

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UberEats">
        {/* <Stack.Screen
          name="Episodes"
          component={Episodes}
          options={{title: 'Can it be done in React Native?'}}
        />
        <Stack.Screen
          name="Airbnb"
          component={Airbnb}
          options={{title: 'Airbnb', header: () => null}}
        />
        <Stack.Screen
          name="LiquidSwipe"
          component={LiquidSwipe}
          options={{title: 'LiquidSwipe', header: () => null}}
        />
        <Stack.Screen
          name="Things"
          component={Things}
          options={{title: 'Things', header: () => null}}
        />
        <Stack.Screen
          name="Chrome"
          component={Chrome}
          options={{title: 'Chrome', header: () => null}}
        /> */}
        <Stack.Screen
          name="UberEats"
          component={UberEats}
          options={{title: 'UberEats', header: () => null}}
        />
        {/* <Stack.Screen
          name="iPod"
          component={iPod}
          options={{title: 'iPod', header: () => null}}
        />
        <Stack.Screen
          name="AppleActivity"
          component={AppleActivity}
          options={{title: 'AppleActivity', header: () => null}}
        />
        <Stack.Screen
          name="CoinbasePro"
          component={CoinbasePro}
          options={{title: 'CoinbasePro', header: () => null}}
        />
        <Stack.Screen
          name="Instagram"
          component={Instagram}
          options={{title: 'Instagram', header: () => null}}
        />
        <Stack.Screen
          name="Hue"
          component={Hue}
          options={{title: 'Hue', header: () => null}}
        />
        <Stack.Screen
          name="WhatsApp"
          component={WhatsApp}
          options={{title: 'WhatsApp', header: () => null}}
        />
        <Stack.Screen
          name="UberEatsSwipe"
          component={UberEatsSwipe}
          options={{title: 'UberEatsSwipe', header: () => null}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const AppNavigator = createAppContainer(
//   createStackNavigator(
//     {
//       Episodes: {
//         screen: Episodes,
//         navigationOptions: {
//           title: 'Can it be done in React Native?',
//         },
//       },
//       Airbnb: {
//         screen: Airbnb,
//         navigationOptions: {
//           title: 'Airbnb',
//           header: () => null,
//         },
//       },
//       LiquidSwipe: {
//         screen: LiquidSwipe,
//         navigationOptions: {
//           title: 'Liquid Swipe',
//         },
//       },
//       Things: {
//         screen: Things,
//         navigationOptions: {title: 'Things'},
//       },
//       Chrome: {
//         screen: Chrome,
//         navigationOptions: {title: 'Google Chrome'},
//       },
//       UberEats: {
//         screen: UberEats,
//         navigationOptions: {
//           title: 'Uber Eats',
//           header: () => null,
//         },
//       },
//       iPod: {
//         screen: iPod,
//         navigationOptions: {
//           title: 'iPod Classic',
//           header: () => null,
//         },
//       },
//       AppleActivity: {
//         screen: AppleActivity,
//         navigationOptions: {
//           title: 'Activity Rings',
//         },
//       },
//       CoinbasePro: {
//         screen: CoinbasePro,
//         navigationOptions: {
//           title: 'Coinbase Pro',
//           header: () => null,
//         },
//       },
//       Instagram: {
//         screen: Instagram,
//         navigationOptions: {
//           title: 'Instagram',
//           header: () => null,
//         },
//       },
//       Hue: {
//         screen: Hue,
//         navigationOptions: {
//           title: 'Hue',
//           header: () => null,
//         },
//       },
//       WhatsApp: {
//         screen: WhatsApp,
//         navigationOptions: {
//           title: 'WhatsApp',
//         },
//       },
//       UberEatsSwipe: {
//         screen: UberEatsSwipe,
//         navigationOptions: {
//           title: 'Uber Eats Swipe-to-Delete',
//           header: () => null,
//         },
//       },
//     },
//     {
//       defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: StyleGuide.palette.primary,
//           borderBottomWidth: 0,
//         },
//         headerTintColor: 'white',
//       },
//     },
//   ),
// );

export default () => (
  <LoadAssets>
    <StatusBar barStyle="light-content" />
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  </LoadAssets>
);
