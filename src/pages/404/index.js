import React, { useEffect } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Container, LINK } from '../../compoents/styles/erro'


function Erro404() {
  useEffect(() => {
    const icon = document.querySelector(".icon-github");
    icon.classList.remove("ativado-icon-github");
    const avatar = document.querySelector(".avatar");
    avatar.classList.add("ativa-avatar");
  }, []);

  return (
    <Container>
      <h1>Erro 404 </h1>
      <p>Usuario ou página não encontrada.</p>
       <LINK to='/'>
        <HiChevronDoubleLeft />
        <span> Voltar para Home</span>
      </LINK>
    </Container>
  );
}

export default Erro404;
