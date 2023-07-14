import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import Link from "next/link"

export default function Singnup() {
  return (
    <>
        <Head>
          <title>Register now!</title>
        </Head>
        <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria"/>
        

        <div className={styles.login}>
            <h1>Creating your account</h1>

          <form>
          <Input 
            placeholder="Type your name"
            type="text"  
            /> 

            <Input 
            placeholder="Type your e-mail"
            type="text"  
            /> 

            <Input 
            placeholder="Type your password"
            type="password"  
            /> 


        <Button
        type="submit"
        loading={false}
        >Access</Button>
          </form>

        <Link href="/" className={styles.text}>
        Already have an account? Log in!
        </Link>
        
        </div>
      </div>
    </>
  )
}