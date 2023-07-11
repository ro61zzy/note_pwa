import React, { useState } from "react";
import { login, logout } from "../reducers/profile";
import { useDispatch, useSelector } from "react-redux";

//useDispatch is for modifying states
//useSelector is for getting states

const LogIn = () => {
  const [newUsername, setnewUserName] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <div>
      <h1>
        LOGGED IN USER : {username}
        <br />
        <input
          onChange={(e) => {
            setnewUserName(e.target.value);
          }}
        />
        <br />
        <button onClick={() => dispatch(login({ username: newUsername }))}>
          Log In
        </button>
        <br />
        <button onClick={() => dispatch(logout())}>Log Out</button>
      </h1>
    </div>
  );
};

export default LogIn;
