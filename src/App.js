import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangeUser from "./components/ChangeUser";
import Home from "./components/Home";



function App() {
  const [user, setUser] = useState("Rozzy");

  return (
    <div className="App">
 
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/changeuser" element={<ChangeUser />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;






























// import { createContext, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ChangeUser from "./components/ChangeUser";
// import Home from "./components/Home";

// export const UserContext = createContext();

// function App() {
//   const [user, setUser] = useState("Rozzy");

//   return (
//     <div className="App">
//       <UserContext.Provider value={{ user, setUser }}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/changeuser" element={<ChangeUser />} />
//           </Routes>
//         </Router>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;
