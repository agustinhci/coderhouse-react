import { CartProvider } from './context/CartContext'
import React from 'react';
import './App.css';
import './style.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart/Cart'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter >
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
