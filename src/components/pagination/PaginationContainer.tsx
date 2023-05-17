import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 54px auto 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    width: 260px;
    padding: 42px;
    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 1px 0px 0px #2D3232;
  }
`;

export default PaginationContainer