import React from 'react'
import './NavBar.css'
import {Link} from 'react-scroll'
/* import './Responsive.css' */




/* const toggleBotton = document.getElementsByClassName('toggle__botton')[0]
const navbarLinks = document.getElementsByClassName('right__side')[0]

 toggleBotton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})  */


function NavBar() {
  return (
    <div className='navbar'>
        <div className='left__side'>
            <h1 className='left__side__text'>xade</h1>
        </div>
        <a href='#' className='toggle__botton'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>
        <div className='right__side'>
         <div className='right__side2'>
         <Link className='right__side__text' to="section2" spy={true} smooth={true} offset={50} duration={500} >
            Personal
            </Link>
                
            <Link className='right__side__text' to="section3b" spy={true} smooth={true} offset={50} duration={500} >
            Business
            </Link>
            <Link className='right__side__text' to="section4" spy={true} smooth={true} offset={50} duration={500} >
            Contact Us
            </Link>
                <a className='webapp' href='https://app.xade.finance/'> Web App</a>
           </div> 
            
        </div>
    </div>
  )
}

export default NavBar