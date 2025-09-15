import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to Our E-Shop</h1>
        <p>
          Discover the latest trends and find your perfect style with our
          curated collection of products.
        </p>
        <button
          className="cta-button"
          onClick={() =>
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
