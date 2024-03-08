import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [multiAccordion, setMultiAccordion] = useState([]);
  const [singleAccordion, setSingleAccordion] = useState();
  const handleSingle = (getCurrentId) => {
    setSingleAccordion(singleAccordion != getCurrentId ? getCurrentId : null);
  };
  function handleMulti(getCurrentId) {
    let cpyMulti = [...multiAccordion];
    const findId = cpyMulti.indexOf(getCurrentId);
    if (findId === -1) cpyMulti.push(getCurrentId);
    else cpyMulti.splice(findId, 1);
    setMultiAccordion(cpyMulti);
  }
  const [enableMultiAccordion, setEnableMultiAccordion] = useState(false);
  return (
    <div className="wrapper">
      <label htmlFor="input">
        Enable Multiple Selection{" "}
        <input
          name="input"
          onClick={() => {
            setEnableMultiAccordion(!enableMultiAccordion);
          }}
          type="checkbox"
        />
      </label>
      {data || data.length > 0 ? (
        <div className="accordion">
          {data.map((e,index) => {
            return (
              <div onClick={
                    enableMultiAccordion
                      ? () => handleMulti(e.id)
                      : () => handleSingle(e.id)
                  } key={index} className="items">
               
                 
                
                  <h3>{e.question}</h3>
                  <span>+</span>
                  {enableMultiAccordion
                    ? multiAccordion.indexOf(e.id) != -1 && (
                        <div>{e.answer}</div>
                      )
                    :( singleAccordion === e.id && <div>{e.answer}</div>)}
                </div>
            );
          })}
        </div>
      ) : null}
      {console.log(multiAccordion)}
    </div>
  );
}
