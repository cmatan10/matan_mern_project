import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import diamond from './icon/diamond.png'
import { fontSize } from '@mui/system'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }
    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product" onClick={() => setMenu(!menu)}>Create Product</Link></li>
                <li><Link to="/category" onClick={() => setMenu(!menu)}>Categories</Link></li>
            </>
        )
    }
    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history" onClick={() => setMenu(!menu)}>History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <Link to="/">
            <img src={diamond} alt="Avatar Logo" style={{ width: '40px', marginLeft:'7px' }} class="rounded-pill" />
            </Link>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <Link to="/" className="sub_text">{isAdmin ? 'Admin' : 'matan cohen'}</Link>
                 
                </h1>
            </div>

            <ul style={styleMenu}>
            <li><Link to="/" onClick={() => setMenu(!menu)}>{isAdmin ? 'Home' : 'Home'}</Link></li>
            <li><Link to="/products" onClick={() => setMenu(!menu)}>{isAdmin ? 'Products' : 'Collection'}</Link></li>
            <li><Link to="/AboutUs" onClick={() => setMenu(!menu)}>{isAdmin ? 'About Us' : 'About Us'}</Link></li>
            <li><Link to="/ContactUs" onClick={() => setMenu(!menu)}>{isAdmin ? 'Contact Us' : 'Contact Us'}</Link></li>
    

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login" onClick={() => setMenu(!menu)}>Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header
