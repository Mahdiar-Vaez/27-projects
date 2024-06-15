import React from 'react'
import Tabs from './Tabs'

function RandomComponent(){
    return <h1>some random content </h1>
}
export default function TabTest() {
    const tabs=[
        {
            label:'tab 1',
            content:<div>this is content for tab 1</div>
        },
        {
            label:'tab 2',
            content:<div>this is content for tab 2</div>
        },
        {
            label:'tab 3',
            content:<RandomComponent/>
        },        
    ]
    function handelChange(currentIndex){
        console.log(currentIndex)
    }
  return (
    <Tabs tabsContent={tabs} handelChange={handelChange}/>
)
}
