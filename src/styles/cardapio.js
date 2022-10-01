import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding: 4rem 0 0 0;

  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    padding: 1.5rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    h2 {
      font-size: 1.35rem;
      font-weight: 500;
      margin-left: 1.5rem;

      strong {
        color: #c8161d;
      }
    }
  }
`;

export const SlideCardapio = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 24px;
  gap: 1rem;
  padding: 1.8rem 0 1.8rem 1.5rem ;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;


