import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {apiService} from '../../../services';
import {CatCard} from '../../molecules';
import styles from './styles';

interface Cat {
  id: string;
  name: string;
  origin: string;
  image: {
    url: string;
  };
  dog_friendly: number;
}

export const CatStack = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const loadCats = async () => {
      const catsResponse = await apiService.get<Cat[]>('breeds');
      setCats(catsResponse.data);
    };
    loadCats();
  });

  const onLike = () => {};

  const onDislike = () => {};

  return (
    <View style={styles.container}>
      <CardStack style={styles.content} verticalSwipe={false}>
        {cats.map(cat => (
          <Card
            key={cat.id}
            style={styles.card}
            onSwipedLeft={onDislike}
            onSwipedRight={onLike}>
            <CatCard
              age={cat.dog_friendly}
              name={cat.name}
              origin={cat.origin}
              imageUri={cat.image?.url}
            />
          </Card>
        ))}
      </CardStack>
    </View>
  );
};
