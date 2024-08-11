import React from 'react'
import Head1 from './Head1'
import { Link } from 'react-router-dom'
import "./head2.css"



const Head2 = () => {
  return (
    <>
    <Head1></Head1>

    <header>
         
        <nav className='flexSB'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to ="/signup">Sign Up/Sign In</Link></li>
                <li><Link to = "/about">About Us</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Head2