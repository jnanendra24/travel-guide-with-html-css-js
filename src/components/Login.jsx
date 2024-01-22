import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
export default function Login() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
  return (
    <>
      {isAuthenticated ?
        (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
        )
        :
        (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )
      }
    </>
  )
}
