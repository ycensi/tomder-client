import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {CatList} from '../components/screens';
import {TabBar} from '../components/atoms/TabBar/TabBar';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const PlaceholderScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Comming soon</Text>
  </View>
);

export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <TabBar {...props} />}
        initialRouteName="Cats">
        <BottomTab.Screen name="Cats" component={CatList} />
        <BottomTab.Screen name="Messages" component={PlaceholderScreen} />
        <BottomTab.Screen name="User" component={PlaceholderScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
