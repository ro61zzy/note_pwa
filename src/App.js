import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ChangeUser from "./components/ChangeUser";
import Home from "./pages/Home";
import { store } from "./pages/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/changeuser" element={<ChangeUser />} />
          </Routes>
        </Router>
      </Provider>
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
