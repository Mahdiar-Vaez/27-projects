import React from 'react'
export default function Modal({handleOpen,body,footer,header,open}) {
    
    return (
    <div className={`modal-component ${open&&'active'} `}>
    <div className='modal-header'>
        <h1>{header? header:'header'}</h1>
    </div>
    <div className='modal-body'>
        <h1>{body? body :'body'}</h1>
    </div>
    <div className='modal-footer'>
        <h1>{footer ? footer:'footer'}</h1>
    </div>
    <button onClick={handleOpen}> Close Modal</button>
    </div>
  )
}
