import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";
const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} category={{ title, id, imageUrl }} />
      ))}
    </div>
  );
};

export default Categories;
