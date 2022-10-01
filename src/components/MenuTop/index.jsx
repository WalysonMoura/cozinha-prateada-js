import Link from "next/link";

import { useEffect, useState } from "react";

// REACT ICONS
import { BiMenuAltLeft } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaMapMarkerAlt, FaWallet } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

// Styled Components
import GlobalStyle from "../../styles/Globals"
import { Header } from "./style";
import * as Style from "./style";

// Componentes
import MenuMobile from "../MenuMobile";

export default function MenuTop() {
 
  const [menuLeft,setMenuLeft] = useState(false)

  const menuLeftVisible = () => {
    setMenuLeft(!menuLeft)
  }

  const[scroll,setScroll] = useState(0);

  return (
    <>
      <GlobalStyle></GlobalStyle>

      <Header onScroll={(evento) => setScroll(evento.target.value)} styleScroll={scroll}>
        <nav>
          <BiMenuAltLeft onClick={menuLeftVisible} size={40} className="iconMenu"/>
          {menuLeft && <MenuMobile isVisible={setMenuLeft}/>}

          <div className="c-location">
            <BiMap color="#c8161d" size={30}/> <span>Maranguape, CE</span>
          </div>

          <Style.MenuList>
            <li>
              <Link href="">
                <a>
                  <FaMapMarkerAlt />
                  Endereços Fixados
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <FaWallet />
                  Carteira
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <RiCoupon3Fill />
                  Cupons
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <BsFillPinAngleFill />
                  Acompanhar Pedidos
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <AiOutlineStar />
                  Avaliar
                </a>
              </Link>
            </li>
          </Style.MenuList>

          <img src="/user.png"/>
        </nav>
      </Header>
    </>
  );
}
