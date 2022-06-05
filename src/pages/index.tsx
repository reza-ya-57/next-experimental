import { Button } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react';
//Redux
import {
  useAppSelector,
} from '../app/hooks';
import { selectCount } from '../store/selectors';




const Home: NextPage = () => {
  
  const [state , setState] = useState('');
  const [jokeWithHadi , setJokeWithHadi] = useState("Sent Get Request")

  const getRequestHandler = () => {
    axios.get("/test")
      .then(res => {
        console.log(res.data);
        setState(res?.data)
        setJokeWithHadi("Click Harder Hadi")
      })
  }
  const count = useAppSelector(selectCount);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>سلام </h1>
        <Link href='/posts/first-post' >
          <a className={styles.link} >رفتن به صفحه پست </a>
        </Link>
        <Button variant='contained' onClick={getRequestHandler} >
          { jokeWithHadi }
        </Button>
        <br />
        <br />
        <strong>{ state }</strong>
      </main>
    </div>
  )
}

export default Home
