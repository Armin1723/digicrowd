import React from 'react'
import Hero from '../components/Home/Hero'
import Header from '../components/shared/Header'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero/>
    </div>
  )
}

export default Home