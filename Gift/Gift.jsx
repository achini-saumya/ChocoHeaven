import React from 'react'
import './Gift.css'

import img12 from '../Assets/img12.jpg'
import img13 from '../Assets/img13.jpg'
import img14 from '../Assets/img14.jpg'
import img15 from '../Assets/img15.jpg'

const Gift = () => {
  return (
    <>
    <h1 name='products'  className='h1G'>Products</h1>
    <div className="containerA">
      <img src={img12} alt='' className='img' />
      <img src={img13} alt='' className='img'/>
      <img src={img14} alt='' className='img'/>
      <img src={img15} alt='' className='img'/>
    
    </div>
    </>
  )
}

export default Gift