import { useEffect, useState } from "react";

export default function useFetch(url,option={}){
    const [data,setData] = useState(null);
    console.log("🚀 ~ useFetch ~ data:", data)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        (async()=>{
            try {
                const response=await fetch(url,{...option})
                const data =await response.json()
                setData(data)
                setLoading(false)
                setError(false)
            } catch (error) {
                alert(error)
                setError(error)
                setLoading(false)
            }
        })()
    },[url])

    return {data,error,loading}
}