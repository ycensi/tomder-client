import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';

interface CatCardProps {
  name: string;
  age: number;
  imageUri?: string;
  origin: string;
}

export const CatCard = ({age, imageUri, name, origin}: CatCardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{uri: imageUri}}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.image}>
        <View style={styles.information}>
          <View style={styles.mainInfo}>
            <Text style={styles.mainLabel}>{name}</Text>
            <Text style={styles.mainLabel}>{age}</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>{origin}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
