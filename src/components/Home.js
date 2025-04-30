import React, { useEffect } from "react";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import homeImg from "../assets/images/inotebook.png";

const Home = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home-container flex">
      <div className="home-content">
        <h1 className="subtitle">Your notebook on the cloud.</h1>
        <AddNote showAlert={props.showAlert} />
      </div>
      <div className="home-content flex">
        <img src={homeImg} alt="inotebook" className="home-img" />
      </div>
    </div>
  );
};

export default Home;
