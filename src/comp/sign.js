import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./App.css"

function Sign(){
   
   const [teamname1,setTeamname1]=React.useState("")
   const [teamname2,setTeamname2]=React.useState("")
   const[count,setCount]=React.useState(false)
   const[playing,setPlaying]=React.useState(true)
   const[team1,setTeam1]=React.useState([])
   const[team2,setTeam2]=React.useState([])
   const[player,setPlayer]=React.useState("")
   const[team11,setTeam11]=React.useState([])
   const[team22,setTeam22]=React.useState([])
   const[list,setList]=React.useState(0)
   const [toggle,setToggle]=React.useState(false)
//    const[sno,setSno]=React.useState(1)
var sno=1
//  let team1=[]
//    let team2=[]
  function handlechange1(e){
         setTeamname1(e.target.value)
  }
  function handlechange2(e){
    setTeamname2(e.target.value)
}
   function handleplayers(e){
    setPlayer(e.target.value)
   }
   function handleclick(){
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
     else{
        
     }
     console.log(team1)
     console.log(team2)
    
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
    axios.post(`${process.env.REACT_APP_API_URL}/post`,{
        teamname1:teamname1,
        teamname2:teamname2,
        team1:team1,
        team2:team2
    }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
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
    <button onClick={()=>setCount(true)}>Submit</button>
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
        <h2>Enter the players of {teamname1}</h2>
        <div className="entering">
        <input placeholder="enter the playersname" onChange={handleplayers} value={player} onKeyDown={handlekey}></input>
        <div>
        <button onClick={handleclick}>Add</button>
        <button onClick={remove}>remove</button>
        </div>

        </div>
        <div className="playersname">
            {team11}
        </div>
    </div>
        ):<div className="team2">
             <h2>Enter the players of {teamname2}</h2>
       <div className="entering">
        <input placeholder="enter the playersname" onChange={handleplayers} value={player} onKeyDown={handlekey}></input>
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
    {toggle?<Link to="/teams"><button onClick={post} className="submit">Submit</button></Link>:<p></p>}
    </div>
    </div>
    </>


    )
}

export default Sign