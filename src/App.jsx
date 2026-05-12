import React from 'react'
import Navbar from '../src/components/Navbar'
import Carousel from './components/Carousel'
import Choose from './components/Choose.jsx'
import Services from './components/Services'
import ClientsFeed from './components/ClientsFeed.jsx'

function App() {

  return (
   <div>
      < Navbar />
      < Carousel />
      < Choose />
      < Services />
      < ClientsFeed />
   </div>
  )
}

export default App
