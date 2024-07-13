import styled from "styled-components";

export const CartElementContainer = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;

    .total {
      font-weight: bold;
    }
  }
`;
