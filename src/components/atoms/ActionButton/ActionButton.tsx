import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const likeIcon = require('../../../assets/icons/like.png');
const dislikeIcon = require('../../../assets/icons/dislike.png');

interface ActionButtonProps {
  type: 'like' | 'dislike';
  onPress: () => void;
}

const iconTypeMap = {
  like: likeIcon,
  dislike: dislikeIcon,
};

export const ActionButton = ({onPress, type}: ActionButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={iconTypeMap[type]}
        resizeMode="contain"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
