import styled from "styled-components";

export const Container = styled.span`
  height: 2.5rem;
  width: 9rem;
  position: relative;
  display: grid;
  place-items: center;

  p {
    position: absolute;
    color: #c8161d;
    color: #fff;
    
  }
`;

export const Button = styled.input.attrs({ type: "checkbox" })`
  width: 100%;
  height: 100%;
  outline: none;
  -webkit-appearance: none;
  padding: 0.7em 1.7em;
  position: absolute;

  font-size: 18px;
  color: #c8161d;
  font-family: "Poppins";

  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  border-radius: 2rem;

  :checked {
    border-radius: 90px;
    background: #c8161d;
    box-shadow: inset 5px 5px 10px #50090c, inset -5px -5px 10px #ff232e;

    
  }

`;
