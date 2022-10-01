import Link from "next/link";
import axios from "axios";
import { useState } from "react";

// REACT ICONS
import { MdPhotoCamera } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

// Styled Components
import * as Style from "../../styles/perfil";

// Componentes
import MenuBottom from "../../components/MenuBottom";

// Componentes

export default function Perfil() {
  const [name, setName] = useState("walyson");
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [nascimento, setNascimento] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3030/perfil/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          userName,
          email,
          telefone,
          nascimento,
        }),
      });

      console.log(response.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Style.Header>
        <nav>
          <Link href="../">
            <a>
              <BsArrowLeft size={35} color="#f8f8f8" />
            </a>
          </Link>
          <h2>Editar Perfil</h2>
          <button type="submit" form="Idformulario">
            Salvar
          </button>
        </nav>
        <section>
          <input type="file" name="imagemPerfil" id="imagemPerfil" />
          <img src="/user.png" alt="" form="Idformulario" />
          <MdPhotoCamera size={25} color="#f8f8f8" />
        </section>
      </Style.Header>
      <Style.Main>
        <form id="Idformulario" onSubmit={handleSubmit}>
          <div className="inputBox">
            <label htmlFor="nome">Nome</label>
            <input
              onChange={(dado) => setName(dado.target.value)}
              type="text"
              id="name"
              name="nome"
              value={name}
              required
            />
          </div>

          <div className="inputBox">
            <label htmlFor="user">Nome de Usuário</label>
            <input
              onChange={(dado) => setUserName(dado.target.value)}
              type="text"
              id="user"
              name="user"
              value={userName}
              required
            />
          </div>

          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
              onChange={(dado) => setEmail(dado.target.value)}
              type="email"
              name="email"
              id="email"
              value={email}
              required
            />
          </div>

          <div className="inputBox">
            <label htmlFor="telefone">Numero de Telefone</label>
            <input
              onChange={(dado) => setTelefone(dado.target.value)}
              type="tel"
              name="telefone"
              id="telefone"
              value={telefone}
              required
            />
          </div>

          <div className="inputBox">
            <label htmlFor="nascimento">Nascimento</label>
            <input
              onChange={(dado) => setNascimento(dado.target.value)}
              type="date"
              name="nascimento"
              id="nascimento"
              value={nascimento}
              required
            />
          </div>
        </form>
      </Style.Main>

      <MenuBottom />
    </>
  );
}
