import styled from "styled-components";

export const Header = styled.header`
  height: 3.5rem;
  width: 100%;
  position: fixed;
  
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
 ${({styleScroll}) => styleScroll > 1 && css`
  
    background-color: #f8f8f8;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);

 `}
 

  .c-location {
    display: flex;
    align-items: center;
    gap: 0.5em;

    span {
      color: #0f0f0f;
      font-weight: 500;
    }
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .iconMenu {
      display: none;
      @media (max-width: 1150px) {
        display: block;
      }
    }
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;
