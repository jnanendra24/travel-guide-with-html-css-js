import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Translate from './Translate'

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
  return (
    <>
      <nav className='flex items-center bg-black text-white sticky top-0'>
        <div><img className="w-16" src={import.meta.env.VITE_NAV_LOGO} alt='logo' /></div>
        <ul className='flex relative w-full m-5 gap-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li className="absolute right-2">
            <div>
              <ul className='flex gap-4'>
                { isAuthenticated ? 
                  (<li>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
                  </li>)
                  :
                  (<li>
                    <button onClick={() => loginWithRedirect()}>Login</button>
                  </li>) 
                }
                <li><Translate /></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}
