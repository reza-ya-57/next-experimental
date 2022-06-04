import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
// Material UI
import { Button, TextField } from '@mui/material'
//Redux
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../store/actions/actions';
import { selectCount } from '../store/selectors'
import { fetchUsers } from '../store/slices/users'

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  console.log(count)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>my first next app</h1>
        <Link href='/posts/first-post' >
          <a className={styles.link} >GO TO FIRST POST</a>
        </Link>

        <Button
          variant='outlined'
          onClick={() => dispatch(fetchUsers())}
        >
          increace number
        </Button>
        <Button
          variant='outlined'
          onClick={() => dispatch(fetchUsers())}
        >
          increace number
        </Button>
        <Button
          variant='outlined'
          onClick={() => dispatch(fetchUsers())}
        >
          increace number
        </Button>
        <Button
          variant='outlined'
          onClick={() => dispatch(fetchUsers())}
        >
          increace number
        </Button>
        <Button
          variant='outlined'
          onClick={() => dispatch(fetchUsers())}
        >
          increace number
        </Button>
        <TextField
          variant='outlined'
          type='text'
        />
        <TextField
          variant='outlined'
          type='text'
        />
        <TextField
          variant='outlined'
          type='text'
        />
        <TextField
          variant='outlined'
          type='text'
        />
        <TextField
          variant='outlined'
          type='text'
        />
        <TextField
          variant='outlined'
          type='text'
        />
        <TextField
          variant='outlined'
          type='text'
        />
        {count}
      </main>
    </div>
  )
}

export default Home
