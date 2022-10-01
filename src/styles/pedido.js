import styled from "styled-components";

export const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

  --font-padrao: "Poppins", sans-serif;
  --preto: #0e0e0e;
  --preto-suave: #222;
  --cinza: #435d6b;
  --cinza-chubo: #e0e0e0;
  --vermelho: #c8161d;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  font-family: var(--font-padrao);

  p {
    font-size: 1rem;
    font-family: var(--font-padrao);
    font-weight: 400;
  }
  .quntidade{
    margin-top: 2rem;
    color: var(--cinza);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h1 {
      color: #222;
      font-size: 2rem;
      font-weight: 700;
    }
    p {
      color: var(--cinza);
      font-size: 1rem;
      font-weight: 400;
    }
    img {
      width: 20rem;
      height: 20rem;
      margin-top: 2rem;
      filter: drop-shadow(5px 5px 5px #222);
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .contador {
    display: flex;
    align-items: center;
    gap: 3rem;

    p {
      font-family: "Poppins";
      font-size: 2rem;
    }
    span {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      background-color: #0e0e0e;
      display: grid;
      place-items: center;
      color: #efefef;
    }
  }
`;

export const Carrinho = styled.button`
  width: 50%;
  max-width: 20rem;
  height: 6.5rem;
  padding: 1rem 0;
  background-color: #c8161d;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  :hover {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }

  :active {
    border: 1px solid white;
  }

  p {
    color: #efefef;
    font-family: "Poppins";
    font-size: 1.1rem;
  }
`;
