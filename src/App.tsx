import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Weather from './Weather';
import './App.css';

const queryClient = new QueryClient();

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  </QueryClientProvider>
);

export default App;
