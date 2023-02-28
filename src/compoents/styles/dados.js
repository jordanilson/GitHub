import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;
  min-height: 100vh;
  @media (max-width: 1300px) and (min-width: 600px) {
    height: auto;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    height: auto;
  }
  @media (max-width: 500px) {
    height: auto;
  }
`;

export const AsideNav = styled.aside`
  width: 80px;
  min-height: 100vh;
  padding: 20px;
  background-color: #252530;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    position: relative;
    top: 5px;
  }
  li {
    width: 75px;
    padding: 13px 15px;
    height: 5rem;
    margin-top: 30px;
    font-size: 1.7rem;
    display: flex;
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
  }

  span {
    font-size: 0.75rem;
    text-align: center;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    height: auto;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    height: auto;
  }
  @media (max-width: 500px) {
    height: auto;
    width: 60px;
    li {
      position: relative;
      left: 1px;
      height: 75px;
      width: 50px;
      padding: 15px 8px;
      span {
        font-size: 0.7rem;
      }
    }
  }
`;
export const ContainerFluid = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexWecolmeGrapchFollows = styled.div`
  display: flex;
  padding-right: 90px;
  width: 100%;
  justify-content: center;
  @media (max-width: 1300px) and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-left: 10px;
    max-width: 1100px;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    padding-right: 75px;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    padding-left: 15px;
    display: flex;
    flex-wrap: wrap;
    padding-right: 75px;
  }
`;
export const FlexWecolmeBackGrapichs = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;
export const DivWecolmeBack = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #252530;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  h3 {
    margin-top: 15px;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    ul {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 500px) {
    ul {
      h1 {
        font-size: 1.2rem;
      }
    }
  }
`;
export const DivMostUsedLanguages = styled.div`
  h2 {
    padding: 20px;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    h2 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) and (min-width: 500px) {
    display: flex;
    flex-direction: column;
    h2 {
      text-align: center;
      font-size: 1.3rem;
    }
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    h2 {
      text-align: center;
      font-size: 1rem;
    }
  }
`;

export const FlexGraphicDataGuys = styled.div`
  margin: 0 auto;
  max-width: 600px;
  div {
    margin: 0 auto;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    width: 100%;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const AsideRight = styled.aside`
  margin: 50px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 55em;
  overflow-y: scroll;
  overflow-x: hidden;
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 25px;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #24242f;
  }
  @media (max-width: 1700px) and (min-width: 1300px) {
    margin-right: 20px;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin-bottom: 50px;
    padding: 0 20px;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin-left: 20px;
    margin-bottom: 50px;
    span {
      h2 {
        font-size: 1.3rem;
      }
      strong {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin-left: 20px;
    margin-bottom: 50px;
    span {
      h2 {
        font-size: 1rem;
      }
      strong {
        font-size: 0.95rem;
      }
    }
  }
`;
export const DivSeguidores = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 15px;
    background-color: #252530;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 15px;
    padding: 20px;
    width: 30em;
    div {
      display: flex;
      gap: 20px;
    }
  }
  img {
    border-radius: 50%;
    width: 50px;
  }
  li {
    margin-top: 8px;
  }
  span {
    strong {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1700px) and (min-width: 1300px) {
    ul {
      margin-right: 20px;
      width: 95%;
    }
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    gap: 10px;
    ul {
      display: flex;
      flex-direction: column;
      width: 700px;
    }
    ::-webkit-scrollbar {
      width: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #24242f;
      width: 100px;
    }
  }
  @media (max-width: 600px) and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    gap: 10px;
    ul {
      display: flex;
      flex-direction: column;
      width: 700px;
    }
    ::-webkit-scrollbar {
      width: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #24242f;
      width: 100px;
    }
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    gap: 10px;
    ul {
      display: flex;
      flex-direction: column;
      width: 700px;
    }
    ::-webkit-scrollbar {
      width: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #24242f;
      width: 100px;
    }
  }
`;
export const LinkReposFollorws = styled(Link)`
  margin: 18px 0px 0px 0px;
  padding: 10px;
  width: 35%;
  border-radius: 5px;
  background-color: #047dda;
  color: white;
  @media (max-width: 1700px) and (min-width: 1300px) {
    width: 150px;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    width: 200px;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    width: 200px;
  }
  @media (max-width: 500px) {
    width: 150px;
    font-size: 0.85rem;
  }
`;
export const DivDataFolowrs = styled.div`
  background-color: #252530;
  height: 12.7em;
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  margin: 70px 0px 0px 0;
  margin-left: 10px;
  div {
    display: flex;
    flex-direction: column;
    margin: 20px 50px;
    font-size: 1.1rem;
  }
  h2 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 8px;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    margin: 20px 0px;
    padding-left: 35px;
    height: 17em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      margin: 0;
      padding: 0;
      h2 {
        text-align: center;
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: 500px) {
    margin: 15px 0px;
    padding: 0 15px;
    height: 17em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    div {
      margin: 0;
      padding: 0;
      h2 {
        font-size: 1rem;
        text-align: center;
        transform: translateX(-5%);
      }
      p {
        font-size: 0.9rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
        width: 250px;
      }
    }
  }

  @media (max-width: 600px) and (min-width: 500px) {
    margin: 20px 0px;
    padding-left: 35px;
    height: 17em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      margin: 0;
      padding: 0;
      h2 {
        font-size: 1em;
        text-align: center;
        transform: translateX(-5%);
      }
      p {
        font-size: 1.2rem;
        font-size: 0.9rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
        width: 300px;
      }
    }
  }
`;
export const ThirdDivDataFolowrs = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1700px) and (min-width: 1300px) {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 1300px) and (min-width: 600px) {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 500px) {
    margin: 0;
    padding: 0;
  }
`;
export const ActiveDataUser = styled.div`
  width: 100%;
`;
export const ActiveDataProject = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const DataProject = styled.div`
  margin: 0 15px;
  max-width: 1500px;
  ul{
     display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  @media(max-width:1600px) {
        display: flex;
        justify-content: space-between;
    }

@media(max-width:1000px) {
   ul{
      display: flex;
      justify-content: space-around;
  }

@media(max-width:850px) {
    . ul {
        display: flex;
        flex-direction: column;
        width: 100%;   
    }

}

`;

export const TitleProject = styled.div`
  width: 100%;
  background-color: #252530;
  padding: 30px 15px 30px 0px;
  border-radius: 10px;
  div {
    display: flex;
    margin-left: 15px;
    padding-right:20px;
    align-items: center;
     width: 100%;
    justify-content: space-between;
    span {
      font-size: 1.3rem;
    }
    strong {
      font-size: 1.3rem;
    }
  
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  @media(max-width:500px) {
    div{
      h2 {
        font-size: 1.2rem;
      }
    }

    .div{
      strong {
        font-size: 1.2rem;
       }
    }
}
`;
export const LiDataProject = styled.div`
  border-radius: 10px;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 32.2%;
  height: 200px;
  background-color: #252530;
  margin: 10px 0;
  font-size: 1rem;
  @media (max-width: 1600px) {
    .li-data-project {
      width: 32%;
      height: 17em;
    }

@media(max-width:1000px) {
  .li-data-project {
      width: 350px;
      height: 15em;
  }

  @media(max-width:850px) {
    .li-data-project {
        width: 100%;
        height: 12em;
    }

  }
`;
