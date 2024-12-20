import React, { useState } from "react";
import AccordionItem from "./accordionItem";
import "./styles.css";


export default function Accordion({ data }) {
    const [curOpen, setCurOpen] = useState(null);
  
    return (
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
  
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title="Test 1"
          num={22}
          key="test 1"
        >
          <p>Allows React developers to:</p>
          <ul>
            <li>Break up UI into components</li>
            <li>Make components reusuable</li>
            <li>Place state efficiently</li>
          </ul>
        </AccordionItem>
      </div>
    );
  }
  
