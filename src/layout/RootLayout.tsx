import NavBar from '../page/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootLayout