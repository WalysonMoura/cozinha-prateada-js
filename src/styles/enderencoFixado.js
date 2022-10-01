import styled from "styled-components";
import { injectGlobal } from "styled-components";

export const Container = styled.main`
  --preto: #0e0e0e;
  --preto-suave: #222;
  --cinza: #435d6b;
  --cinza-chubo: #e0e0e0;
  --vermelho: #c8161d;

  width: 100%;
  height: 100vh;
  padding: 2rem 1.5rem;
`;

export const Header = styled.section`
 width: 100%;
 height: 3rem;
`;
export const Locais = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: inherit;

  p {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #f8f8f8;
    font-weight: 500;
    font-size: 1.25rem;
  }

  .adicionarLocal {
    max-width: 600px;
    width: 100%;
    height: 4em;
    padding: 0 1.5rem;
    background-color: #fefefe;
    font-family: inherit;

    border-radius: 0.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-family: inherit;

    }

    input {
      width: 60%;
      padding-left: 12px;
      height: 2rem;
      background-color: #e0e0e0;
      border-radius: 0.2rem;
      font-family: inherit;
      border: none;
      outline: none;

      ::placeholder {
        font-family: inherit;
      }
    }

    button {
      width: 33%;
      height: 2.5rem;
      background: #f8f8f8;
      border-radius: 1rem;
      color:  #c8161d;
      font-family: inherit;
      font-weight: 500;
      font-size: 1rem;
      border-radius: 49px;
      background: #f8f8f8;
      box-shadow: 5px 5px 10px #bfbfbf, -5px -5px 10px #ffffff;

      :active {
        border-radius: 49px;
        background: #f8f8f8;
        box-shadow: inset 5px 5px 4px #bfbfbf, inset -5px -5px 4px #ffffff;
      }
    }
  }
`;
