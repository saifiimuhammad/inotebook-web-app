import React, { useEffect } from 'react';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';


const Home = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container my-3'>
      <h1 className='text-center'>Your notebook on the cloud.</h1>
      <AddNote showAlert={props.showAlert} />
    </div>
  )
}

export default Home
