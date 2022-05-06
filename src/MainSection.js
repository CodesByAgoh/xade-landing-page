import React from 'react'
import './MainSection.css'
import img1 from './images/business-3d-good-job-1 1.png'

function MainSection() {
  return (
    <div className='mainsection'>
        <div className='main__text'>
            <h1 className='financial__system'>
                We're bringing <br/>
                the future of the <br/>
                financial system
            </h1>
            <h1 className='today'>today.</h1>
        </div>
        <div className='main__image'>
            <img className='img1' src={img1} alt=''/>
        </div>
    </div>
  )
}

export default MainSection