import {Link} from "react-router-dom"
import "./App.css"
import React from "react"
import axios from "axios"


function Home(){
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
        <h2>Welcome!to the Scoring app {data}</h2>
       <Link to="/sign"> <button>Get Started</button></Link>
       </div>
    </div>
    )
}


export default Home 