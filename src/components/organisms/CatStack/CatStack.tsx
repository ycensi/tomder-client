import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {apiService} from '../../../services';
import {ActionButton} from '../../atoms/ActionButton/ActionButton';
import {CatCard} from '../../molecules';
import styles from './styles';

interface Cat {
  id: string;
  name: string;
  origin: string;
  image: {
    url: string;
    id: string;
  };
  dog_friendly: number;
}

export const CatStack = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const stackRef = useRef<CardStack>(null);

  useEffect(() => {
    const loadCats = async () => {
      const catsResponse = await apiService.get<Cat[]>('breeds');
      setCats(catsResponse.data);
    };
    loadCats();
  });

  const onLike = async (index: number) => {
    await vote(index, true);
  };
  const onDislike = async (index: number) => {
    await vote(index, false);
  };

  const vote = async (catIndex: number, like: boolean) => {
    const cat = cats[catIndex];
    await apiService.post('votes', {
      image_id: cat.image.id,
      value: like ? 1 : 0,
    });
  };

  return (
    <View style={styles.container}>
      <CardStack
        ref={stackRef}
        style={styles.content}
        renderNoMoreCards={() => null}
        verticalSwipe={false}
        onSwipedLeft={onDislike}
        onSwipedRight={onLike}>
        {cats.map(cat => (
          <Card key={cat.id} style={styles.card}>
            <CatCard
              age={cat.dog_friendly}
              name={cat.name}
              origin={cat.origin}
              imageUri={cat.image?.url}
            />
          </Card>
        ))}
      </CardStack>
      <View style={styles.actions}>
        <ActionButton
          type="dislike"
          onPress={() => {
            stackRef.current?.swipeLeft();
          }}
        />
        <ActionButton
          type="like"
          onPress={() => {
            stackRef.current?.swipeRight();
          }}
        />
      </View>
    </View>
  );
};
