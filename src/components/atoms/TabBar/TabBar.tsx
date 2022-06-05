import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const tabCat = require('../../../assets/icons/tab-cat.png');
const tabMessages = require('../../../assets/icons/tab-message.png');
const tabUser = require('../../../assets/icons/tab-user.png');

const tabIconMap = {
  Cats: tabCat,
  Messages: tabMessages,
  User: tabUser,
};

type RouteName = 'Cats' | 'Messages' | 'User';

interface TabBarIconProps {
  routeName: RouteName;
  onPress: () => void;
  active: boolean;
}

const TabBarIcon = ({routeName, onPress, active}: TabBarIconProps) => (
  <TouchableOpacity style={styles.tabBarIcon} onPress={onPress}>
    <Image
      source={tabIconMap[routeName]}
      style={[styles.icon, active ? styles.activeIcon : {}]}
    />
  </TouchableOpacity>
);

export const TabBar = ({navigation}: BottomTabBarProps) => {
  const {routes, index: activeRouteIndex} = navigation.getState();
  const {navigate} = navigation;
  return (
    <View style={styles.tabBarWrapper}>
      <View style={styles.tabBar}>
        {routes.map((route, routeIndex) => (
          <TabBarIcon
            routeName={route.name as RouteName}
            onPress={() => {
              navigate(route.name);
            }}
            active={activeRouteIndex === routeIndex}
          />
        ))}
      </View>
    </View>
  );
};
