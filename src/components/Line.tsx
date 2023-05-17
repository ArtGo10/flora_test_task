import styled from "styled-components";

const Line = styled.span`
  width: 40px;
  height: 1px;
  background-color: ${({ className }) => className === 'passed' ? 'var(--color-blue)' : 'var(--color-faint-white)'};

  @media screen and (min-width: 1440px) {
    width: 1px;
    height: 25px;
    margin-left: 11.5px;
    visibility: ${({ className }) => className === 'passed' ? 'visible' : 'hidden'};
  }
`;

export default Line;