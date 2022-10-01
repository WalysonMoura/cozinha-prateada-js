import styled from "styled-components";

export const Button = styled.div`
  max-width: 600px;
  width: 100%;
  height: 3em;
  padding: 0 1rem;
  background-color: #f8f8f8;

  border-radius: 0.7rem;

  font-family: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    p {
      color: #0e0e0e;
      font-size: 1rem;
    }

    > svg {
      font-size: 2rem;
    }
  }

  button {
    width: 6rem;
    height: 2rem;
    background: #f8f8f8;
    border-radius: 1rem;
    color: #c8161d;
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
`;
