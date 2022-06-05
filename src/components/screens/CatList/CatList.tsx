import React from 'react';
import {View} from 'react-native';
import {CatStack} from '../../organisms';
import styles from './styles';

export const CatList = () => {
  return (
    <View style={styles.container}>
      <CatStack />
    </View>
  );
};
