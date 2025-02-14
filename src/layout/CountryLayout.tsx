import React from 'react'
import { Outlet } from 'react-router-dom'

const CountryLayout = () => {
    return (
        <>
            <div>List of countries</div>
            <Outlet />
        </>
    )
}

export default CountryLayout