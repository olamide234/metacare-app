import React, { useState } from 'react'
import './SideBar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import {MainApp} from '../../container'
import Menu from './Menu.js'

export default function SideBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>
            <div className="care__sideBar">
                <Menu/>
            </div>
            <div className="care__sideBar-small">
                {!toggleMenu &&
                    <RiMenu3Line color="#696D8C" className="icon" onClick={() => setToggleMenu(true)} />
                } 
                {toggleMenu && (
                    <div className="care__sideBar-small__part">
                        <RiCloseLine color="#696D8C" className="icon" style={{margin: '2rem 0'}} onClick={() => setToggleMenu(false)} />
                        <Menu/>
                    </div>
                )}
            </div>
        </div>
    )
}
