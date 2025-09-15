// src/components/Header/Header.jsx
import { useState } from "react";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setIsControlsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsControlsOpen(false);
  };

  const toggleControls = () => {
    setIsControlsOpen(!isControlsOpen);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>E-Shop</h2>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => scrollToSection("products")}>
                Categories
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={`header-controls ${isControlsOpen ? "active" : ""}`}>
          <SearchBar onSearch={onSearch} />
          <ThemeToggle />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
