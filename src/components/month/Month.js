import React from 'react'
import "./Month.css"
import {IoCalendarClearOutline} from 'react-icons/io5'

export default function Month() {
    return (
        <div className="care__month">
            <div>This Month</div>
            <IoCalendarClearOutline size={14} color="#060213"/>
        </div>
    )
}
