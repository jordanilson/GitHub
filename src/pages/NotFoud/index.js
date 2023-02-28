import React, { useEffect } from "react";

function NotFoud() {
  useEffect(() => {
    const icon = document.querySelector(".icon-github");
    icon.classList.remove("ativado-icon-github");
    const avatar = document.querySelector(".avatar");
    avatar.classList.add("ativa-avatar");
  }, []);
  return <div>NotFoud</div>;
}

export default NotFoud;
