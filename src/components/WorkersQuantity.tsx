import styled from "styled-components";

const WorkersQuantity = styled.span`
  width: 200px;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: var(--color-dark-grey);
  border: 1px solid var(--color-input-border);
  color: var(--color-regular-white);
  font-family: var(--font-regular);
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    width: 150px;
  }
`;

export default WorkersQuantity;