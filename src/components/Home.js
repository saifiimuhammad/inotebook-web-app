import React from 'react'
import Form from './Form'

const Home = () => {
  return (
    <div className='container my-3'>
      <h1 className='text-center'>Your notebook on the cloud.</h1>

      <container className="my-3">
        <h2>Add note</h2>
        <Form/>
      </container>
    </div>
  )
}

export default Home
