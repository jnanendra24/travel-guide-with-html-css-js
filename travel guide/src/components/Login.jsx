import React from 'react'
import { Button } from 'bootstrap'
export default function Login() {
  return (
    <div>
      <form>
        <input placeholder='Email' ref={emailRef}/>
        <Button>hello</Button>
      </form>
    </div>
  )
}
