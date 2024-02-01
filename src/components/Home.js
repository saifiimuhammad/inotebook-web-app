import React from 'react'
import Form from './Form'

const Home = () => {
  return (
    <div className='container my-3'>
      <h1 className='text-center'>Your notebook on the cloud.</h1>

      <div className="my-3">
        <h2>Add note</h2>
        <Form />
      </div>
    </div>
  )
}

export default Home
