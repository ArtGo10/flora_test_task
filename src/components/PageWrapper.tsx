import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px;
  background-color: var(--color-bg);
  display: flex !important;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export default PageWrapper;