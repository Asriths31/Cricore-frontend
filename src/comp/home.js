import {Link} from "react-router-dom"
import "./App.css"
import React from "react"
import axios from "axios"
import aud from "./aud/mixkit-ball-bouncing-to-a-stop-2089.wav"

function Home(){
    const [toggle,setToggle]=React.useState(false)
    let snd=new Audio(aud)
    localStorage.clear()
    const [data,setData]=React.useState("")
    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}`)
        .then((res)=>{ 
            setData(res.data)
        console.log(data)})
        .catch()
    },[])
    return(
        <div className="section">
            <div className="home">
        <h2 onClick={()=>{snd.play()
            setToggle(true)
        }}>Welcome!to the Scoring app</h2>
       <Link to="/sign"> <button>Get Started</button></Link>
       </div>
       {toggle?<div className="ball"></div>:<span></span>}

    </div>
    )
}


export default Home 