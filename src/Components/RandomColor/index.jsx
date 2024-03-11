import React, { useEffect, useState } from "react";

export default function RandomColor() {
    const [type,setType]=useState('hex')
    const[color,setColor]=useState('black')
    useEffect(()=>{
        type==='hex'?handleHexColor():handleRgbColor()
    },[type])
    function randomGenerator(length){
        return Math.floor(Math.random()*length)
    }
    function handleHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexText='#'
    for (let i = 0; i < 6; i++) {
            hexText+=hex[randomGenerator(hex.length)]
    }
    setColor(hexText)
    }
    function handleRgbColor(){
        let rgbArray=[]
        for (let i = 0; i < 3; i++) {
            rgbArray.splice(1,0,randomGenerator(256))
        }
       
        let rgb=`(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`
        setColor(rgb)
    }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        background:type==='hex'?color:'rgb'+color

      }}
    >
      <section style={{
        display:'flex',gap:'20px'
      }}  className="buttons-container">
        <button onClick={()=>setType('hex')}>change to hex</button>
        <button onClick={()=>setType('rgb')}>change to rgb</button>
        <button onClick={type==='hex'?handleHexColor:handleRgbColor}> random color</button>
      </section>
      <section
        style={{
          width: "100%",
          height: "100%",
          display:'flex'
          ,flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
        className="color"
      >
        <h1>{type==='hex'?'HEX COLOR ':'RGB COLOR'}</h1>
        {type==='hex'? <h3 className="color-text">
            {color}
        </h3>:<h3 className="color-text">
            {'rgb'+color}
            </h3>}
       
      </section>
    </div>
  );
}
