import styled from "styled-components";

const InputInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ className }) => className === 'no-margin' ? '0' : '5px'};
`;

export default InputInner;