import React from 'react';
import CommonButton from './CommonButton';
import "../Styles/Nav.css"

const  NavbarComponent = () => {
  return (
    <div className='header-div'>
    <div className='search-div'>
    
    <input type="text" placeholder='Search anything' className='inputs' />
   <CommonButton label="Search" className={`Custom-button-class`} />
    </div>

    <div className='icon-div'>
    <div className='wishlist'>
   
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" fill="none">
    <path d="M8.09907 13.4168C7.891 13.4902 7.54829 13.4902 7.34022 13.4168C5.56548 12.8109 1.59985 10.2835 1.59985 5.99961C1.59985 4.10859 3.12368 2.57864 5.00246 2.57864C6.11626 2.57864 7.10154 3.11719 7.71964 3.94948C8.33774 3.11719 9.32915 2.57864 10.4368 2.57864C12.3156 2.57864 13.8394 4.10859 13.8394 5.99961C13.8394 10.2835 9.87381 12.8109 8.09907 13.4168Z" stroke="white" stroke-width="0.917968" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
   
   
    <p className='counter'>0</p>
    <h4 className='nav-signin'>Sign in</h4>
    </div>
    <div className='wishlist'>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
<path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className='counter'>0</p>
<h4 className='nav-signin'>Cart</h4>
    </div>
    </div>
    </div>
  )
}

export default  NavbarComponent