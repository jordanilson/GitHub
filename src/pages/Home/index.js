import { React, useEffect, useState } from "react";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import apiGitHub from "../../apiGitHub";
import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import {
  Main,
  Section_Home,
  Form,
  Input,
  Links,
  Li
  
} from "../../compoents/styles/home";
import "../../compoents/Header/header.css";

function Home() {
  const { input, setInput } = useContext(UserContext);
  const [params, setParams] = useState([]);
  const navigate = useNavigate();

  async function loadApi() {
    await apiGitHub
      .get(`users/${input}`)
      .then((response) => {
        setParams(response.data);
      })
      .catch((error) => {
        navigate("*", { replace: true });
      });
   
  }
  function hadleClick() {
    const icon = document.querySelector(".icon-github");
    icon.classList.add("ativado-icon-github");
    const avatar = document.querySelector(".avatar");
    avatar.classList.remove("ativa-avatar");
    const input = document.querySelector('.input')
     if(input.length === ''){
      alert('qwdk')
     }
    loadApi();
 
  }
  useEffect(() => {
    const icon = document.querySelector(".icon-github");
    icon.classList.remove("ativado-icon-github");
    const avatar = document.querySelector(".avatar");
    avatar.classList.add("ativa-avatar");
  }, []);

  return (
    <Main>
      <Section_Home>
        <h2>Busque por um usuário</h2>
        <Form>
          <Input className="input"
            placeholder="Digite o nome de um usuário..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Links>
            <Link onClick={hadleClick} to={`/Dados/${input}`}>
              <Li color="white" size="1.1">
                <GoSearch />
              </Li>
            </Link>
          </Links>
        </Form>
      </Section_Home>
    </Main>
  );
}

export default Home;
