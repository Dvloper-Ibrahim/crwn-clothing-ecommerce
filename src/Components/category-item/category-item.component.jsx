import "./category-item.styles.scss";

export const CategoryItem = ({ item }) => {
  return (
    <div key={item.id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        alt=""
      />
      <div className="category-body-container">
        <h2>{item.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
