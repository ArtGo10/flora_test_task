import styled from "styled-components";

const Bullet = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: ${({ className }) => {
    if (className === 'active') return 'var(--color-regular-white)';
    if (className === 'passed') return 'var(--color-blue)';
    return 'var(--color-faint-white)';
  }};

  @media screen and (min-width: 1440px) {
    margin: 6px 8px;
  }
`;

export default Bullet