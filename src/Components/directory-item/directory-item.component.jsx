import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

export const DirectoryItem = ({ item }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(item.route);

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
