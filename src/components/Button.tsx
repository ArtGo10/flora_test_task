import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: ${({ theme : { width } }) => width || '328px'};
  font-family: var(--font-medium);
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${({ className }) => className === 'secondary' ? 'var(--color-light-grey)' : 'var(--color-dark-grey)'};
  background-color: ${({ className }) => className === 'secondary' ? 'var(--color-faint-light-grey)' : 'var(--color-blue)'};
  padding: 13px 22.5px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    max-width: ${({ className }) => className === 'secondary' ? '120px' : '328px'};
  }
`;

export default Button;