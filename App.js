import { StatusBar } from 'expo-status-bar';
import Home from './src/Screens/Home'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}
