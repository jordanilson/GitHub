import React, { useEffect } from "react";
import { GoMarkGithub } from "react-icons/go";
import { Headers, LINKS } from "../styles/header";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import "./header.css";
function Header() {
  const { header } = useContext(UserContext);

  useEffect(() => {
    function fixedIcon() {
      const icon = document.querySelector(".icon-github");
      icon.classList.add("ativado-icon-github");
      const avatar = document.querySelector(".avatar");
      avatar.classList.remove("ativa-avatar");
    }
    fixedIcon();
  }, []);

  return (
    <Headers>
      <LINKS to="/" color="fff" size="2">
        GitHub
      </LINKS>
      <LINKS color="fff" size="2.3">
        <GoMarkGithub className="icon-github" />
        <img
          className="avatar"
          src={`${header.avatar_url}`}
          alt={`${header.avatar_url}`}
        />
      </LINKS>
    </Headers>
  );
}

export default Header;
