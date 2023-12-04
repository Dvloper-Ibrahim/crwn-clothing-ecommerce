import { CategoryItem } from "../category-item/category-item.component";

import "./directory.styles.scss";

export function Directory({ myCategories }) {
  return (
    <div className="directory-container">
      {myCategories.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </div>
  );
}
