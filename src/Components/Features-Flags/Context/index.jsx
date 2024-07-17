import React, { createContext, useEffect, useState } from 'react'
import FeaturesFlags from '..'
import featuresFlagsApiCalls from '../data'
export const FeaturesFlagsContext=createContext(null)
export default function FeaturesFlagglobalState({children}){
   const [loading,setLoading]=useState(true)
   const [enabledFlags,setEnabledFlags]=useState({})
   async function fetchFeatureFlags(){
    try {
            const response=await featuresFlagsApiCalls()
            console.log(response)
            setEnabledFlags(response)
            setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
   }
   useEffect(()=>{
    fetchFeatureFlags()
   },[])
    return (
        <FeaturesFlagsContext.Provider value={{enabledFlags,loading}}>
            {children}
        </FeaturesFlagsContext.Provider>
    )
}
