import Link from "next/link";

import { useEffect, useState } from "react";

// REACT ICONS
import { BiHomeHeart } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";

// Styled Components
import * as Style from "../../styles/enderencoFixado";

// Componentes
import Enderecos from "../../components/Enderecos";

// Componentes
import MenuBottom from "../../components/MenuBottom";

export default function EnderecoFixado() {
  const [endereco, setEndereco] = useState([]);
  const [locationName, setLocationName] = useState();

  const adicionarNovoEndereco = () => {
    const novoEndereco = {
      location: locationName,
    };

    setEndereco((prevState) => [...prevState, novoEndereco]);
  };

  return (
    <>
      <Style.Container>
       
        <Style.Header></Style.Header>
        <Style.Locais>
          <p>
            <IoIosAddCircle size={35} /> Adicionar Novo Endereço
          </p>

          <div className="adicionarLocal">
            <input
              onChange={(evento) => setLocationName(evento.target.value)}
              type="text"
              placeholder="Digite o local..."
            />

            <button onClick={adicionarNovoEndereco} type="button">
              Adicionar
            </button>
          </div>
          <Enderecos location="Casa" icon={<HiHome />} />
          <Enderecos location="Amor" icon={<BiHomeHeart />} />

          {endereco.map((endereco) => (
            <Enderecos
              key={endereco.id}
              location={endereco.location}
              icon={<HiHome />}
            />
          ))}
        </Style.Locais>
      </Style.Container>
      <MenuBottom />
    </>
  );
}
