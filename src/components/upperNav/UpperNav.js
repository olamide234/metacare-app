import React from 'react'
import './UpperNav.css'
import {RiSearchLine} from "react-icons/ri"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiChevronDown} from "react-icons/bi"

export default function UpperNav() {
    return (
        <div className="care__upperNav">
            <div className="care__upperNav-left">
                <input className="" type="text" placeholder="Ask us any question"/>
                <RiSearchLine size={18} color="#A3A3C2"/>
            </div>
            <div className="care__upperNav-right">
                <div className="care__upperNav-right__notif">
                    <IoMdNotificationsOutline size={18} color="#92929D"/>
                    <div>3</div>
                </div>
                <div className="care__upperNav-right__circle-down">
                    <div></div>
                    <BiChevronDown size={18} color="#696D8C"/>
                </div>
            </div>
        </div>
    )
}
