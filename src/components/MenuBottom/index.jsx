import Link from "next/link";
import { useState } from "react";

// REACT ICONS
import { AiOutlineUser  } from "react-icons/ai"
import { FiHome,FiShoppingCart } from "react-icons/fi"
import { MdOutlineFoodBank } from "react-icons/md"


// Styled Components
import { Header } from "./style";
import * as Style from "./style";

// Componentes

export default function MenuBottom() {
  return (
    <Header>
      <nav>
        <Style.MenuList>
          <li>
            <Link href="../../">
              <a> <FiHome size={35} color="#c8161d"/> </a>
            </Link>
          </li>
          <li>
            <Link href=".../../cardapio">
              <a> <MdOutlineFoodBank size={40} color="#333"/> </a>
            </Link>
          </li>
          <li>
            <Link href="../../carrinho">
              <a><FiShoppingCart size={35} color="#333"/></a>
            </Link>
          </li>
          <li>
            <Link href="../../perfil">
              <a> <AiOutlineUser size={35} color="#333"/> </a>
            </Link>
          </li>
        </Style.MenuList>
      </nav>
    </Header>
  );
}
