import styled, { injectGlobal } from "styled-components";

export const Header = styled.header`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: #c8161d;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section {
    position: relative;

    input[type="file"] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    > svg {
      position: absolute;
      bottom: 0.15rem;
      right: 0.2rem;
    }

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .inputBox {
      width: 100%;
      

      
      
    
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;
