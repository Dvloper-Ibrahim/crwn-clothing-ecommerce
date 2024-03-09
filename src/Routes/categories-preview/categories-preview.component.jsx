import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../Store/categories/category.selector";
import CategoryPreview from "../../Components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
