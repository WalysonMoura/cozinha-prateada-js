import { useEffect, useState } from "react";
import { router } from "next/router";

// REACT ICONS

// Styled Components

import * as Style from "./style";

export default function ItemCardapio({ image, pratoImage, pratoName }) {
  
    const enviarPrato = () => {
    
        router.push({
          pathname: "../../pedido",
          query:{
            pratoImage: `${pratoImage}`,
            pratoName: `${pratoName}`
          }
        })
      }

  return (
    <Style.CardItem onClick={enviarPrato}>
      <img src={image}/>
      <h3>{pratoName}</h3>
    </Style.CardItem>
  );
}
