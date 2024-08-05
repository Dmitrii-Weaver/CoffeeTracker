import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import DefaultPage from './pages/DefaultPage';

function App() {
  return (
    <ChakraProvider>
      <DefaultPage/>
    </ChakraProvider>
  );
}

export default App;
