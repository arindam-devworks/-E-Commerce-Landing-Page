import "./ProductGrid.css";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${
            selectedCategory?.id === category.id ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
