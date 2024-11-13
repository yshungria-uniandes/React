// src/common/like.jsx
import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o"; // Cambia el ícono si `liked` es falso

  return (
    <i
      onClick={onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export { Like };
