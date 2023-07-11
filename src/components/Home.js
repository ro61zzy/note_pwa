import React from "react";
import User from "./User";

const Home = (props) => {
  return (
    <div>
      <h2>Changing Users, createContext, useContext</h2>
      {/* <User />  */}
      <User user={props.user} />
    </div>
  );
};

export default Home;
