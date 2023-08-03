import React from "react";
import banneryeni from "../assets/banneryeni.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 my-3">
          <img src={banneryeni} className="w-100" />
        </div>
        <div className="col-12 col-lg-4 my-3">
          <img src={banneryeni} className="w-100" />
        </div>
        <div className="col-12 col-lg-4 my-3">
          <img src={banneryeni} className="w-100" />
        </div>
        <div className="col-12 text-center">
          <Link to="/menu">
          <button className="btn btn-siparis">Sipariş Ver</button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
