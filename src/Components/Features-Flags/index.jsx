import React, { useContext } from 'react'
import LightDarkMode from '../LighDarkMode/LightDarkMode'
import TicTacToe from '../Tic-Tac-Toe'
import RandomColor from '../RandomColor'
import Accordion from '../Accordion/Accordion'
import { FeaturesFlagsContext } from './Context'

export default function FeaturesFlags() {
    const {loading,enabledFlags}=useContext(FeaturesFlagsContext)

    const componentsToRender=[
        {key:'showLightDarkMode',
            component:<LightDarkMode/>
        },
        {key:'showTicTacToe',
        component:<TicTacToe/>
    },
    {key:'showRandomGenerator',
    component:<RandomColor/>
},
{key:'showAccordion',
component:<Accordion/>
},

    ]
    function checkEnableFlags(getCurrentKey){

        return enabledFlags[getCurrentKey]
    }
    if (loading){
        return <h1>loading ...</h1>
    }
  return (
    <div>FeaturesFlags
        {
            componentsToRender.map(componentItem=>
                checkEnableFlags(componentItem.key) ? componentItem.component : null            )
        }
    </div>
    
  )
}
