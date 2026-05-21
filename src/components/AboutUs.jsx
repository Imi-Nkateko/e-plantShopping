import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>🌿 Paradise Nursery</h1>
        <p>Bringing nature's beauty into your home, one plant at a time</p>
        <button className="shop-button" onClick={() => navigate('/products')}>
          🌱 Shop Now
        </button>
      </div>

      {/* Company Introduction */}
      <div className="company-intro">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, Paradise Nursery began with a simple mission: to make the joy of indoor gardening 
          accessible to everyone. What started as a small passion project in a backyard greenhouse has grown 
          into a thriving online plant shop serving thousands of happy plant parents across the country.
        </p>
        <p>
          We believe that plants are more than just decorations – they're living companions that purify our air, 
          boost our mood, and connect us to nature. Our carefully curated collection features only the healthiest, 
          most resilient houseplants that will thrive in your home.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mission-section">
        <div className="mission-content">
          <h2>🌍 Our Mission</h2>
          <p>
            To inspire and empower people to create greener, healthier living spaces by providing 
            exceptional quality plants, expert guidance, and sustainable practices.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌱</div>
            <h3>Premium Quality Plants</h3>
            <p>All our plants are sourced from trusted, sustainable growers and carefully inspected before shipping.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>Free Delivery</h3>
            <p>Enjoy free shipping on all orders over $50. We deliver nationwide with care and speed.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💚</div>
            <h3>Plant Care Support</h3>
            <p>Our expert team provides lifetime plant care guidance. We're here to help your plants thrive!</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>30-Day Guarantee</h3>
            <p>Not satisfied? We offer a full refund or replacement within 30 days of purchase.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Plant Parents Love Us</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-emoji">🏆</span>
            <h3>Award-Winning Service</h3>
            <p>Rated 4.9/5 by over 10,000 happy customers</p>
          </div>
          <div className="feature">
            <span className="feature-emoji">🌿</span>
            <h3>100% Eco-Friendly</h3>
            <p>Sustainable packaging and biodegradable pots</p>
          </div>
          <div className="feature">
            <span className="feature-emoji">📦</span>
            <h3>Secure Shipping</h3>
            <p>Specialized plant packaging for safe delivery</p>
          </div>
          <div className="feature">
            <span className="feature-emoji">⭐</span>
            <h3>Expert Curation</h3>
            <p>Each plant hand-selected by horticulturists</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Absolutely love my new Monstera! It arrived healthy and has already grown three new leaves. The care guide was super helpful!"</p>
            <div className="customer">
              <strong>Sarah M.</strong>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Best online plant shopping experience ever. The packaging was genius - my plant arrived in perfect condition. Will definitely order again!"</p>
            <div className="customer">
              <strong>David K.</strong>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Their customer service is amazing! Helped me choose the perfect low-light plants for my apartment. Highly recommend!"</p>
            <div className="customer">
              <strong>Emma L.</strong>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Start Your Plant Journey?</h2>
        <p>Join thousands of happy plant parents and transform your space into a green sanctuary</p>
        <button className="cta-button" onClick={() => navigate('/products')}>
          Explore Our Collection →
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
