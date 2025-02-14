import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='w-full h-16 flex justify-center items-center bg-red-500 space-x-3'>
            <h1>NavBar</h1>
            <ul className='flex space-x-3'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/product"><li>Product</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/countries"><li>Countries</li></NavLink>
            </ul>
        </div>
    )
}

export default NavBar