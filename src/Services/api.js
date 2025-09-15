// src/services/api.js
export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?limit=20"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
