import styled from "styled-components";

const Category = styled.span`
  font-family: var(--font-regular);
  font-size: 16px;
  line-height: 20px;
  padding: 6px 12px;
  border-radius: 16px;
  color: ${({ className }) => className === 'active' ? 'var(--color-blue)' : 'var(--color-light-grey)'};
  background-color: var(--color-faint-light-grey);
  cursor: pointer;
`;

export default Category;