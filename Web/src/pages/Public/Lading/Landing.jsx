import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return(
  <>
    <h1>Landing Page</h1>
    <Link to='/login'>
      LOGIN
    </Link>
    <Link to='/singin'>
      SINGIN
    </Link>
  </>
  )
}
export default Landing;