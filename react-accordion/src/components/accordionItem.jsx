import React from "react";
import "./styles.css";

export default function AccordionItem({ num, title, curOpen, onOpen, children }) {
    const isOpen = num === curOpen;
  
    function handleToggle() {
      onOpen(isOpen ? null : num);
    }
  
    return (
      <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
  
        {isOpen && <div className="content-box">{children}</div>}
      </div>
    );
}
  

