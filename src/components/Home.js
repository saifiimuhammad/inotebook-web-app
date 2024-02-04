import React from 'react';
import AddNote from './AddNote';

const Home = () => {
  return (
    <div className='container my-3'>
      <h1 className='text-center'>Your notebook on the cloud.</h1>
      <AddNote/>
    </div>
  )
}

export default Home
