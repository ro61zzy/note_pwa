import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const ChangeUser = (props) => {
  const [newUser, setNewUser] = useState("");

//   const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Current User: {props.user}</h2>
      <input
        onChange={(event) => {
          setNewUser(event.target.value);
        }}
      />
      <button onClick={() => props.setUser(newUser)}>change user</button>
    </div>
  );
};

export default ChangeUser;
