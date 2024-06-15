import React, { useState } from 'react'
import './tabs.css'
export default function Tabs({tabsContent,handelChange}) {
 const [currentTab,setCurrentTab]=useState(0)
    function handleClick(currentTabIndex){
        setCurrentTab(currentTabIndex)
        handelChange(currentTabIndex)
    }
    return (
    <div className='wrapper'>
        <div className='heading'>
            {
                tabsContent.map((tabItem,index)=><div className={`tab-item ${currentTab==index ?'active':''}` }onClick={()=>handleClick(index)} key={tabItem?.label} >
                    <span>{tabItem?.label}</span>

                </div>)
            }
        </div>
        <div className='content'>
                {
                    tabsContent[currentTab] && tabsContent[currentTab].content
                }
        </div>
    </div>
  )
}
