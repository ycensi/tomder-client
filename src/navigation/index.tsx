import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {CatList} from '../components/screens';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const PlaceholderScreen = () => (
  <View style={{flex: 1}}>
    <Text>Tomder</Text>
  </View>
);

export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MainTab">
        <BottomTab.Screen name="MainTab" component={CatList} />
        <BottomTab.Screen name="TabTwo" component={PlaceholderScreen} />
        <BottomTab.Screen name="TabThree" component={PlaceholderScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
