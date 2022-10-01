import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// REACT ICONS
import { HiMinusSm } from "react-icons/hi";
import { HiPlusSm } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";

// Styled Components
import GlobalStyle from '../../styles/Globals'
import * as Style from "../../styles/pedido";

// Componentes
import ButtonSabor from "../../components/ButtonSabor";

export default function Pedido() {

  const router = useRouter()  
  const { pratoImage, pratoName }  = router.query

    const[contador,setContador] = useState(1)

    const adicionar = () => {
        setContador((prevState) => prevState + 1)
    }
    const remover = () => {
      setContador((prevState) => prevState - 1)
    }

  return (
    <>
      <Style.Container>
      <GlobalStyle/>
        <section className="content">
          <h1>{pratoName}</h1>
          <p>Escolha até 3 sabores</p>
          <img src={pratoImage} alt="" />
        </section>
        <section className="buttons">
          <ButtonSabor sabor="Morango"/>
          <ButtonSabor sabor="Chocolate"/>
          <ButtonSabor sabor="Baunilha"/>
        </section>
        <p className="quntidade">Quantos voçê vai querer?</p>
        <section className='contador'>
            <span onClick={remover}> <HiMinusSm size={30}/> </span>
            <p>{contador}</p>
            <span onClick={adicionar}> <HiPlusSm size={30}/> </span>
        </section>
        <Style.Carrinho>
          <Link href="../../pages/carrinho">
            <a>
             <BsCartPlus size={35} color="#efefef"/>
             <p>Adicionar ao carrinho</p>
            </a>
          </Link>
        </Style.Carrinho>
      </Style.Container>
    </>
  );
}
