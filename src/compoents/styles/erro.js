import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
height:100vh;
align-items: center;
margin-top: 300px;
}
h1{
    font-size: 3.5rem;
    color: #ffffff;
}
p{
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;
}
@media (max-width: 500px) {
    h1{
        font-size: 3rem;
        color: #ffffff;
    }
    p{
        font-size: 1.2rem;
        color: #ffffff;
        font-weight: bold;
    }
  }
  @media (max-width: 300px) {
    h1{
        font-size: 2rem;
        color: #ffffff;
    }
    p{
        font-size: 0.85rem;
        color: #ffffff;
        font-weight: bold;
    }
  }

`;

export const LINK = styled(Link)`
  background-color: #3e77e5;
  padding: 12px;
  border-radius: 10px;
  color: #ffffff;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.25s ease-in-out;
  :hover {
    background-color: #255bc3;
  }
  
  @media (max-width: 300px) {
    padding: 8px;
    font-size: 0.85rem;
  }
`;
