import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ShopProduct from './pages/ShopProduct'
import {Provider} from 'react-redux'
import store from './store/store';
// Router for easy navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Provider store = {store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/ShopProduct" element={<ShopProduct />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App
