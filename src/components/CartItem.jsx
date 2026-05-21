
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart,
  );

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty 🌱</h2>
          <p>Start adding some beautiful plants to your collection!</p>
          <button
            className="continue-btn"
            onClick={() => navigate("/products")}
            style={{ marginTop: "1rem" }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart ({totalQuantity} items)</h1>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />

            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">Unit Price: ${item.price}</div>
              <div>Total: ${item.totalPrice.toFixed(2)}</div>
            </div>

            <div className="cart-item-quantity">
              <button
                className="quantity-btn"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                -
              </button>
              <span style={{ minWidth: "40px", textAlign: "center" }}>
                {item.quantity}
              </span>
              <button
                className="quantity-btn"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>

            <button
              className="delete-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">Total Amount: ${totalAmount.toFixed(2)}</div>
        <div className="cart-actions">
          <button
            className="continue-btn"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
          <button
            className="checkout-btn"
            onClick={() => {
              alert("Thank you for your purchase! 🌿");
              dispatch(clearCart());
              navigate("/");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
