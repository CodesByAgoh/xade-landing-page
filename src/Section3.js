import React from 'react'
import './Section3.css'
import img6 from './images/illustration.png'
import img7 from './images/icon-2.svg'
import img8 from './images/icon-1.svg'
import img9 from './images/icon.svg'

function Section3() {
  return (
    <div className='section3 reveal'>
        <div className='security'>
            <span className='solution'>Your</span>
            <span className='one__stop'>security</span>
            <span className='solution'>is our</span>
            <span className='one__stop'>priority</span>
        </div>
            <h2 className='explore'>We believe that security and data privacy are the
            <br/>foundations of achieving mainstream adoption of 
            <br/> better banking on the blockchain
            </h2>
            <br/>
            <br/>
            <div className='key__section'>
                <div>
                    <div className='left__key'>
                        <div className='blue__side'>
                            <img className='blue__sid' src={img9}></img>
                        </div>
                        <div>
                            <p className='enabled'>Enabled by Multi-party communication <br />
                            (MPC) threshold cryptography
                            </p>
                            <p className='enabled2'>We bring together greater user experiences and cryptography <br />
                            to get the best of what Auth can provide our customers.
                            </p>
                        </div>
                    </div>
                    <div className='left__key'>
                        <div className='blue__side'>
                            <img className='blue__sid' src={img8}></img>
                        </div>
                        <div>
                            <p className='enabled'>
                            Non-custodial
                            </p>
                            <p className='enabled2'>Similar to multi-factor authentication flows, the Torus Network <br />
                            secures the user's key using multiple access points.
                            </p>
                        </div>
                    </div>
                    <div className='left__key'>
                        <div className='blue__side'>
                            <img className='blue__sid' src={img7}></img>
                        </div>
                        <div>
                            <p className='enabled'>
                            Secured and audited
                            </p>
                            <p className='enabled2'>Web3Auth leverages both academic perfomance vetted <br />
                            infrastructure and institutional grade security
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img className='img6' src={img6} alt=''/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
        
    </div>
  )
}

export default Section3