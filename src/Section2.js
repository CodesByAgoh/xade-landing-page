import React from 'react'
import './Section2.css'
import img2 from './images/save.png'
import img3 from './images/pay.png'
import img4 from './images/loan.png'
import img5 from './images/card services.png'
import img6 from './images/invest.png'

function Section2() { 
  return (
    <div className='section2 reveal'>
        <span className='solution1'>A</span>
        <span className='one__stop2'>one stop</span>
        <span className='solution'>solution for all your finances</span>
        <h2 className='explore2'>Explore all the financial features offered by xade
         <br/> and benefit from using them </h2>
         <br/>
         <br/>
         <div className='all__cards'>
             <div>
                <div className='cards'>
                    <img className='img2' src={img2} alt=''/>
                    <h1 className='card__title'>Save</h1>
                    <p className='card__body'>
                        Xade provides you with the 
                        opportunity to earn 15% of your
                         savings annually, which is much
                        higher than any other traditional
                         financial institute could provide
                    </p>
                </div>
                <div className='cards'>
                    <img className='img2' src={img4} alt=''/>
                    <h1 className='card__title'>Loan</h1>
                    <p className='card__body'>
                        Borrow against real world objects,
                        digital assets or your holdings at
                         industry competitive rates wth a 
                         single tap or send from your
                          credit line gives by Xade
                    </p>
                </div>
             </div>

             <div>
                <div className='cards'>
                    <img className='img2' src={img6} alt=''/>
                    <h1 className='card__title'>Invest</h1>
                    <p className='card__body'>
                    Invest in more than 5000 markets 
                    throught synthetic tokenixed 
                    derivatives that provide features like:
                    leveraged trading, short selling 
                    and fractional ownership</p>
                </div>
                <div className='cards'>
                    <img className='img2' src={img5} alt=''/>
                    <h1 className='card__title'>Card Services</h1>
                    <p className='card__body'>
                        Subscribe to Xade and get your
                         personal customized credit card
                        that allow you to spend from your 
                        credit line or savings account and 
                        enjoy multiple benefits
                    </p>
                </div>
             </div>

             <div>
                <div className='cards'>
                    <img className='img2' src={img3} alt=''/>
                    <h1 className='card__title'>Pay</h1>
                    <p className='card__body'>Connect to Xade and become able to 
                    send or request payments to your 
                    social media accounts globally with
                     instant settlements and almost
                    zero fees</p>
                </div>
                <div  className='learn__more'>
                    <a  className='learn__moe'href='#'> Learn more</a>
                </div>
             </div>
                
             
         </div>
    </div>

  )
}

export default Section2