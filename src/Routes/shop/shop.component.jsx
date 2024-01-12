import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  const title = window.location.href.slice(
    window.location.href.lastIndexOf("/") + 1
  );

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category title={title} />} />
    </Routes>
  );
};

export default Shop;
