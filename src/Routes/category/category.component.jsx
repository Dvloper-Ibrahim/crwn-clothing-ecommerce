import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../Contexts/categories.context";
import ProductCard from "../../Components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h1 className="title">{category.toUpperCase()}</h1>

      <div className="body">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
