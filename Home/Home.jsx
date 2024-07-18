import React from 'react'
import './Home.css'

import img10 from '../Assets/img10.png'


const Home = () => {
  return (
    <>
    
    <div className='container'>

        <div className='container1'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus nec leo dapibus sodales. 
            Phasellus et ultrices sapien, ut aliquet nulla. Aenean non sem et augue interdum cursus non a risus. 
            Curabitur nec feugiat ligula. Donec auctor lacus at ante elementum, ac vestibulum justo sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus nec leo dapibus sodales. 
            Phasellus et ultrices sapien, ut aliquet nulla. Aenean non sem et augue interdum cursus non a risus. 
            Curabitur nec feugiat ligula. Donec auctor lacus at ante elementum, ac vestibulum justo sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        
        </div>
        <div className='container2'>
        <img src={img10} alt='' className="img10"/>
        </div>
        

    </div>
    </>
  )
}

export default Home ;