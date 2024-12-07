import React from "react"
import axios from "axios"
import { json, Link } from "react-router-dom"
import "./App.css"

function Sign(){
   
   var [teamname1,setTeamname1]=React.useState("")
   var [teamname2,setTeamname2]=React.useState("")
   const[count,setCount]=React.useState(false)
   const[playing,setPlaying]=React.useState(true)
   var[team1,setTeam1]=React.useState([])
   var[team2,setTeam2]=React.useState([])
   const[player,setPlayer]=React.useState("")
   const[team11,setTeam11]=React.useState([])
   const[team22,setTeam22]=React.useState([])
   const[list,setList]=React.useState(0)
   const [toggle,setToggle]=React.useState(false)
   const[alert,setAlert]=React.useState(false)
//    const[sno,setSno]=React.useState(1)
var sno=1
//  let team1=[]
//    let team2=[]


React.useEffect(()=>{
    window.onload=reload()

},[])



function reload(){
    console.log("lo")
    // teamname1=localStorage.getItem("teamname1")
  if(localStorage.getItem("teamname1")!==null)  setTeamname1(JSON.parse(localStorage.getItem("teamname1")))
if(localStorage.getItem("teamname2")!==null) setTeamname2(JSON.parse(localStorage.getItem("teamname2")))
 if(localStorage.getItem("team1")!==null )setTeam1(JSON.parse(localStorage.getItem("team1")))
    if(localStorage.getItem("team2")!==null) setTeam2(JSON.parse(localStorage.getItem("team2")))
            // console.log(JSON.parse(localStorage.getItem("player")))
handlesubmit(JSON.parse(localStorage.getItem("teamname1")))
setList(prev=>prev+1)


    
}
// if(teamname1==null && !count){
//     setCount(true)
//     }
window.onbeforeunload = function() {
    console.log("ji")
    localStorage.setItem("teamname1",JSON.stringify(teamname1))
    localStorage.setItem("teamname2",JSON.stringify(teamname2))
    localStorage.setItem("team1",JSON.stringify(team1))
    localStorage.setItem("team2",JSON.stringify(team2))
    localStorage.setItem("player",JSON.stringify(player))

    
}
function handlesubmit(f){
    console.log(teamname1.length)
    if((teamname1.length>0)||f!==null){
    setCount(true)
    }
}
  function handlechange1(e){
         setTeamname1(e.target.value)
  }
  function handlechange2(e){
    setTeamname2(e.target.value)
}
   function handleplayers(e){
    
        setPlayer(e.target.value)
   }
   function handleclick(t){
    if(player.length>=1 ){
    setAlert(false)
    setList((prev)=>prev+1)
    
    if(team1.length<11) {
        team1.push(player)

    }
    else if(team2.length<11){
        if(team2.length===10) {
            setToggle(true)    
            console.log("teams completed")
        }
      team2.push(player)
     }
    
     console.log(team1)
     console.log(team2)
    
   }
  else{
         setAlert(true)
  }
  
}

function defaultTeam(){
      setTeam1(["jaiswal","dhawan","Rayudu","dube","dhoni","jadeja","Bhuvaneswar","Natarajan","chahal","chahar","sakariya"])
      setTeam2(["Rohith","Kohli","Tilak Verma","Sky","Sanju","Riyan","Hardik","Kuldeep","Axar Patel","ashwin","Bhumrah"])
      console.log(team1,team2)
      setList(prev=>prev+1)
      setToggle(prev=>!prev)
}   
   function remove(){
    setList((prev)=>{
        return prev+1
    })
    if(team1.length<11){
        let pop=team1.pop()
        // console.log(pop)

    }
    else{
       let pop= team2.pop()
    //    console.log(pop)
    }
   }
  React.useEffect(()=>{
    setPlayer("")
    if(team1.length===11){
        setPlaying(false)
        // console.log("kolip")
    }
    if(team1.length<11){
    setTeam11(<table>
        <tr>
            <th>S.NO</th>
            <th>PlayerName</th>
        </tr>
        {team1.map((prev)=>{
            
        return(
            <tr>
                <td>{sno++}</td>
                <td>{prev}</td>
            </tr>
            
        )
    })}</table>)}
    else if(team2.length<12){
        // console.log("teamwe23222")
        setTeam22(<table>
            <tr>
                <th>S.NO</th>
                <th>PlayerName</th>
            </tr>
            {team2.map((prev)=>{
                
            return(
                <tr>
                    <td>{sno++}</td>
                    <td>{prev}</td>
                </tr>
                
            )
        })}</table>)
    }
    // console.log("team11",team11)
    // console.log("team22",team22.length)

},[list])

   

  function post(){
    // axios.post(`${process.env.REACT_APP_API_URL}/post`,{
        axios.post(`http://localhost:2001/post`,{

    teamname1:teamname1,
        teamname2:teamname2,
        team1:team1,
        team2:team2
    }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((data)=>console.log(data))
  }

  function handlekey(e){
    if(e.keyCode===13){
        handleclick()
    }
  }
  

    return(
    <>
    <div className="section">
    <div className="inputs">
    <input placeholder="Enter the team name" onChange={handlechange1}></input>
    <p>Vs</p>
    <input placeholder="Opponent team" onChange={handlechange2}></input>
    <button onClick={handlesubmit} className="in-but">Submit</button>
    </div>
    <div >
     {count?(
     <div className="teamname">
     <h1>{teamname1}</h1>
      <h2>Vs</h2> 
      <h1 > {teamname2}</h1 >
      </div>
    ):<p></p>}
     </div>
     <div className="players">
        {count?
     (playing?(
     <div className="team1">
        <button onClick={defaultTeam} className="in-but">Set default players</button>
        <h3>or</h3>
        <h2>Enter the 11 players of {teamname1}</h2>
        <div className="entering">
        <input placeholder="enter the playersname" onChange={handleplayers} value={player} onKeyDown={handlekey} required></input>
        {alert?<span>Please enter a name</span>:<span></span>}
        <div>
        <button onClick={handleclick} className="in-but">Add</button>
        <button onClick={remove} className="in-but">remove</button>
        </div>

        </div>
        <div className="playersname">
            {team11}
        </div>
    </div>
        ):<div className="team2">
             <h2>Enter the 11 players of {teamname2}</h2>
       <div className="entering">
        <input placeholder="enter the playersname" onChange={handleplayers} value={player}  onKeyDown={handlekey} required></input>
        {alert?<span>Please enter a name</span>:<span></span>}

        <div>
        <button onClick={handleclick}>Add</button>
        <button onClick={remove}>remove</button>
        </div>

        </div>

        <div className="playersname">
            {team22}
        </div>
    </div> ):<p></p>   
    
    }
    {toggle?<Link to="/teams"><button onClick={post} className="in-but">Submit</button></Link>:<p></p>}
    </div>
    </div>
    </>


    )
}

export default Sign