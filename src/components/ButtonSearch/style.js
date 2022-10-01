import styled from "styled-components";

export const Button = styled.div`
  padding: 0 1.5rem;
  margin: 2rem auto;
  max-width: 900px;

 @media (max-width: 768px) {
  margin: 2rem 0;
 }
  span {
    position: relative;
    z-index: -1;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: inherit;

    
  -webkit-box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.38); 
   box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.38);

   

    > svg {
     
      margin-left: 1rem;
      
    }

    input {
      width: 100%;
      height: 2.5rem;

      border: none;
      outline: none;
      font-family: inherit;

      ::placeholder {
        font-weight: 400;
        font-family: inherit;
        color: #435d6b;
      }
    }
  }
`;
