import styled from "styled-components";

const InputLabel = styled.label`
  display: ${({ theme: { display } }) => display || 'inline'};
  font-family: var(--font-regular);
  font-size: 16px;
  line-height: 22px;
  color: ${({ className }) => {
    if (className === 'passed') return 'var(--color-blue)';
    if (className === 'faint') return 'var(--color-faint-white)';
    return 'var(--color-regular-white)';
  }};
  white-space: nowrap;

  @media screen and (min-width: 1440px) {
    display: inline;
  };
`;

export default InputLabel