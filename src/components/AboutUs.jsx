
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="hero">
        <h1>🌿 Paradise Nursery</h1>
        <p>Bringing nature's beauty into your home, one plant at a time</p>
        <button className="shop-button" onClick={() => navigate("/products")}>
          🌱 Shop Now
        </button>
      </div>

      <div className="features">
        <div
          style={{ textAlign: "center", color: "white", marginBottom: "3rem" }}
        >
          <h2>Why Choose Us?</h2>
          <p style={{ marginTop: "1rem" }}>
            Premium quality plants delivered to your doorstep
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            color: "white",
          }}
        >
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem" }}>🌱</div>
            <h3>Healthy Plants</h3>
            <p>All plants are nurtured with care</p>
          </div>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem" }}>🚚</div>
            <h3>Free Delivery</h3>
            <p>On orders above $50</p>
          </div>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem" }}>💚</div>
            <h3>24/7 Support</h3>
            <p>We're here to help you grow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
