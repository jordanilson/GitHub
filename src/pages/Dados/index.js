import React, { useContext, useEffect, useState } from "react";
import apiGitHub from "../../apiGitHub";
import { useParams } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { UserContext } from "../../context/user";
import "./styles.css";
import ApexCharts from "react-apexcharts";
import {
  Main,
  AsideNav,
  ContainerFluid,
  FlexWecolmeGrapchFollows,
  FlexWecolmeBackGrapichs,
  DivWecolmeBack,
  DivDataFolowrs,
  ThirdDivDataFolowrs,
  FlexGraphicDataGuys,
  AsideRight,
  DivSeguidores,
  LinkReposFollorws,
  DivMostUsedLanguages,
  DataProject,
  TitleProject,
  LiDataProject,
} from "../../compoents/styles/dados";

function Dados() {
  const { input } = useParams();
  const { login } = useParams();
  const { setHeader } = useContext(UserContext);
  const [data, setData] = useState("");
  const [language, setLanguage] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    async function loadApiSobre() {
      await apiGitHub
        .get(`users/${input}`)
        .then((item) => {
          setHeader(item.data);
          setData(item.data);
        })
        .catch((error) => {
          console.log("Error" + error);
        });
    }
    loadApiSobre();
  }, []);

  useEffect(() => {
    async function loadApiRepos() {
      await apiGitHub
        .get(`users/${input}/repos`)
        .then((item) => {
          setLanguage(item.data);
          setRepos(item.data);
          console.log(item.data);
        })
        .catch((error) => {
          console.log("Repositorio não encontrado" + error);
        });
    }
    loadApiRepos();
  }, []);

  useEffect(() => {
    async function loadApiFollowers() {
      await apiGitHub
        .get(`https://api.github.com/users/${input}/followers`)
        .then((item) => {
          setFollowers(item.data);
        })
        .catch((erro) => {
          console.log("Não há seguidores");
        });
    }
    loadApiFollowers();
  }, []);

  function refresh() {
    if (login === followers.data.login && input === data.data.name) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  const total = language
    .map((item) => item.language)
    .reduce((total, numero) => {
      return total + numero;
    }, 0);

  function HadleDataNav() {
    const dataUser = document.querySelector(".active-data-user");
    const dataProject = document.querySelector(".active-data-project");
    dataUser.classList.remove("remove-data-user");
    dataProject.classList.add("remove-data-project");
    const backgroundColorLiN1 = document.querySelector(
      ".active-backrgound-color-1"
    );
    backgroundColorLiN1.classList.add("remove-backround-color-li-1");

    const backgroundColorLiN2 = document.querySelector(
      ".active-backrgound-color-2"
    );
    backgroundColorLiN2.classList.remove("remove-backround-color-li-2");
  }

  function HadleProjectNav() {
    const dataProject = document.querySelector(".active-data-project");
    const dataUser = document.querySelector(".active-data-user");
    dataProject.classList.remove("remove-data-project");
    dataUser.classList.add("remove-data-user");
    const backgroundColorLiN1 = document.querySelector(
      ".active-backrgound-color-1"
    );
    backgroundColorLiN1.classList.remove("remove-backround-color-li-1");
    const backgroundColorLiN2 = document.querySelector(
      ".active-backrgound-color-2"
    );
    backgroundColorLiN2.classList.add("remove-backround-color-li-2");
  }

  useEffect(() => {
    function initProject() {
      const dataProject = document.querySelector(".active-data-project");
      dataProject.classList.add("remove-data-project");
      const backgroundColorLiN1 = document.querySelector(
        ".active-backrgound-color-1"
      );
      backgroundColorLiN1.classList.add("remove-backround-color-li-1");
    }
    initProject();
  }, []);

  const arr = total;
  const valor = arr.toString();
  const Html = (valor.match(/HTML/g) || []).length;
  const css = (valor.match(/CSS/g) || []).length;
  const scss = (valor.match(/SCSS/g) || []).length;
  const javaScript = (valor.match(/JavaScript/g) || []).length;
  const typeScript = (valor.match(/TypeScript/g) || []).length;
  const java = (valor.match(/Java/g) || []).length;
  const python = (valor.match(/Python/g) || []).length;
  const dart = (valor.match(/Dart/g) || []).length;
  const go = (valor.match(/Go/g) || []).length;
  const csharp = (valor.match(/C#/g) || []).length;
  const c = (valor.match(/C/g) || []).length;
  const CmaisMais = (valor.match(/['C++']/g) || []).length;
  const swift = (valor.match(/Swift/g) || []).length;
  const php = (valor.match(/PHP/g) || []).length;
  const kotlin = (valor.match(/Kotlin/g) || []).length;
  const ruby = (valor.match(/Ruby/g) || []).length;
  const jupyter = (valor.match(/Jupyter/g) || []).length;
  const assembly = (valor.match(/Assembly/g) || []).length;

  const array = [
    Html,
    css,
    scss,
    javaScript,
    typeScript,
    python,
    dart,
    go,
    swift,
    php,
    kotlin,
    ruby,
    java,
    csharp,
    c,
    CmaisMais,
    jupyter,
    assembly,
  ];

  let max = array.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);

  let newArray = array.filter((i, index) => array.indexOf(i) === index);

  let res = newArray.filter((i) => i < max && i !== 0);
  var bigger = max;
  var smaller = res[0];
  var biggerN2 = res[1];
  var biggerN3 = res[2];

  switch (max) {
    case Html:
      var strLanguageN1 = "Html";
      break;
    case css:
      strLanguageN1 = "Css";
      break;
    case scss:
      strLanguageN1 = "scss";
      break;
    case javaScript:
      strLanguageN1 = "JavaScript";
      break;
    case java:
      strLanguageN1 = "Java";
      break;
    case typeScript:
      strLanguageN1 = "TypeScript";
      break;
    case python:
      strLanguageN1 = "Python";
      break;
    case c:
      strLanguageN1 = "C";
      break;
    case CmaisMais:
      strLanguageN1 = "C++";
      break;
    case csharp:
      strLanguageN1 = "C#";
      break;
    case ruby:
      strLanguageN1 = "C";
      break;
    case go:
      strLanguageN1 = "GO";
      break;
    case kotlin:
      strLanguageN1 = "kotlin";
      break;
    case php:
      strLanguageN1 = "PHP";
      break;
    case jupyter:
      strLanguageN1 = "Jupyter";
      break;
    case dart:
      strLanguageN1 = "Dart";
      break;
    case swift:
      strLanguageN1 = "Swifit";
      break;

    default: {
      console.log("Erro");
    }
  }

  switch (res[0]) {
    case Html:
      var strLanguageN2 = "Html";
      break;
    case css:
      strLanguageN2 = "Css";
      break;
    case scss:
      strLanguageN2 = "scss";
      break;
    case javaScript:
      strLanguageN2 = "JavaScript";
      break;
    case java:
      strLanguageN2 = "Java";
      break;
    case typeScript:
      strLanguageN2 = "TypeScript";
      break;
    case python:
      strLanguageN2 = "Python";
      break;
    case c:
      strLanguageN2 = "C";
      break;
    case CmaisMais:
      strLanguageN2 = "C++";
      break;
    case csharp:
      strLanguageN2 = "C#";
      break;
    case ruby:
      strLanguageN2 = "C";
      break;
    case go:
      strLanguageN2 = "GO";
      break;
    case kotlin:
      strLanguageN2 = "kotlin";
      break;
    case php:
      strLanguageN2 = "PHP";
      break;
    case jupyter:
      strLanguageN2 = "Jupyter";
      break;
    case dart:
      strLanguageN2 = "Dart";
      break;
    case swift:
      strLanguageN2 = "Swifit";
      break;

    default: {
      console.log("Erro");
    }
  }

  switch (res[1]) {
    case Html:
      var strLanguageN3 = "Html";
      break;
    case css:
      strLanguageN3 = "Css";
      break;
    case scss:
      strLanguageN3 = "scss";
      break;
    case javaScript:
      strLanguageN3 = "JavaScript";
      break;
    case java:
      strLanguageN3 = "Java";
      break;
    case typeScript:
      strLanguageN3 = "TypeScript";
      break;
    case python:
      strLanguageN3 = "Python";
      break;
    case c:
      strLanguageN3 = "C";
      break;
    case CmaisMais:
      strLanguageN3 = "C++";
      break;
    case csharp:
      strLanguageN3 = "C#";
      break;
    case ruby:
      strLanguageN3 = "C";
      break;
    case go:
      strLanguageN3 = "GO";
      break;
    case kotlin:
      strLanguageN3 = "kotlin";
      break;
    case php:
      strLanguageN2 = "PHP";
      break;
    case jupyter:
      strLanguageN2 = "Jupyter";
      break;
    case dart:
      strLanguageN2 = "Dart";
      break;
    case swift:
      strLanguageN2 = "Swifit";
      break;

    default: {
      console.log("Erro");
    }
  }
  switch (res[2]) {
    case Html:
      var strLanguageN4 = "Html";
      break;
    case css:
      strLanguageN4 = "Css";
      break;
    case scss:
      strLanguageN4 = "scss";
      break;
    case javaScript:
      strLanguageN4 = "JavaScript";
      break;
    case java:
      strLanguageN4 = "Java";
      break;
    case typeScript:
      strLanguageN4 = "TypeScript";
      break;
    case python:
      strLanguageN4 = "Python";
      break;
    case c:
      strLanguageN4 = "C";
      break;
    case CmaisMais:
      strLanguageN4 = "C++";
      break;
    case csharp:
      strLanguageN4 = "C#";
      break;
    case ruby:
      strLanguageN4 = "C";
      break;
    case go:
      strLanguageN4 = "GO";
      break;
    case kotlin:
      strLanguageN4 = "kotlin";
      break;
    case php:
      strLanguageN4 = "PHP";
      break;
    case jupyter:
      strLanguageN4 = "Jupyter";
      break;
    case dart:
      strLanguageN4 = "Dart";
      break;
    case swift:
      strLanguageN4 = "Swifit";
      break;

    default: {
      console.log("Erro");
    }
  }

  if (smaller === undefined || strLanguageN2 === undefined) {
    smaller = 0;
    strLanguageN2 = "Has no language";
  }

  if (biggerN3 === undefined || strLanguageN3 === undefined) {
    biggerN3 = 0;
    strLanguageN3 = "Has no language";
  }

  if (biggerN2 === undefined || strLanguageN4 === undefined) {
    biggerN2 = 0;
    strLanguageN4 = "Has no language";
  }

  const series = [bigger, smaller, biggerN2, biggerN3],
    options = {
      chart: {
        width: 400,
        type: "pie",
        foreColor: "white",
      },


      labels: [
        `${strLanguageN1}`,
        `${strLanguageN2}`,
        `${strLanguageN3}`,
        `${strLanguageN4}`,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

  return (
    <Main>
      <section>
        <ContainerFluid>
          <AsideNav>
            <div>
              <div>
                <li
                  className="active-backrgound-color-1"
                  onClick={HadleDataNav}
                >
                  <BsFillPersonFill />
                  <span>Dados Pessoas</span>{" "}
                </li>
              </div>
              <li
                className="active-backrgound-color-2"
                onClick={HadleProjectNav}
              >
                <AiFillFolder />
                <span>Projetos</span>
              </li>
            </div>
          </AsideNav>
          <div className="active-data-user">
            <FlexWecolmeGrapchFollows>
              <FlexWecolmeBackGrapichs>
                <DivWecolmeBack>
                  <ul>
                    <h1>Seja Bem-Vindo </h1>
                    <h3>{data.name}</h3>
                  </ul>
                </DivWecolmeBack>
                <DivMostUsedLanguages>
                  <h2>Linguagens mais utilizadas atualmente:</h2>
                  <FlexGraphicDataGuys>
                    <div>
                      <ApexCharts
                        id="apex"
                        options={options}
                        series={series}
                        type="pie"
                        height={400}
                        foreColor='white'
                        
                      />
                    </div>
                  </FlexGraphicDataGuys>
                </DivMostUsedLanguages>
                <DivDataFolowrs>
                  <div>
                    <h2>Dados pessoais</h2>
                    <p>
                      <strong>Bio:</strong> {data.bio}
                    </p>
                    <p>
                      <strong>Criado:</strong> {data.created_at}
                    </p>
                    <p>
                      <strong>Email:</strong> {data.email}
                    </p>
                  </div>
                  <ThirdDivDataFolowrs>
                    <p>
                      <strong>Localização:</strong> {data.location}
                    </p>
                    <p>
                      <strong> Ultima atualização:</strong> {data.updated_at}
                    </p>
                    <p>
                      <strong>Blog:</strong> {data.blog}
                    </p>
                  </ThirdDivDataFolowrs>
                </DivDataFolowrs>
              </FlexWecolmeBackGrapichs>
              <AsideRight>
                <span>
                  <h2>Seguidores</h2> <strong>{data.followers}</strong>
                </span>
                <DivSeguidores>
                  {followers.map((item) => {
                    return (
                      <ul key={item.id}>
                        <div>
                          <img
                            src={`https://avatars.githubusercontent.com/u/${item.id}?v=4`}
                            alt={"avatar-seguidores-"}
                          />
                          <li> {item.login}</li>
                        </div>
                        <LinkReposFollorws
                          onClick={refresh}
                          to={`/Dados/${item.login}`}
                        >
                          Ir para repositorio
                        </LinkReposFollorws>
                      </ul>
                    );
                  })}
                </DivSeguidores>
              </AsideRight>
            </FlexWecolmeGrapchFollows>
          </div>

          <div className="active-data-project">
            <DataProject>
              <TitleProject>
                <div>
                  <h2>Repositórios</h2>
                  <strong>Total: {repos.length}</strong>
                </div>
              </TitleProject>
              <ul>
                {repos.map((item) => {
                  return (
                    <LiDataProject className="li-data-project" key={item.id}>
                      <div className="column-div-li-data-project-1">
                        <p>
                          <strong>Projeto:</strong>
                          {item.name}
                        </p>
                        <p className="span-caractere">
                          <strong>Descrição:</strong>
                          <p> {item.description}</p>
                        </p>
                        <p>
                          <strong>Descrição:</strong> {item.created_at}
                        </p>
                        <p>
                          <strong>Linguagem:</strong> {item.language}
                        </p>
                      </div>
                      <div className="column-div-li-data-project-2">
                        <a
                          target={`_blank`}
                          href={`https://github.com/${item.full_name}`}
                        >
                          Acessar repositorio
                        </a>
                      </div>
                    </LiDataProject>
                  );
                })}
              </ul>
            </DataProject>
          </div>
        </ContainerFluid>
      </section>
    </Main>
  );
}

export default Dados;
