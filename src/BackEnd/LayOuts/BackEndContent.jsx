import React from 'react'
import { Outlet } from 'react-router-dom'
import BackEndHome from './BackEndHome'

const BackEndContent = () => {
    return (
        <div style={{ color: "#fff" }} className="content">
            <Outlet></Outlet>
        </div>
    )
}

export default BackEndContent