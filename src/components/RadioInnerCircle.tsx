import styled from "styled-components";

const RadioInnerCircle = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${({ className }) => className === 'active' ? 'var(--color-blue)' : 'var(--color-dark-grey)'};
  border-radius: 50%;
`;

export default RadioInnerCircle;