import React from 'react'
import "../../App.css"
const Header = () => {
  return (
    <>
      <nav className='navbar row'>
        <div className='col-12 col-md-3'>
            <div className='navbar-brand' >
                <h1 className='name-brand'>QuickMart</h1>
            </div>
        </div>
        <div className='col-12 col-md-6 mt-2 mt-md-0'>
            <div className='input-group'>
               <input type="text" className='form-control' placeHolder='Enter Product Name'/>
               <div className='input-group-append'> 
                <button id='search-btn' className='btn'>
                    <i className='fas fa-search' aria-hidden="true"></i>
                </button>
               </div>
            </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button class="btn" id="login_btn">Login</button>

        <span id="cart" className="ml-3">Cart</span>
        <span class="ml-1" id="cart_count">2</span>
      </div>
      </nav>
    </>
  )
}

export default Header;
