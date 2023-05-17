import styled from "styled-components";

const PageTitle = styled.h2`
  font-family: var(--font-medium);
  font-size: 32px;
  line-height: 38px;
  color: var(--color-regular-white);
  margin: ${({ className }) => className === 'less-margin' ? '8px 0 16px' : '8px 0 24px'};
`;

export default PageTitle;