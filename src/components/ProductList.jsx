
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const plantsData = {
  aromatic: [
    {
      id: 1,
      name: "Lavender",
      description: "Calming purple blooms with soothing fragrance",
      price: 24.99,
      image: "https://placehold.co/400x300/9b59b6/white?text=Lavender",
    },
    {
      id: 2,
      name: "Rosemary",
      description: "Fragrant herb perfect for cooking and aromatherapy",
      price: 19.99,
      image: "https://placehold.co/400x300/27ae60/white?text=Rosemary",
    },
    {
      id: 3,
      name: "Mint",
      description: "Refreshing aroma, great for teas and cocktails",
      price: 15.99,
      image: "https://placehold.co/400x300/2ecc71/white?text=Mint",
    },
    {
      id: 4,
      name: "Jasmine",
      description: "Sweet evening fragrance with white star-shaped flowers",
      price: 29.99,
      image: "https://placehold.co/400x300/f1c40f/white?text=Jasmine",
    },
  ],
  medicinal: [
    {
      id: 5,
      name: "Aloe Vera",
      description: "Healing gel for burns and skin care",
      price: 22.99,
      image: "https://placehold.co/400x300/27ae60/white?text=Aloe+Vera",
    },
    {
      id: 6,
      name: "Tulsi (Holy Basil)",
      description: "Immunity booster and stress reliever",
      price: 18.99,
      image: "https://placehold.co/400x300/2ecc71/white?text=Tulsi",
    },
    {
      id: 7,
      name: "Peppermint",
      description: "Digestive aid and headache relief",
      price: 16.99,
      image: "https://placehold.co/400x300/27ae60/white?text=Peppermint",
    },
    {
      id: 8,
      name: "Chamomile",
      description: "Promotes sleep and reduces anxiety",
      price: 21.99,
      image: "https://placehold.co/400x300/f39c12/white?text=Chamomile",
    },
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(
      addToCart({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        quantity: 1,
        image: plant.image,
      }),
    );
  };

  return (
    <div className="landing">
      <div
        className="hero"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <h1>Our Beautiful Collection</h1>
        <p>Choose the perfect plant for your home</p>
      </div>

      <div className="section">
        <h2 className="section-title">🌿 Aromatic Plants</h2>
        <div className="products-grid">
          {plantsData.aromatic.map((plant) => (
            <div key={plant.id} className="product-card">
              <img
                src={plant.image}
                alt={plant.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <div className="product-price">${plant.price}</div>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">🌱 Medicinal Plants</h2>
        <div className="products-grid">
          {plantsData.medicinal.map((plant) => (
            <div key={plant.id} className="product-card">
              <img
                src={plant.image}
                alt={plant.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <div className="product-price">${plant.price}</div>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
