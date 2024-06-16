import React, { useEffect, useState } from 'react'
import './github.css'
import User from './User'
export default function GitHubUserFinder() {
    const [username,setUsername]=useState()
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)
    async function  fetching (){
   try {
                    const res=await fetch(`https://api.github.com/users/${username}`)
                    const data=await res.json()
                    setData(data)
                    setLoading(false)
                } catch (error) {
                    alert(error)
                    setLoading(false)
                }
            }
    console.log(data)
        useEffect(()=>{
            fetching()
             
        },[])
    function handleSubmit(){
     fetching()
     setUsername('')
    }
    if(loading)
        return <h1 style={{textAlign:'center'}}>Loading...</h1>
  return (
    <div className='github-container'>
        <div className='input-wrapper'>
        <input  onChange={(e)=>setUsername(e.target.value) } name='search by username'
        type='text'
        placeholder='search git hub user name'
        value={username}
        />
        <button onClick={handleSubmit}>
            Search Username
        </button>
</div>
<User data={data}/>
    </div>
  )
}
