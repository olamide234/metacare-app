import React from 'react'
import './SideBar.css'
import {RiMessage3Line} from 'react-icons/ri'
import {IoPeopleOutline, IoCalendarClearOutline} from 'react-icons/io5'
import {CgCheckR} from 'react-icons/cg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'

export default function SideBar() {
    return (
        <div className="care__sideBar">
            <div className="care__sideBar-contact">
                <p className="care__sideBar-contact__name">Metacare</p>
                <p className="care__sideBar-contact__email">adeyinka@metacare.app</p>
            </div>
            <div className="care__sideBar-menu">
                <div className="care__sideBar-menu__tab">
                    <div className="care__sideBar-menu__tab-admin">
                        <IoPeopleOutline size={18} color="#696D8C" className="symbol"/>
                        Admin
                    </div>
                    <div><BiChevronRight size={18} color="#E5E4EF"/></div>
                </div>
                <div className="care__sideBar-menu__tab">
                    <div className="care__sideBar-menu__tab-knowledge">
                        <CgCheckR size={16} color="#696D8C" className="symbol"/>
                        Knowledge Base
                    </div>
                    <div><BiChevronRight size={18} color="#E5E4EF"/></div>
                </div>
                <div className="care__sideBar-menu__tab">
                    <div className="care__sideBar-menu__tab-training" >
                        <CgCheckR size={16} color="#696D8C" className="symbol"/>
                        Training SAM
                    </div>
                    <div><BiChevronRight size={18} color="#E5E4EF"/></div>
                </div>
                <div className="care__sideBar-menu__tab">
                    <div className="care__sideBar-menu__tab-agent">
                        <IoCalendarClearOutline size={16} color="#696D8C" className="symbol"/>
                        Agent Inbox
                    </div>
                    <div><BiChevronRight size={18} color="#E5E4EF"/></div>
                </div>
                <div className="care__sideBar-menu__tab">
                    <div className="care__sideBar-menu__tab-help">
                        <AiOutlineClockCircle size={18} color="#696D8C" className="symbol"/>
                        Help Center
                    </div>
                    <div><BiChevronRight size={18} color="#E5E4EF"/></div>
                </div>
                <div className="care__sideBar-menu__container">
                    <div className="care__sideBar-menu__tab">
                        <div className="care__sideBar-menu__tab-analytics">
                            <RiMessage3Line size={18} color="#6837EF" className="symbol"/>
                            Analytics
                        </div>
                        <div><BiChevronDown size={18} color="#E5E4EF"/></div>
                    </div>
                    <ul>
                        <li>Teams</li>
                        <li>Knowledge Base</li>
                        <li>Training SAM</li>
                        <li>Help Center</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
