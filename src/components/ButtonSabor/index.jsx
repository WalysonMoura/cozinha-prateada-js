import { useState } from "react";

// Styled Components
import { Container } from "./style";
import { Button } from "./style";


export default function ButtonSabor({sabor}) {


    return(
        <Container>
          <Button></Button>
           <p>{sabor}</p>
        </Container>
    )
}