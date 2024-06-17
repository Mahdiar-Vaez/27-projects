import React from 'react'

export default function Suggestion({data}) {
  return (
    <ul>
        {data && data.length?
        data.map((item,index)=><li key={index}>
                {item}
        </li>):null}
    </ul>
  )
}
