import { Link } from 'react-router-dom'


import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
       <Link to ={"/Signup"} className="signup-button">Click here to sign up</Link>
    </div>
  )
}

export default Home