
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>      
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route exact path="/category/:id" element={<ItemListContainer/>} />
      <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
