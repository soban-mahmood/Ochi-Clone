// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Marque from './component/Marque'
import About from './component/About'
import Eyes from './component/Eyes'
import Featured from './component/Featured'
import Card from './component/Card'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Bar from './component/Bar'

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 '>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/> 
      <Eyes/> 
      <Featured/>
      <Card/>
      <Bar/> 
      <Footer/>
    </div>
  )
}

export default App
