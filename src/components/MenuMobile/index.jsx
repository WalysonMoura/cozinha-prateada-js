import Link from "next/link";

import { useEffect } from "react";

// REACT ICONS
import { IoClose } from "react-icons/io5";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaMapMarkerAlt, FaWallet } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

// Styled Components
import { Header } from "./style";
import * as Style from "./style";

const MenuMobile = ({isVisible}) => {

  const menuLeftClose = () => {
    isVisible(false)
  }
  return (
    <Header menuLeft={isVisible}>
      <nav>

        <IoClose onClick={menuLeftClose} size={40}/>

        <Style.MenuList>
          <li>
            <Link href=".../../enderecoFixado">
              <a>
                <FaMapMarkerAlt />
                Endereços Fixados
              </a>
            </Link>
          </li>
          <li>
            <Link href=".../../carteira">
              <a>
                <FaWallet />
                Carteira
              </a>
            </Link>
          </li>
          <li>
            <Link href=".../../cupons">
              <a>
                <RiCoupon3Fill />
                Cupons
              </a>
            </Link>
          </li>
          <li>
            <Link href=".../../acompanharPedidos">
              <a>
                <BsFillPinAngleFill />
                Acompanhar Pedidos
              </a>
            </Link>
          </li>
          <li>
            <Link href=".../../avaliar">
              <a>
                <AiOutlineStar />
                Avaliar
              </a>
            </Link>
          </li>
        </Style.MenuList>
      </nav>
    </Header>
  );
};

export default MenuMobile;
