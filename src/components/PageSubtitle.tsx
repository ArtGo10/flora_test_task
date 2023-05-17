import styled from "styled-components";

const PageSubtitle = styled.h4`
  font-family: var(--font-regular);
  font-size: 14px;
  line-height: 20px;
  color: var(--color-blue);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export default PageSubtitle;