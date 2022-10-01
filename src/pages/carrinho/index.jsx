import axios from "axios";
import { useEffect, useState } from "react";
//import { friends } from "../../friends.json";
import { Post } from "../Post";

import api from "../../services/api";
import Style from "../../styles/carrinho"
export function Carrinho() {
  /*
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    const consumirAPI = async () => {
      const { data } = await axios.get("http://localhost:3030/");
      const { friends } = await data;
      setFriend(friends);
    };

    consumirAPI();
  }, [friend]);
*/
  return (
    <section>
      {/*}
      {friend?.map((dados, indice) => {
        return (
          <Post
            key={indice}
            imagem={dados.foto}
            nome={dados.nome}
            user={dados.user}
            seguidores={dados.seguidores}
            perfil={dados.perfil}
          />
        );
      })}
      {*/}
    </section>
  );
}
