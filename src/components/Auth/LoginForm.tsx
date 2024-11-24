import React from 'react'
import styles from './Auth.module.css'

export default function LoginForm({setShow}:{setShow :(name:string)=>void}) {
  return (
    <>
    <div className={styles.title}>login</div>
    <input className='input' type='text' placeholder='Email'/>
    <input className='input' type='password' placeholder='Password'/>
    <button className={`${styles.button} button`}>Login</button>
    <p onClick={()=>setShow('register')}>Don't Have An Account? Register!</p>
  </>
  )
}
