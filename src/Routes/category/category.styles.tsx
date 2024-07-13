import styled from "styled-components";

export const CategoryBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  //   grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

// .category-container {
// .body {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   //   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
// }

//   .title {
//     font-size: 38px;
//     margin-bottom: 25px;
//     text-align: center;
//   }
// }
