import { Card, Container } from "./style";

import { BsArrowRightCircleFill } from "react-icons/bs"

export default function CardHome() {
    return(
        <Container>
            <Card>
                <img src="/pizzaPedido.png" alt="" />
                <p>Pizzas</p>
                <BsArrowRightCircleFill color="#c8161d" size={35}/>
            </Card>
            <Card>
                <img src="/hamburguerPedido.png" alt="" />
                <p>Hambúrguers</p>
                <BsArrowRightCircleFill color="#c8161d" size={35}/>
            </Card>
            <Card>
                <img src="/batataPedido.png" alt="" />
                <p>Batata Frita</p>
                <BsArrowRightCircleFill color="#c8161d" size={35}/>
            </Card>
    
        </Container>
    )
}