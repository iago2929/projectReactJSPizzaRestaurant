import { useContext, FormEvent, useState } from 'react'

import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from '../pages/components/ui/Input'
import { Button } from "./components/ui/Button"

import { AuthContext } from '../contexts/AuthContext'

import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext)

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [loading, setLoading] =useState('false');

  async function handleLogin(event: FormEvent ){
    event.preventDefault();

    let data = {
      email,
      password
    }
  
    await signIn(data)
  }

  return (
    <>
        <Head>
          <title>Pizzaria Martins - Login</title>
        </Head>
        <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria"/>
        

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input 
            placeholder="Type your e-mail"
            type="text" 
            value={email}
            onChange={ (e) => setEmail(e.target.value) } 
          /> 

            <Input 
            placeholder="Type your password"
            type="password" 
            value={password}
            onChange={ (e) => setPassword(e.target.value) }  
          /> 


        <Button
        type="submit"
        loading={false}
        >Access</Button>
          </form>

        <Link href="/signup" className={styles.text}>
        Don't have an account? Register
        </Link>
        
        </div>
      </div>
    </>
  )
}
       