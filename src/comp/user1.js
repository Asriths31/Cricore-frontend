import React from "react";
import axios from "axios";




function User1(){
    const[scorecard,setScorecard]=React.useState([])
    React.useEffect(()=>{
        // axios.get(`${process.env.REACT_APP_API_URL}/teams`)
        axios.get(`http://localhost:2001/teams`)
     
        .then((res)=>{
        //    setData1(res.data)
        //    console.log(data1)
           setScorecard(res.data)
           // scorecard.push(data1.team2players)
           console.log(scorecard)
           // console.log(selection.length)
     
        })
     },[])
     if(scorecard.team2players!==undefined){
        var scorecardd1=<div>
           <table>
           <th><td>name</td></th>
           <th><td>oversbowled</td></th>
           <th><td>runsgiven</td></th>
           {scorecard.team2players.map(player=>
             { if(player.scoregiven>0)
              {return(
              
              <tr>
                 <td>{player.name}</td> 
                 <td>{player.oversbowled}</td> 
                 <td>{player.scoregiven}</td>
              
              </tr>
           )}}
           )}
           </table>
        </div>
     }
     if(scorecard.team1players!==undefined){
      var scorecardd=<div>
        <table>
           <th >
              <td>
                 name
              </td>
           </th>
           <th>
              <td>
                 balls
              </td>
              </th>
              <th>
               <td>
                 runs
              </td>
           </th>
           
               {scorecard.team1players.map(player=>{
        // console.log(player) 
       if(player.ballsplayed>0){ return(
           <tr>
           <td>
              {player.name}
           </td> 
           <td>
              {player.ballsplayed}
           </td>
            <td>
              {player.score}
           </td>
           </tr>
        )}
        
     })}
        
     </table>
    </div>}
return(
    <div className="scorecard">
    <div>
        {/* <h2>{data.teamname1}</h2> */}
        <div className="list">{scorecardd}</div>
        <div className="list">{scorecardd1}</div>
    </div>
 </div>)
}

export default User1