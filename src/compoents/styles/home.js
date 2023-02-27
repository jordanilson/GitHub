import styled from "styled-components";
export const Main = styled.main`
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  align-items: center;
  h2 {
    padding-bottom: 20px;
    font-size: 2rem;
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 300px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
export const Section_Home = styled.section`
  margin-top: -100px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;
export const Form = styled.form`
  background-color: #a7a7a7;
  width: 100%;
  padding: 0px 12px 12px 30px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252530;
  border: solid 1.8px white;

  @media (max-width: 500px) {
    padding: 0px 8px 8px 8px;
  }
  @media (max-width: 340px) {
    padding: 0px 7px 7px 7px;
  }
`;
export const Input = styled.input`
  flex: 1;
  font-size: 1.3rem;
  background-color: transparent;
  border: solid 0;
  outline: 0;
  border: 0;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.15 ease-in-out;
  padding: 10px 24px;
  border-radius: 8px;
  color: white;
  display: flex;

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 10px 10px;
  }
  @media (max-width: 390px) {
    font-size: 0.95rem;
    padding: 10px 20px;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
    padding: 8px 15px;
  }
`;
export const Links = styled.div`
  color: #fff;
  cursor: pointer;
  background-color: #2a87f8;
  padding: 10px;
  width: 100px;
  text-align: center;
  border-radius: 10px;
  position: relative;
  top: 5px;

  :hover {
    background-color: #255bc3;
    transition: 0.25s ease-in-out;
  }

  @media (max-width: 500px) {
    padding: 8px;
    margin-bottom:2px;
  }

   @media (max-width:390px){
   padding:2px
   max-width:10px;
   margin-bottom:5px;
  }
  
  @media (max-width:340px){
    padding:0px
    max-width:8px;
    margin-bottom:5px;
   }
`;

export const Li = styled.li`
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.size}rem`};
  @media (max-width: 340px) {
    font-size: 1rem;
  }
`;
