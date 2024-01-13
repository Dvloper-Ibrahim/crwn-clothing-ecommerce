import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 110px auto 0;

  @media (max-width: 991px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

// .authentication-container {
//   width: 900px;
//   display: flex;
//   justify-content: space-between;
//   margin: 30px auto;
// }
