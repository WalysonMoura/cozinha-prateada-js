import styled from "styled-components";

export const CardItem = styled.div`
  flex: 0 0 14%;
  height: 9rem;
  padding: 0 0 1.5rem 0;

  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
 

  border-radius: 1.5rem;
  border: 0.2rem solid #0e0e0e;

  position: relative;
  scroll-snap-align: start;

  :hover {
    border: 0.2rem solid #c8161d;
    -webkit-box-shadow: 2px 10px 20px 0px rgba(0, 0, 0, 0.49);
    box-shadow: 2px 10px 20px 0px rgba(0, 0, 0, 0.49);
  }

  @media (max-width: 1050px) {
    flex: 0 0 23%;
  }
  @media (max-width: 1024px) {
    flex: 0 0 20%;
  }
  @media (max-width: 768px) {
    flex: 0 0 33%;
  }

  img {
    width: 100%;
    height: 6rem;
    border-radius: 1rem;
   z-index: -1;
  }

  h3 {
    font-weight: 500;
    color: #0e0e0e;
    
  }
`;
