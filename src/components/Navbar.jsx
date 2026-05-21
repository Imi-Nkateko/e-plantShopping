
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🌿 <span>Paradise Nursery</span>
        </div>
        <div className="nav-links">
          <Link to="/">About Us</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart" className="cart-icon">
            🛒 Cart
            {totalQuantity > 0 && (
              <span className="cart-count">{totalQuantity}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
