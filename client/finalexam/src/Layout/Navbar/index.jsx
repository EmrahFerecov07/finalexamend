import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar'>
    <div className='navbox'>
    <div className='navleft'>
     <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" />
    </div>
   <div className='navright'>
   <NavLink to={"/"}>Home</NavLink>
   <NavLink to={"/addpage"}>AddPage</NavLink>
   <NavLink to={"/wishlist"}>Wishlist</NavLink>
   <NavLink to={"/detail/:id"}>Detail</NavLink>
   <Link to={"/features"}>Features</Link>
   <Link to={"/gallery"}>Galerry</Link>
   <Link to={"/reviews"}>Reviews</Link>
   <Link to={"/shop"}>Shop</Link>
   <i className="fa-solid fa-basket-shopping"></i>
   <button className='btn'>Buy Now</button>
   





   </div>




    </div>




    </nav>
  )
}

export default Navbar