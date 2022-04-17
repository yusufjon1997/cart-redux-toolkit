import React  from 'react'
import { useSelector } from 'react-redux';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {

const navigate = useNavigate();
    
const cartItems = useSelector(state => state.cart.cartItems.length);
    

  return (
    <div className='header'>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="menu-container">
          <ul className='menu'>
              <li className='menu-item'>
                  <Link to='/' >Products </Link>
              </li>
          </ul>
        </div>
          <div className="icon" onClick={()=> navigate('/cart')}> <BsCart2 /> {cartItems}  </div>
    </div>
  )
}

export default Navbar