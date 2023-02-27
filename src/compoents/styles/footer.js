import styled from "styled-components";
export const FooterSyled = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #252530;
  width: 100%;
  padding: 25px 0;
  div {
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 20px 0;
    div {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    div {
      font-size: 0.9rem;
    }
  }
`;
