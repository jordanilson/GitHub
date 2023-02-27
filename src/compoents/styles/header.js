import { Link } from "react-router-dom";
import styled from "styled-components";
export const Headers = styled.header`
  background-color: #252530;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 70px;
  border-bottom: solid 1.5px white;
  align-items: center;
 
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const LINKS = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${(props) => `${props.size}rem`};
  color: ${(props) => `#${props.color}`};
  img {
    border-radius: 50%;
    height: 39px;
  }
 
  @media (max-width: 500px) {
    font-size: 1.7rem;
  }
`;
