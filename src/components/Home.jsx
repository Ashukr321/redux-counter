import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <h1>welcome to Counter Application 🤩😎</h1>
        <div>
        <Link   to='/counter'>
          <button style={{color:"#000"}} className='btn'> Go to Counter</button></Link>
        </div>
    </div>
  )
}

export default Home