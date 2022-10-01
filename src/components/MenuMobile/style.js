import styled from "styled-components";

export const Header = styled.section`
    
    height: 100vh;
    width: 50%;
    position: fixed;
    
    top: 0;
    left: 0;
    left: ${({menuLeft}) => menuLeft ? '0' : '-100%'};

    background-color: #c8161d;

    animation: animacaoMenu .4s;
    z-index: 55;
    
   
    display: flex;
    justify-content: flex-start;
    padding-top: 20%;

    @keyframes animacaoMenu {
     from{
        opacity: 0;
        width: 0;

     }   
     to{
        opacity: 1;
        width: 50%;
    
     }
    }
    nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    
        > svg{
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #efefef;
            transition: .7s;
            cursor: pointer;
        }
        
    }

    transition: .5s;

`

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    transition: 5s;
    

    a{
        display: flex;
        align-items: center;
        gap: .5rem;
        color: #efefef;
        transition: 0.8s
    cubic-bezier(0.68, -0.55,0.265,1.55) ;
        transform: scale(1.1);
       
        
    }
`

