import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home() {
  return (
    <div className='home'>
       <Banner />
       
       <div className='home_section'>
          <Card src="https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg" 
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts"
         //  price = "Starting from $29"
         />
          <Card src="https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg"
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts"
         //  price = "Starting from $29"
         />
          <Card src="https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg" 
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts"
         //  price = "Starting from $29"
         />
       </div>
       <div className='home_section'>
       <Card src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" 
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts"
          price = "Starting from $199"
         />
          <Card src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts"
          price = "Starting from $29"
         />
          <Card src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" 
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts"
          price = "Starting from $48"
         />
       </div>
    </div>
  )
}

export default Home