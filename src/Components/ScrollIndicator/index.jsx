import { useEffect, useState } from "react"
import './scroll.css' 
export default function ScrollIndicator() {
    const [data,setData]=useState()
    const [scroll,setScroll]=useState()
    const [loading,setLoading] =useState(true)
    const  handleFetch=async()=>{
    try {
        const res=await fetch('https://dummyjson.com/products')
        const data=await res.json()
        setData(data?.products)
        setLoading(false)
    } catch (error) {
        alert(error)
    }
   }
    useEffect(()=>{
        handleFetch()
},[])
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
              console.log(
                document.body.scrollTop,
                document.documentElement.scrollTop,
                document.documentElement.scrollHeight,
                document.documentElement.clientHeight

              )
              const howMuchScrolled=document.body.scrollTop || document.documentElement.scrollTop
              const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
              setScroll((howMuchScrolled/height)*100)
              
        })
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
},[])
console.log(scroll)
    return (
    <div>   
        <div className="top-container">
              <div className="scroll-progress">
                <div className="current-progress-bar" style={{
                    width:`${scroll}%`
                }}>

                </div>
             </div>

        </div>
             <h1>Costume scroll Indicator</h1>
           
        {loading? <><p>loading...</p></>:  <div className='data-container'>
            {data?.map((e,index)=><p key={index
            }>{e?.title}</p>)}
        </div>}

        </div>
    
)
}
