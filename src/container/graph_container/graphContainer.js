import React from 'react'
import './GraphContainer.css'
import {Graph} from '../../container'
import {Average, ResponseTime} from '../../components' 

export default function GraphContainer({title, color, average_text}) {
    return (
        <div className="care__graphCont">
            <div className="care__graphCont-left"><Graph title={title} color={color}/></div>
            <div className="care__graphCont-right">
                <Average text={average_text}/>
                <ResponseTime/>
            </div>
        </div>
    )
}
