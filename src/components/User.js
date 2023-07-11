import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const User = () => {

const {user} = useContext(UserContext)

  return (
    <div>
      {/* <h3>User is</h3>
      <h2>{props.user}</h2>
      <Link to={"/changeuser"}>Change User</Link> */}

      <h3>User is</h3>
      <h2>{user}</h2>
      <Link to={"/changeuser"}>Change User</Link>
    </div>
  );
};

export default User;
