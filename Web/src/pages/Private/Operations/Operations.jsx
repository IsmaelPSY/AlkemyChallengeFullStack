import React from "react";
import { Link } from "react-router-dom";
const Operations = () => {
  return(
    <div>
      Operations
      <Link to={`/users/${123}`}>MyProfile</Link>
    </div>
  )
}
export default Operations;