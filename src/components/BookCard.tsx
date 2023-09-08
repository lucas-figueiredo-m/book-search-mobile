import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BookItem} from '../services/BookService.types';

type BookCardProps = {
  bookData: BookItem;
};

export const BookCard: React.FC<BookCardProps> = ({bookData}) => {
  return (
    <View style={styles.root}>
      <Text>{bookData.title}</Text>
      <Text>{bookData.publisher}</Text>
      <Text>{bookData.subject.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 10,
  },
});
