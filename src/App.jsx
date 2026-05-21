import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/CartSlice';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

// Welcome Component with Get Started Button
function WelcomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">🌿 Welcome to Paradise Nursery 🌿</h1>
        <p className="welcome-subtitle">
          Your one-stop destination for beautiful, healthy houseplants
        </p>
        <div className="welcome-description">
          <p>
            Discover our curated collection of aromatic and medicinal plants 
            that will transform your living space into a green sanctuary.
          </p>
          <p>
            From calming Lavender to healing Aloe Vera, we have the perfect 
            plant companion waiting for you.
          </p>
        </div>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started 🌱
        </button>
        <div className="welcome-features">
          <div className="welcome-feature">
            <span>🌿</span>
            <span>Premium Quality</span>
          </div>
          <div className="welcome-feature">
            <span>🚚</span>
            <span>Free Delivery</span>
          </div>
          <div className="welcome-feature">
            <span>💚</span>
            <span>Plant Care Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router basename="/e-plantShopping">
        <div className="background-image">
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
