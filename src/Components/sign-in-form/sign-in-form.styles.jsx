import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  .invalid {
    color: red;
    font-weight: bold;
    font-size: 1.1rem;
  }

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;

    & button:first-child {
      margin-bottom: 10px;
    }
  }
`;

// .sign-in-container {
//   display: flex;
//   flex-direction: column;
//   width: 380px;

//   h2 {
//     margin: 10px 0;
//   }

//   .buttons-container {
//     display: flex;
//     justify-content: space-between;
//   }

//   .invalid {
//     color: red;
//     font-weight: bold;
//     font-size: 1.1rem;
//   }
// }
