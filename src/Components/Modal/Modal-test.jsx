import React, { useState } from 'react'
import Modal from './Modal'
import './modal.css'
export default function ModalTest() {
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(!open)
    }
    console.log(open)
  return (
    <div >
        <button  onClick={handleOpen}> Open Modal </button>
        
          <Modal  open={open} body={'hi im body'} header={'hi im header'} handleOpen={handleOpen}/>
        
        </div>
  )
}
