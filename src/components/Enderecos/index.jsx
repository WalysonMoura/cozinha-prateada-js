import Link from "next/link"

import { Children, useEffect, useState } from "react";

// REACT ICONS


// Styled Components
import GlobalStyle from '../../styles/Globals'
import * as Style from "./style";

// Componentes
export default function Enderecos({location,icon}) {
    return(
        <Style.Button>
            <GlobalStyle/>
            <span>
                {icon}
                <p>{location}</p>
            </span>
            <button>Excluir</button>
        </Style.Button>
    )
}