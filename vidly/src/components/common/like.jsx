import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importa los íconos

export const Like = ({ liked, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: "pointer" }} title={liked ? "Unlike" : "Like"}>
      {liked ? (
        <FaHeart color="red" size="1.5em" /> // Ícono lleno para "liked"
      ) : (
        <FaRegHeart color="gray" size="1.5em" /> // Ícono contorno para "unliked"
      )}
    </span>
  );
};

