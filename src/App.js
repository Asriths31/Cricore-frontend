
import './comp/App.css';
import React from 'react';
import Header from "./comp/header"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./comp/home.js"
import Sign from "./comp/sign.js"
import Teams from "./comp/teams.js"
import Chase from "./comp/chase.js"
import User1 from "./comp/user1.js"
function App() {
          
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/match' element={<Header />} ></Route>
      <Route path='/sign' element={<Sign />}></Route>
      <Route path='/teams' element={<Teams />}></Route>
      <Route path='/chase' element={<Chase/>}></Route>
      <Route path='/user' element={<User1/>} ></Route>

  </Routes>
    
    



   
    </BrowserRouter>
  );
}

export default App;
