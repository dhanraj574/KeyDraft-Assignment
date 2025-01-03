import React from 'react'
import Navbar from '../Navbar'
import './index.css'


const Home = () => {
  return (
    <main className='home-main'>
        <Navbar/>
        <section className='home-section'>
            <h1 className='home-head'>Home</h1>
        </section>
    </main>
  )
}

export default Home