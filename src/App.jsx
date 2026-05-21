
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/CartSlice"; // Import from the correct path
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/e-plantShopping">
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
