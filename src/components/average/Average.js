import React from 'react'
import './Average.css'

export default function Average({text}) {
    return (
        <div className="care__average">
            <div className="care__average-txt">{text}</div>
            <div className="care__average-time">30 Mins</div>
        </div>
    )
}
