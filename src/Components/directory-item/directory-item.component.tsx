import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { Category } from "../../Store/categories/category.types";

type DirectoryItemProps = {
  item: Category;
};

export const DirectoryItem: FC<DirectoryItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(item.route as string);

  return (
    <DirectoryItemContainer key={item.id} onClick={onNavigateHandler}>
      <BackgroundImage imageurl={item.imageUrl} />
      <Body>
        <h2>{item.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
