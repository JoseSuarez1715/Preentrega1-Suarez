
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  {CartProvider}  from './context/CartContext';
import CartList from './components/CartList';


function App() {

  return (
    <><CartProvider>
      <BrowserRouter>
        
          <Navbar />

          <Routes>
          <Route exact path="/cart" element={<CartList />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:idcat" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
