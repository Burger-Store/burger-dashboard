import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"


const Home = () =>{
    return(
        <>
        <div className="card">
        <h1>Dashboard Burger</h1>
        <img className="logo" src={logo} />
        </div>
        </>
    )
}
export default Home;