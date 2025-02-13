const HeroSection = () => {

  return <main className="hero container">
    <div className="hero-content">
      <h1>Give Your Feet the Comfort They Deserve</h1>
      <p>Treat your feet to the ultimate comfort and style with our premium shoes. We're here to ensure your feet feel their best with every step you take.</p>
    
    <div className="hero-btn">
      <button >Buy Now</button>
      <button className="secondary-btn">Categories</button>
    </div>

    <div className="shopping">
      <p>Also Available On</p>
    <div className="brand-icons"> 
        <img src="/images/amazon.png" alt="amazon-logo" />
        <img src="/images/flipkart.png" alt="flipkart-logo" />
    </div>
    </div>
    </div>
    <div className="hero-image">
    <img src="/images/hero-image.png" alt="hero-image" />
    </div>
  </main>;
};

export default HeroSection;