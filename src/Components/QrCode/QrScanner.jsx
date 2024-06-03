import React, { useState } from 'react'
import './qr.css'
import QRCode from 'react-qr-code'
export default function QrScanner() {
    const [qr,setQr]=useState('')
    const [input,setInput]=useState()
    const handleGenerateQrCode=()=>{
        setQr(input)
        setInput('')
    }
  return (
    <div>
        <h1>qr code generator</h1>
        <div className="qr-container">
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" name='' placeholder='enter your value' />
                <button disabled={input && input.trim()!==''?false :true} onClick={handleGenerateQrCode}>Generate</button>

        </div>
        <div>
            <QRCode
            id='qr-code-value'
            value={qr}
            bgColor='#fff'
            />
        </div>
    </div>
  )
}
