import React, {useState} from 'react'
import 'Stylesheets/NavBar.css'
import {Link} from 'react-scroll'
import '../Stylesheets/Responsive.css'



/*  const toggleBotton = document.querySelector('.toggle__botton');
const  navbarLinks = document.querySelector('.right__side');

 toggleBotton.addEventListener( 'click',() => {
  toggleBotton.classList.toggle('active');
  navbarLinks.classList.toggle('active');
})  
 */


 
function NavBar() {

  const [showMenu, setShowMenu] = useState(false)

let menu

  if (showMenu) {
    menu =  <div className='right__side3 right__side'>
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
  }

  return (
    <div className='navbar'>
        <div className='left__side'>
            <h1 className='left__side__text'>xade</h1>
        </div>
        <div className='toggle__botton' onClick={() => setShowMenu(!showMenu)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
          {menu}
        </div>

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