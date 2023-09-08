import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BookListScreen} from './screens/BookListScreen';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BookListScreen />
    </QueryClientProvider>
  );
};

export default App;
