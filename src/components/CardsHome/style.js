import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1.5rem 1rem 1.5rem 6rem;
    margin: 1rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    overflow: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 1.57rem;

    ::-webkit-scrollbar{
        width: 0;
        height: 0;
    }

`

export const Card = styled.div`
    flex: 0 0 20%;
    height: 15rem;
    padding: 1.5rem 0;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    border-radius: 1.5rem;
    -webkit-box-shadow: 2px 10px 20px 0px rgba(0,0,0,0.49); 
    box-shadow: 2px 10px 20px 0px rgba(0,0,0,0.49);

    scroll-snap-align: start;
    
    @media (max-width: 1050px) {
        flex: 0 0 23%;
    }
    @media (max-width: 1000px) {
        flex: 0 0 25%;
    }
    @media (max-width: 768px) {
        flex: 0 0 10rem;
    }

    img{
        width: 6rem;
        height: 5.3rem;
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.4));
        z-index: -1;
    }
    p{
        font-weight: 500;
    }

    
`