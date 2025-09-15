// src/App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductGrid from "./components/Products/ProductGrid";
import CategoryFilter from "./components/Products/CategoryFilter";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import { fetchProducts, fetchCategories } from "./services/api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    let result = products;

    // Filter by category
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category.id === selectedCategory.id
      );
    }

    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearch) ||
          product.description.toLowerCase().includes(lowerSearch)
      );
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, searchTerm]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <Hero />
      <main>
        <section id="products" className="products-section">
          <div className="container">
            <h2>Our Products</h2>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
            <ProductGrid products={filteredProducts} />
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
