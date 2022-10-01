
// REACT ICONS
import { BsSearch } from "react-icons/bs"

// Styled Components
import GlobalStyle from "../../styles/Globals"
import * as Style from "./style";

// Componentes

export default function ButtonSearch() {
    return(
        <Style.Button>
            <span>
                <BsSearch color="#435d6b" size={25}/>
                <input type="search" name="" id="" placeholder="Procurar por mais opções"/>
            </span>
            <GlobalStyle></GlobalStyle>
        </Style.Button>
    )
}