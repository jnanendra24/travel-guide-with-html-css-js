import React from 'react'
import { Link } from 'react-router-dom'
import Translate from './Translate'
import { useState } from 'react'
import Login from './Login'
import { FaBars } from "react-icons/fa";
import { GiJapan } from "react-icons/gi";
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
  const {isAuthenticated, user} = useAuth0()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className='sticky top-0'>
        <div className='flex items-center bg-black text-white'>
          <div className="text-5xl p-2">
            <GiJapan/>
          </div>
          <span>Travel Guru</span>
          {
            isAuthenticated &&
            <span className='m-auto'>Welcome! {user.name}</span>
          }
          <div className='hidden md:inline absolute right-4'>
            <ul className='flex space-x-4'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Login /></li>
              <li>Translate</li>
            </ul>
          </div>
          <div className='md:hidden absolute right-2'>
            <button onClick={() => setIsOpen(!isOpen)}><FaBars />
            </button>
          </div>
        </div>
        {
          isOpen &&
          <div className='md:hidden text-xs p-2 text-white bg-black'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Login /></li>
              <li>Translate</li>
            </ul>
          </div>
        }
      </nav>

    </>
  )
}
