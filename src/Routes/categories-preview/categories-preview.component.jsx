import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../Contexts/categories.context";
import CategoryPreview from "../../Components/category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div style={{ marginTop: "100px" }}>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
