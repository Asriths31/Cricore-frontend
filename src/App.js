
import './comp/App.css';
import Header from "./comp/header"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./comp/home.js"
import Sign from "./comp/sign.js"
import Teams from "./comp/teams.js"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/match' element={<Header />}></Route>
      <Route path='/sign' element={<Sign />}></Route>
      <Route path='/teams' element={<Teams />}></Route>
  </Routes>
    
    



   
    </BrowserRouter>
  );
}

export default App;
