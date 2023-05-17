import styled from "styled-components";

const BulletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default BulletWrapper;