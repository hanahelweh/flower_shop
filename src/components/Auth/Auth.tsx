import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
export default function Auth() {
  const [show,setShow]=useState<string>('login')
  return (
    <div>
      {show==='login' 
      ? 
      <LoginForm setShow={setShow} /> 
      : 
      <RegisterForm setShow={setShow} />
      }
    </div>
  )
}
