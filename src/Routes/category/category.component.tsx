import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../Store/categories/category.selector";

import ProductCard from "../../Components/product-card/product-card.component";
import Spinner from "../../Components/spinner/spinner.component";

import { CategoryBody, CategoryTitle } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container" style={{ marginTop: "100px" }}>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryBody>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryBody>
      )}
    </div>
  );
};

export default Category;
