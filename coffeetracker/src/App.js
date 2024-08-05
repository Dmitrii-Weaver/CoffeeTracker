import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import DefaultPage from './pages/DefaultPage';
import { Navigate, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element={<DefaultPage/>}></Route>
    </Routes>
  );
}

export default App;
