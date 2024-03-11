import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'
  export default function StarRating({numOfStars=10}) {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const handelClick=(getCurrentIndex)=>{
      setRating(getCurrentIndex)
    }
    function handelMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }
    function handleMouseRemove(){
      setHover(rating)
    }
    

  return (

    <div>
      { [...Array(numOfStars)].map((_,index)=>{
        index +=1
      return (<FaStar
      
      className={index<=rating || index <= hover ?'active-star':'disable'}
      key={index}
      
      size={40}
      onClick={()=>handelClick(index)}
      onMouseEnter={()=>handelMouseEnter(index)}
      onMouseLeave={handleMouseRemove}
      />)
    })}
    </div>
  )
}

