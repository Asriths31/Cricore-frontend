import {Link, Navigate, redirect, useNavigate} from "react-router-dom"
import "./App.css"
import React from "react"
import axios from "axios"
import aud from "./aud/mixkit-ball-bouncing-to-a-stop-2089.wav"

function Home(){
    const [toggle,setToggle]=React.useState(false)
    const[sign,setsign]=React.useState(true)
    let [mail,setMail]=React.useState("")
    let [password,setPassword]=React.useState("")
    let [username,setUsername]=React.useState("")
    let snd=new Audio(aud)
    localStorage.clear()
    const [data,setData]=React.useState("")
    let [res,setRes]=React.useState("")
    const navigate=useNavigate()
    if(res==true||res=="registered succefully"){
      console.log("ppolll",res)
      navigate("/sign")
    }
    async function getdata(){
              setMail(mail)
              setPassword(password)
              setUsername(username)
              console.log(username,mail)

            //const res=await axios.get(`${process.env.REACT_APP_API_URL}/`)
             
                res=await axios.get(`http://localhost:2001/`,
                   { params:{
                    mailId:mail,
                    passcode:password
            
             }}, {
                 headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
                 }
             })
                setRes(res.data)
                console.log(res.data)
    }
   
    function handlemail(e){
       mail=e.target.value
    }
    function handlepassword(e){
        password=e.target.value
        // console.log(password)
      }
      function handleusername(e){
        username=e.target.value
        // console.log(username)
      }

    function post(){
        // axios.post(`${process.env.REACT_APP_API_URL}/signup`,{
        console.log(username,mail)
            axios.post(`http://localhost:2001/sign_up`,{
               username:username,
               mailId:mail,
               passcode:password
       
        }, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((data)=>setRes(data.data))
      }
      let styleComp={
        backgroundColor:"crimson",
        color:"white"
      } 
        let styleComp1={
        backgroundColor:"white",
        color:"crimson"
      }
    return(
        <div className="section">
            <div className="home">
        <h2 onClick={()=>{snd.play()
            setToggle(true)
        }}>Welcome! to the Scoring app</h2>
       </div>
       <div className="signup">
        <button onClick={()=>setsign(true)} className="sign-in-btn" style={sign?styleComp:styleComp1}>Sign-in</button>
        <button onClick={()=>setsign(false)} className="sign-up-btn" style={sign?styleComp1:styleComp} >Sign-up</button>
        {  sign? <div className="sign">
          <div className="auth"><label>Email</label><input type="text" placeholder="Enter your mail-id" onChange={handlemail}></input></div>
          <div className="auth"><label>Password</label><input type="text" placeholder="Enter your password" onChange={handlepassword}></input></div>
          <div className="auth1"><label>Password</label><input type="text" placeholder="Enter your password" onChange={handlepassword}></input></div>

          {/* <Link to="/sign"> <button onClick={getdata}>Get Started</button></Link> */}
          <button onClick={getdata}>Get Started</button>
          </div>
           :
           <div className="sign">
       <div className="auth"> <label>Username</label><input type="text" placeholder="Enter your username" onChange={handleusername}></input></div>
       <div className="auth"><label>Email</label><input type="text" placeholder="Enter your mail-id" onChange={handlemail}></input></div>
       <div className="auth"><label>Password</label><input type="text" placeholder="Enter your password" onChange={handlepassword}></input></div>
        {/* <Link to="/sign"> <button onClick={post}>Get Started</button></Link> */}
        <button onClick={post}>Get Started</button>
        </div>}
        
        <span className="logged-info">{res}</span>
        </div>
      
       {toggle?<div className="ball"></div>:<span></span>}
    {/* {res>0?<Link to="/user"><button>csk vs mi</button></Link>:<span></span>} */}
    </div>
    )
}


export default Home 