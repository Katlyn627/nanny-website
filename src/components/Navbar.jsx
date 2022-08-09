import { Link, useLocation } from "react-router-dom"



import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faCog, faUserPlus } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Calendar",
            path: "/calendar",
            icon: faCog
        },
        {
            name: "Blog",
            path: "/router",
            icon: faUserPlus
        },
        {
            name: "Signup",
            path: "/form",
            icon: faUserPlus
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
        

    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">Katlyn's<span> Kinder</span>Care</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}