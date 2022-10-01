import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding: 5rem 0 0 0;

  .content {
    .texto {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding-left: 3rem;

      h1 {
        font-size: 2rem;
        font-weight: 700;
      }

      p {
        font-weight: 500;
        font-size: 1.10rem;
        color: #435d6b;
      }
    }

    .texto2 {
      width: 100%;
      padding: 0 2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-weight: 500;
        display: flex;
        align-items: center;
      }
    }
  }
`;
