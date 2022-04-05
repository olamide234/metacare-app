import React from 'react'
import "./Priority.css"

export default function Priority({bg_color}) {
    return (
        <div className="care__priority">
            <div className="care__priority-main">
                <div className="care__priority-main__square" style={{background: bg_color}}></div>
                High Priority
            </div>
            <div className="care__priority-vertLine"></div>
        </div>
    )
}
