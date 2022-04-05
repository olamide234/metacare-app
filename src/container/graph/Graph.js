import React from 'react'
import './Graph.css'
import {Month, Percentage, Priority} from '../../components' 

export default function Graph({title, color}) {
    return (
        <div className="care__graph">
            <div className="care__graph-content">
                <div className="care__graph-content__left">
                    <div className="care__graph-content__left-txt">{title}</div>
                    <Percentage/>
                </div>
                <div className="care__graph-content__right">
                    <Priority bg_color={color}/>
                    <Month/>
                </div>
            </div>
            <div></div>
        </div>
    )
}
