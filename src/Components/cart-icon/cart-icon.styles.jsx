import styled from "styled-components";

import { ReactComponent as ShippingSvg } from "../../Assets/shopping-bag.svg";

export const ShippingIcon = styled(ShippingSvg)`
  width: 50px;
  height: 50px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 8px;
`;

// .cart-icon-container {

//   .shopping-icon {

//   }

//   .item-count {

//   }
// }
