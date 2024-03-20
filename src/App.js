import React, {useEffect, useState, createContext} from "react"

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Splash from "./pages/Splash.jsx"
import Login from "./pages/Login.jsx"
import Logout from "./pages/Logout.jsx"
import Main from "./pages/Main.jsx"
import Forgot from "./pages/Forgot.jsx"
import Leaderboard from "./pages/Leaderboard.jsx"
import Admin from './pages/Admin.jsx'
import QRCreate from './pages/QRCreate.jsx'
import Congrats from "./pages/Congrats.jsx"
import Friends from "./pages/Friends.jsx"
import FriendRequests from "./pages/FriendRequests.jsx"
import FriendSearch from "./pages/FriendSearch.jsx"


//components
import Nav from "./components/Nav.jsx"

export const IPContext = createContext()

function App() {
  const [redirectQR, setRedirectQR] = useState({qr:false, route:"/main"})

  return (
    <div className="site-wrapper">
      <div className="spacer"></div>
      <BrowserRouter>
      <IPContext.Provider value={'localhost'}>
      <Nav/>
        <Routes>
          <Route
            path="/exeGarden/"
            element={<Splash />}
          />
          <Route
            path="/exeGarden/main"
            element={<Main />}
          />
          <Route
            path="/exeGarden/login"
            element={<Login redirectQR={redirectQR} />}
          />
          <Route
            path="/exeGarden/logout"
            element={<Logout/>}
          />
          <Route
            path="/exeGarden/forgot"
            element={<Forgot />}
          />
          <Route
            path="/exeGarden/leaderboard"
            element={<Leaderboard />}
          />
          <Route
              path="/exeGarden/admin"
              element={< Admin />}
          />
          <Route
            path="/exeGarden/admin/create"
            element={< QRCreate />}
          />
          <Route 
            path="/exeGarden/qr"
            element={<Congrats setRedirectQR={setRedirectQR}/>}
          />
          <Route
            path="/exeGarden/friends"
            element={<Friends/>}
          />
          <Route
            path="/exeGarden/pending-friend-requests"
            element={<FriendRequests/>} FriendSearch
          />
          <Route
            path="/exeGarden/friend-search"
            element={<FriendSearch/>}
          />
        </Routes>
        </IPContext.Provider>
      </BrowserRouter>
    </div>
  )
}
export default App;