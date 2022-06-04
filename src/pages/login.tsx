import type { NextPage } from 'next'
import { Button, TextField } from '@mui/material'

const Home: NextPage = () => {

  const submitHandler = (e:any) => {
      e.preventDefault()
     const form = new FormData(e.target);
     const data = Object.fromEntries(form);
     console.log(data)
  }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={submitHandler}>
            <TextField
                variant='outlined'
                type='text'
                label='username'
                name='userName'
            />
            <TextField
                variant='outlined'
                type='password'
                label='password'
                name='password'
            />
            <Button
                variant='outlined'
                type='submit'
            >
                Sing In
            </Button>
        </form>
    </div>
  )
}

export default Home
