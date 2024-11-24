import React from 'react'
import styles from './Auth.module.css'

export default function RegisterForm({setShow}:{setShow :(name:string)=>void}) {
  return (
    <>
      <div className={styles.title}>Create account</div>
      <input className='input' type='text' placeholder='Name'/>
        <input className='input' type='text' placeholder='Email'/>
        <input className='input' type='password' placeholder='Password'/>
        <button className={`${styles.button} button`}>register</button>
        <p onClick={()=>setShow('login')}>Already Have An Account? Login!</p>
      </>
  )
}
