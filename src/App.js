import { createContext, useState } from 'react';
import User from './components/User';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ChangeUser from './components/ChangeUser';
import Home from './components/Home';


export const UserContext = createContext()


function App() {
  const [user, setUser] = useState("Rozzy");

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Routes>
         <Route path='/' element={<Home user={user} />} />
          <Route path='/changeuser' element={<ChangeUser user={user} setUser={setUser}/>} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
