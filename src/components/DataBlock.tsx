import styled from "styled-components";

const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default DataBlock;