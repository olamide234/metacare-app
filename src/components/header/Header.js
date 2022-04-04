import React from 'react'
import './Header.css'
import {RiSearchLine} from "react-icons/ri"
import {BiChevronDown} from "react-icons/bi"

export default function Header() {
    return (
        <div className="care__header">
            <div className="care__header_title">Efficiency Analytics</div>
            <div className="care__header-content">
                <div className="care__header-content__search">
                    <RiSearchLine size={14} color="#A3A3C2" style={{cursor: "pointer"}}/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="care__header-content__filter">
                    Filter Options
                    <BiChevronDown size={18} color="#060213" style={{cursor: "pointer"}}/>
                </div>
                <div className="care__header-content__vertLine"></div>
                <div className="care__header-content__export">
                    <button type="button">Export</button>
                </div>
            </div>
        </div>
    )
}
