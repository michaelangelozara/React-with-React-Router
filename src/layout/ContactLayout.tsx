import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../page/Contact'

const ContactLayout = () => {
    return (
        <>
            <Contact />
            <Outlet />
        </>
    )
}

export default ContactLayout