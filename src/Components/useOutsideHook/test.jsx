import React, { createRef, useRef, useState } from 'react'
import useOutSide from '.'

export default function UseOnClickOutside() {
  const [show,setShow]=useState(false)
  const ref=useRef()
    useOutSide(ref,()=>setShow(false))
    return (
        <div>  

            {show? <div ref={ref} style={{
                width:400,
                height:'max-content',
                backgroundColor:'#888'
                ,
                borderRadius:'10px',
                position:'fixed',
                flexDirection:'column',
                gap:5,
                padding:'20px',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)',
                display:'flex',
            }} className='modal'>
                <h1>this is modal</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum porro autem, facere repudiandae, nobis blanditiis totam molestiae sit dignissimos accusantium iure. Quaerat eligendi quos cupiditate non culpa, corrupti tempora totam?

                </p>


            </div>:<button onClick={()=>setShow(true)}>show Content</button>}   
    </div>

  )
}
