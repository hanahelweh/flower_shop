import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import styles from './Auth.module.css'
export default function Auth() {
  const [show,setShow]=useState<string>('login')
  return (
    <div className={styles.auth}>
      {show==='login' 
      ? 
      <LoginForm setShow={setShow} /> 
      : 
      <RegisterForm setShow={setShow} />
      }
    </div>
  )
}
