import React, {useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {GET_BOOKS} from '../services/BookService.constant';
import {BookService} from '../services/BookService';
import {BookItem} from '../services/BookService.types';
import {Spacer} from '../components/Spacer';
import {BookCard} from '../components/BookCard';
import {bookListFilter} from '../utils/bookListFilter';

export const BookListScreen: React.FC = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: [GET_BOOKS],
    queryFn: BookService.getBooks,
    initialData: [],
  });

  const [search, setSearch] = useState('');

  const filteredData = bookListFilter(data, search);

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholder="Search by title and subject"
      />
      {isLoading && (
        <View style={styles.centralizeContent}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
      {isError && (
        <View style={styles.centralizeContent}>
          <Text>An error happened</Text>
        </View>
      )}
      {!isLoading && !isError && (
        <FlatList<BookItem>
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <BookCard bookData={item} />}
          ItemSeparatorComponent={Spacer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },

  centralizeContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    // height: 50,
    // width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: '#777777',
    borderWidth: 1.5,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
