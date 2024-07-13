import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 800px;
  min-height: 90vh;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  margin: 50px auto 0;
  overflow: auto;

  table {
    min-width: 900px;
    width: 100%;
  }

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: fit-content;
      //   width: 23%;

      //   &:last-child {
      //     width: 8%;
      //   }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    display: block;
    text-align: right;
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;

// .checkout-container {
//   width: 800px;
//   min-height: 90vh;
//   display: flex;
//   // flex-direction: column;
//   // align-items: center;
//   margin: 50px auto 0;
//   overflow: auto;

//   table {
//     min-width: 900px;
//     width: 100%;
//   }

//   .checkout-header {
//     width: 100%;
//     padding: 10px 0;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid darkgrey;

//     .header-block {
//       text-transform: capitalize;
//       width: fit-content;
//       //   width: 23%;

//       //   &:last-child {
//       //     width: 8%;
//       //   }
//     }
//   }

//   .total {
//     margin-top: 30px;
//     margin-left: auto;
//     font-size: 36px;
//     display: block;
//     text-align: right;
//   }

//   @media (max-width: 991px) {
//     width: 100%;
//   }
// }
/////////////////////////////////////////////////
// .checkout-container {
//   width: 60%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;

//   .checkout-header {
//     width: 100%;
//     padding: 10px 0;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid darkgrey;

//     .header-block {
//       text-transform: capitalize;
//       width: fit-content;
//       //   width: 23%;

//       //   &:last-child {
//       //     width: 8%;
//       //   }
//     }
//   }

//   .total {
//     margin-top: 30px;
//     margin-left: auto;
//     font-size: 36px;
//   }
// }
