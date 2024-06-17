import { Dropdown } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'

export default function SearchAutoComplete() {
    const [users,setUsers]=useState()
    const [searchParam,setSearchParam]=useState()
    const [showDropdown,setShowDropDown]=useState()
    const [filterUser,setFilterUser]=useState([])
    function handleChange(e){
        const query=e.target.value.toLowerCase()
        setSearchParam(query)
        if(query.length>1){
            const filterData=users&& users.length?
            users.filter((item)=>item.toLowerCase().indexOf(query)>-1)
            :[];
            setFilterUser(filterData)
            setShowDropDown(true)
        }
        else{
            setShowDropDown(false)
        }
    }
    async function fetching(){
        try {
            const res=await fetch('https://fakestoreapi.com/users')
            const data=await res.json()
            setUsers(data?.map((item)=>item.username))
            

        } catch (error) {
           console.log(error) 

        }
    }
    useEffect(()=>{
fetching()
    },[])
    console.log(users)
  return (
    <div className='search-autocomplete'>
        <p>this search autocomplete has a few users i think 10 users 
            i list them here to check their name in search  </p>
           <ul>{users.map((e,index)=><li key={index}>
            {e}
           </li>)}</ul> 
        <input type='text' onChange={(e)=>handleChange(e)} name='search-users' placeholder='Search...' />
        {
            showDropdown&& <Suggestion data={filterUser}/>
        }
    </div>
  )
}
