import { useEffect, useState } from "react";
import { router } from "next/router";

// REACT ICONS

// Styled Components
import * as Style from "../../styles/cardapio";

// Componentes
import MenuBottom from "../../components/menuBottom";
import MenuTop from "../../components/MenuTop";
import ButtonSearch from "../../components/ButtonSearch";
import ItemCardapio from "../../components/ItemCardapio";

export default function Cardapio() {
  return (
    <>
     
      <MenuTop />

      <Style.Main>
        <ButtonSearch />

        <section>
          <h2>
            Promoções <strong>10% OFF</strong>
          </h2>
          <Style.SlideCardapio>
            <ItemCardapio
              image="/combo1.png"
              imagePedido="/pedidos/combo1.png"
              pratoName="Combo 1"
            />
            <ItemCardapio
              image="/combo2.png"
              pratoImage="/pedidos/combo2.png"
              pratoName="Combo 2"
            />
          </Style.SlideCardapio>
        </section>

        <section>
          <h2>Pratos Principais</h2>
          <Style.SlideCardapio>
            <ItemCardapio image="/prato1.png" pratoName="Sovete" />
            <ItemCardapio
              image="/prato2.png"
              imagePedido="/pedidos/prato1.png"
              pratoName="Combo"
            />
            <ItemCardapio
              image="/prato3.png"
              imagePedido="/pedidos/prato2.png"
              pratoName="Combo"
            />
            <ItemCardapio
              image="/prato4.png"
              imagePedido="/pedidos/prato3.png"
              pratoName="Combo"
            />
            <ItemCardapio
              image="/prato5.png"
              imagePedido="/pedidos/prato4.png"
              pratoName="Combo"
            />
          </Style.SlideCardapio>
        </section>

        <section>
          <h2>Sobremesas</h2>
          <Style.SlideCardapio>
            <ItemCardapio
              image="/sorvete.png"
              imagePedido="/sorvetePedido.png"
              pratoName="Sorvete"
            />
            <ItemCardapio
              image="/sorvete.png"
              imagePedido="/sorvetePedido.png"
              pratoName="Milk Shake"
            />
            <ItemCardapio
              image="/prato5.png"
              imagePedido="/pedidos/prato4.png"
              pratoName="Torta"
            />
            <ItemCardapio
              image="/prato5.png"
              imagePedido="/pedidos/prato4.png"
              pratoName="Bolo"
            />
            <ItemCardapio
              image="/prato5.png"
              imagePedido="/pedidos/prato4.png"
              pratoName="Combo"
            />
          </Style.SlideCardapio>
        </section>

        <section>
          <h2>Fast-Food</h2>
          <Style.SlideCardapio>
            <ItemCardapio
              image="/.png"
              imagePedido="/pizzaPedido.png"
              pratoName="Sorvete"
            />
            <ItemCardapio
              imagePedido="/hamburguerPedido.png"
              pratoName="Hamburguer"
            />
            <ItemCardapio
              imagePedido="/batataPedido.png"
              pratoName="Batata frita"
            />
            <ItemCardapio />
            <ItemCardapio pratoName="Pizza" />
          </Style.SlideCardapio>
        </section>

        <section>
          <h2>Bebidas</h2>
          <Style.SlideCardapio>
            <ItemCardapio />
            <ItemCardapio />
            <ItemCardapio />
            <ItemCardapio />
            <ItemCardapio />
          </Style.SlideCardapio>
        </section>
      </Style.Main>
      <MenuBottom />
    </>
  );
}
