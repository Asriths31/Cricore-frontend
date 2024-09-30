import React from "react"
import{Link} from "react-router-dom"
import axios from "axios"
import "./App.css"
import img1 from "./img/cricket (2).png"
import img2 from "./img/cricket-bat.png"
import Add from "./update"
function Header(){
   var[data,setData]=React.useState({})
   var postdata,batsmanscore
   const[overs,setOvers]=React.useState()
   var[data1,setData1]=React.useState([])
   const[oversplayed,setOversplayed]=React.useState(0)
   const[runs,setRuns]=React.useState(0)
   const[striker,setStriker]=React.useState([])
   const[nonstriker,setNonstriker]=React.useState([])
   const[bowler,setBowler]=React.useState([])
   const[teamruns,setTeamruns]=React.useState(0)
   const[toggle,setToggle]=React.useState(true)
   const[strikerruns,setStrikeruns]=React.useState(0)
   const[strikerbowls,setStrikerbowls]=React.useState(0)
   const[nonstrikerruns,setNontrikeruns]=React.useState(0)   
   const[nonstrikerbowls,setNonstrikerbowls]=React.useState(0)   
   const[wickets,setWickets]=React.useState(0)
   const[teamwickets,setTeamwickets]=React.useState(0)
   const[timeline,setTimeline]=React.useState([])
   var[count,setCount]=React.useState(0)
   const[newcount,setNewcount]=React.useState(0)
   const[loading,setLoading]=React.useState(true)
   const[count1,setCount1]=React.useState(0)
   const[batting,setBatting]=React.useState("")
   const[bowling,setBowling]=React.useState("")
   const[arrival,setArrival]=React.useState(false)
   const[selection1,setSelection1]=React.useState([])  
    const[selection2,setSelection2]=React.useState([])
    const[selection3,setSelection3]=React.useState([])
    const[chase,setChase]=React.useState(false)
   const[change,setChange]=React.useState(false)
   const[scorecardtoggle,setScorecardtoggle]=React.useState(false)
   const[scorecard,setScorecard]=React.useState({})
   const[scoregiven,setScoregiven]=React.useState(0)
   //  const timeline1=timeline.map((prev)=><h2>{prev}</h2>   
   //      // console.log(prev)
   //  )

window.onbeforeunload=()=>{
   console.log("loi ")
   localStorage.setItem("teamruns",JSON.stringify(teamruns))
   localStorage.setItem("teamwickets",JSON.stringify(teamwickets))
   localStorage.setItem("overs",JSON.stringify(overs))
   localStorage.setItem("oversplayed",JSON.stringify(oversplayed))
   localStorage.setItem("timeline",JSON.stringify(timeline))
   localStorage.setItem("striker",JSON.stringify(striker))
   localStorage.setItem("strikerruns",JSON.stringify(strikerruns))
   localStorage.setItem("strikerbowls",JSON.stringify(strikerbowls))
   localStorage.setItem("nonstriker",JSON.stringify(nonstriker))
   localStorage.setItem("nonstrikerruns",JSON.stringify(nonstrikerruns))
   localStorage.setItem("nonstrikerbowls",JSON.stringify(nonstrikerbowls))
   localStorage.setItem("count1",JSON.stringify(count1))
   localStorage.setItem("count",JSON.stringify(count))
   localStorage.setItem("newcount",JSON.stringify(newcount))
   localStorage.setItem("chase",JSON.stringify(chase))


}

React.useEffect(()=>{
   window.onload=reload()
},[])

function reload(){
   console.log("poiiii")
   if(JSON.parse(localStorage.getItem("teamruns"))!==(null)) setTeamruns(JSON.parse(localStorage.getItem("teamruns")))
      if(JSON.parse(localStorage.getItem("teamwickets"))!==(null)) setTeamwickets(JSON.parse(localStorage.getItem("teamwickets")))
         if(JSON.parse(localStorage.getItem("overs"))!==(null)) setOvers(JSON.parse(localStorage.getItem("overs")))
            if(JSON.parse(localStorage.getItem("oversplayed"))!==(null)) setOversplayed(JSON.parse(localStorage.getItem("oversplayed")))
               if(JSON.parse(localStorage.getItem("timeline"))!==(null)) setTimeline(JSON.parse(localStorage.getItem("timeline")))
                  if(JSON.parse(localStorage.getItem("striker"))!==(null)) setStriker(JSON.parse(localStorage.getItem("striker")))

                  if(JSON.parse(localStorage.getItem("strikerruns"))!==(null)) setStrikeruns(JSON.parse(localStorage.getItem("strikerruns")))
                     if(JSON.parse(localStorage.getItem("strikerbowls"))!==(null)) setStrikerbowls(JSON.parse(localStorage.getItem("strikerbowls")))
                        if(JSON.parse(localStorage.getItem("nonstriker"))!==(null)) setNonstriker(JSON.parse(localStorage.getItem("nonstriker")))

                        if(JSON.parse(localStorage.getItem("nonstrikerruns"))!==(null)) setNontrikeruns(JSON.parse(localStorage.getItem("nonstrikerruns")))
                           if(JSON.parse(localStorage.getItem("nonstrikerbowls"))!==(null)) setNonstrikerbowls(JSON.parse(localStorage.getItem("nonstrikerbowls")))
                              if(JSON.parse(localStorage.getItem("count1"))!==(null)) setCount1(JSON.parse(localStorage.getItem("count1")))
                                 if(JSON.parse(localStorage.getItem("count"))!==(null)) setCount(JSON.parse(localStorage.getItem("count")))
                                    if(JSON.parse(localStorage.getItem("newcount"))!==(null)) setNewcount(JSON.parse(localStorage.getItem("newcount")))
                                       if(JSON.parse(localStorage.getItem("chase"))!==(null)) setChase(JSON.parse(localStorage.getItem("chase")))

}

React.useEffect(()=>{
   if(count*1===overs*1 || teamwickets===10){
      console.log("overrrrrrr")
      nextinnings()
      // setChange(false)
   }
},[count,chase])

React.useEffect(()=>{
   axios.get(`${process.env.REACT_APP_API_URL}/toss`)
   // axios.get(`http://localhost:2001/toss`)
   .then((res)=>{
      data=res.data
      setLoading(false)
      setBowler([data.bowler.id,data.bowler.name])
      setStriker([data.striker.id,data.striker.name])
      setNonstriker([data.nonstriker.id,data.nonstriker.name])
      setOvers(data.overs)
      setBatting(data.batting)
      setBowling(data.bowling)
      
      // console.log(data.overs,78)
   })
},[])
// React.useEffect(()=>{
  
// },[loading])
React.useEffect(()=>{
   axios.get(`${process.env.REACT_APP_API_URL}/teams`)
   // axios.get(`http://localhost:2001/teams`)

   .then((res)=>{
      setData1(res.data)
      console.log(data1)
      setScorecard(res.data)
      // scorecard.push(data1.team2players)
      console.log(scorecard)
      // console.log(selection.length)

   })
},[])


async function newbowler(){
console.log("bowler")
const res123= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${bowler[0]}`,
   // const res123= await axios.patch(`http://localhost:2001/update/${bowler[0]}`,

   {
    team:bowling,
    score:0,
    wickets:0,
    ballsplayed:0,
    
    scoregiven:scoregiven*1
    
   },
   { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  console.log(res123)
  
//   const response= await axios.patch(`http://localhost:2001/update/${striker[0]}`,
   const response= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${striker[0]}`,

   {
       team:batting,
       score:strikerruns,
       wickets:0,
       ballsplayed:strikerbowls,
       oversbowled:0,
       
      },
      { headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }})
     const response1= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${nonstriker[0]}`,
   // const response1= await axios.patch(`http://localhost:2001/update/${nonstriker[0]}`,
   
   {
       team:batting,
       score:nonstrikerruns,
       wickets:0,
       ballsplayed:nonstrikerbowls,
       oversbowled:0
      },
      { headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }})
     console.log("responses",response1,response)
     console.log("idssss",striker[0],nonstriker[0])
   //   setTeamruns(res.data.score)
   //   setChase(true)
     await setScorecard(response1.data)
   
   
//   batsmanscore=response.data
setScoregiven(0)

     setChange(true)
   setSelection3(<select onChange={(e)=>{setBowler([e.target.selectedIndex,e.target.value])
      setChange(false)
      setTimeline([])
      setToggle(prev=>!prev)

      }}>
<option value="select">select</option>
{data1.team2players.map((players)=>
<option key={players.id} value={players.name}>{players.name}</option>)}</select>)

}
console.log(chase)
async function nextinnings(){

   console.log("in next innings")

   const res123= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${bowler[0]}`,
   // const res123= await axios.patch(`http://localhost:2001/update/${bowler[0]}`,

      {
       team:bowling,
       score:0,
       wickets:0,
       ballsplayed:0,
       
       scoregiven:scoregiven
       
      },
      { headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }})
     console.log("bowling",res123)
  const res= await axios.patch(`${process.env.REACT_APP_API_URL}/update`,
// const res= await axios.patch(`http://localhost:2001/update`,

{team:batting,
    score:teamruns,
    wickets:teamwickets,
    oversplayed:oversplayed
   },
   { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})

const response= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${striker[0]}`,
// const response= await axios.patch(`http://localhost:2001/update/${striker[0]}`,

{
    team:batting,
    score:strikerruns,
    wickets:0,
    ballsplayed:strikerbowls,
    oversbowled:0,
    
   },
   { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  const response1= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${nonstriker[0]}`,
// const response1= await axios.patch(`http://localhost:2001/update/${nonstriker[0]}`,

{
    team:batting,
    score:nonstrikerruns,
    wickets:0,
    ballsplayed:nonstrikerbowls,
    oversbowled:0
   },
   { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  console.log("responses",response1,response,res)
  console.log("idssss",striker[0],nonstriker[0])
  setTeamruns(res.data.score)
  setChase(true)
  await setScorecard(response1.data)
  setScorecardtoggle(true)

  console.log(scorecard)
}

async function handlewicket(){
   console.log("wicket")
   
   // axios.patch(`${process.env.REACT_APP_API_URL}/toss`,
   //    data={...data,}
   // )


     axios.patch(`${process.env.REACT_APP_API_URL}/update`,
   // axios.patch(`http://localhost:2001/update`,

   {team:batting,
      score:teamruns,
      wickets:teamwickets,
      oversplayed:oversplayed
     },
     { headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }})
    console.log(toggle)

  const response= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${toggle?striker[0]:nonstriker[0]}`,
// const response= await axios.patch(`http://localhost:2001/update/${toggle?striker[0]:nonstriker[0]}`,

{
      team:batting,
      score:toggle?strikerruns:nonstrikerruns,
      wickets:0,  
      ballsplayed:toggle?strikerbowls:nonstrikerbowls,
      oversbowled:0
     },
     { headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }})
    batsmanscore=response.data
    console.log(response.data)
    setScorecard(response.data)
   //  console.log({
   //    team:batting,
   //    score:strikerruns,
   //    wickets:0,
   //    ballsplayed:strikerbowls,
   //    oversbowled:0
   //   })
   //  setNewbatsman(true)
    setArrival(true)
   if(toggle){

      setStrikeruns(0)
      setStrikerbowls(0)
   
   
   }
      else{
         setNontrikeruns(0)
         setNonstrikerbowls(0)
      }
  console.log(toggle)
}
// console.log(selection)

async function handleclick(e){
   console.log("clickeddd")
   setCount1(prev=>prev+1)
   if(count1==5){
      setCount1(0)
      setCount(prev=>prev+1)
      console.log(count,overs*1)
      if(count+1!==overs*1)   newbowler()


   }
   setOversplayed(count)
   // const res123= await axios.patch(`http://localhost:2001/update/${bowler[0]}`,
      const res123= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${bowler[0]}`,

      {
       team:bowling,
       score:0,
       wickets:0,
       ballsplayed:0,
       oversbowled:`${count}.${count1}`,
       scoregiven:scoregiven
       
      },
      { headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }})
     console.log(res123)
     
   //   const response= await axios.patch(`http://localhost:2001/update/${striker[0]}`,
      const response= await axios.patch(`${process.env.REACT_APP_API_URL}${striker[0]}`,
   
      {
          team:batting,
          score:strikerruns,
          wickets:0,
          ballsplayed:strikerbowls,
          oversbowled:0,
          
         },
         { headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }})
        const response1= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${nonstriker[0]}`,
      // const response1= await axios.patch(`http://localhost:2001/update/${nonstriker[0]}`,
      
      {
          team:batting,
          score:nonstrikerruns,
          wickets:0,
          ballsplayed:nonstrikerbowls,
          oversbowled:0
         },
         { headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }})
        console.log("responses",response1,response)
        console.log("idssss",striker[0],nonstriker[0])
      //   setTeamruns(res.data.score)
      //   setChase(true)
        await setScorecard(response1.data)
      
}
   async function handletoggle(e){
      
     if(teamwickets<10 && count!==overs){ 
      console.log(count!==overs,overs,count,"count")
      switch (e.target.className) {
         case "dotball":
            handleclick()
            timeline.push(".")
            if(toggle){
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNonstrikerbowls(prev=>prev+1)
            }
            break;
         case "single":
            setToggle(prev=>!prev)
            setTeamruns(prev=>prev+1)
            handleclick()
            timeline.push(1)
            setScoregiven(prev=>prev+1)
            if(toggle){
               setStrikeruns(prev=>prev+1)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+1)
               setNonstrikerbowls(prev=>prev+1)
            }
            break;
         case "double":
            setTeamruns(prev=>prev+2)
            handleclick()
            timeline.push(2)
            setScoregiven(prev=>prev+2)

            if(toggle){
               setStrikeruns(prev=>prev+2)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+2)
               setNonstrikerbowls(prev=>prev+1)
            }

         break;
         case "triple":
            setToggle(prev=>!prev)
            setTeamruns(prev=>prev+3)
            handleclick()
            timeline.push(3)
            setScoregiven(prev=>prev+3)

            if(toggle){
               setStrikeruns(prev=>prev+3)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+3)
               setNonstrikerbowls(prev=>prev+1)
            }

         break;
         case "four":
            setTeamruns(prev=>prev+4)
            handleclick()
            timeline.push(4)
            setScoregiven(prev=>prev+4)

            if(toggle){
               setStrikeruns(prev=>prev+4)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+4)
               setNonstrikerbowls(prev=>prev+1)
            }

         break;
         case "six":
            setTeamruns(prev=>prev+6)
            setScoregiven(prev=>prev+6)

            handleclick()
            timeline.push(6)

            if(toggle){
               setStrikeruns(prev=>prev+6)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+6)
               setNonstrikerbowls(prev=>prev+1)
            }


         break;
         case "wicket":
            // setTeamruns(prev=>prev+1)
               setTeamwickets(prev=>prev+1)
               handleclick()
               handlewicket()
               timeline.push("W")
               if(toggle){
                  setStrikerbowls(prev=>prev+1)
               }
               else{
                  setNonstrikerbowls(prev=>prev+1)
               }

         break;
         case "runout+1":
            setToggle(prev=>!prev)
            setTeamruns(prev=>prev+1)
            setTeamwickets(prev=>prev+1)
            handleclick()
            handlewicket()

            timeline.push("W+1")

            if(toggle){
               setStrikeruns(prev=>prev+1)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+1)
               setNonstrikerbowls(prev=>prev+1)
            }


         break;
         case "runout+2":
            setTeamruns(prev=>prev+2)
            setTeamwickets(prev=>prev+1)
            handleclick()
            timeline.push("W+2")
            handlewicket()

            if(toggle){
               setStrikeruns(prev=>prev+2)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+2)
               setNonstrikerbowls(prev=>prev+1)
            }



         break;
         case "runout+3":
            setToggle(prev=>!prev)
            setTeamruns(prev=>prev+3)
            setTeamwickets(prev=>prev+1)
            handleclick()
            timeline.push("W+3")
            handlewicket()

            if(toggle){
               setStrikeruns(prev=>prev+3)
               setStrikerbowls(prev=>prev+1)
            }
            else{
               setNontrikeruns(prev=>prev+3)
               setNonstrikerbowls(prev=>prev+1)
            }



         break;
        case "wide":
         setTeamruns(prev=>prev+1)
         timeline.push("Wd")


        break
        case "wide+1":
         setTeamruns(prev=>prev+2)
         timeline.push("Wd+1")


        break
        case "wide+2":
         setTeamruns(prev=>prev+3)
         timeline.push("Wd+2")


        break
        case "wide+3":
         setTeamruns(prev=>prev+4)
         timeline.push("Wd+3")


        break
        case "wide+4":
         setTeamruns(prev=>prev+5)
         timeline.push("Wd+4")


        break
        case "wide+6":
         setTeamruns(prev=>prev+7) 
         timeline.push("Wd+6")

        break
        case "wide+wicket":
         setTeamruns(prev=>prev+1)
         setTeamwickets(prev=>prev+1)
         timeline.push("Wd+W")
         handlewicket()


        break
        case "noball+1":
         setTeamruns(prev=>prev+2)
         timeline.push("Nb+1")


        break
        case "noball+2":
         setTeamruns(prev=>prev+3)
         timeline.push("Nb+2")


        break
        case "noball+3":
         setTeamruns(prev=>prev+4)
         timeline.push("Nb+3")


        break
        case "noball+4":
         setTeamruns(prev=>prev+5)
         timeline.push("Nb+4")


        break
        case "noball+6":
         setTeamruns(prev=>prev+7) 
         timeline.push("Nb+6")

        break
        case "noball+wicket":
         setTeamruns(prev=>prev+1)
         setTeamwickets(prev=>prev+1)
         timeline.push("Nb+W")
         handlewicket()


         default:
            break;
      }
   
   
      
   }
       
      
   }
   if(scorecard.team2players!==undefined){
      var scorecardd1=<div>
         <table>
         <th><td>name</td></th>
         <th><td>oversbowled</td></th>
         <th><td>runsgiven</td></th>
         {scorecard.team2players.map(player=>
           { if(player.oversbowled>0)
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
   if(scorecard.team1players!==undefined){var scorecardd=<div>
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
   var timeliner=timeline.map(ball=>{
      return(<>
      <h2>{ball}</h2>
      </>)
   }) 
   // console.log(data)

   // console.log(data1.teamname1)
// console.log(oversplayed,"oversplayed")

if(loading) return <h1>loading</h1>


    return(
     <>
     <div className="head">
   <div className="cont">
      <div className="teams">
         <img alt="teamlogo" src={img2}></img>
         <p>{batting}</p>
         
      </div>
      <div className="score">
         <h2>Vs</h2>
         <h3>{teamruns}/{teamwickets}</h3>
         <h4>({count}.{count1})/({overs})</h4>

      </div>
      <div className="teams">
      <img alt="teamlogo" src={img1}></img>
         <p>{bowling}</p>
      </div>
   </div>
      <div className="card">
        <div className="bowling">
            <h3>{bowler[1]}</h3>
            <div className="timeline">
              {timeliner}
            </div>
        </div>
        <div className="batting">
            <div className="batsmen">{toggle?<div className="dot"></div>:<span></span>}<span>{striker[1]}-{strikerruns}({strikerbowls})</span></div>
           <div className="batsmen">{ toggle? <span></span>:<span className="dot"></span>}<span>{nonstriker[1]}-{nonstrikerruns}({nonstrikerbowls})</span></div>

         </div>
      </div>
      <Add count={count} setTimeline={setTimeline} toggle={toggle}
       setSelection1={setSelection1} selection1={selection1} selection2={selection2}
        setSelection2={setSelection2} 
       setSelection3={setSelection3} handletoggle={handletoggle} setBowler={setBowler}
       setOversplayed={setOversplayed} oversplayed={oversplayed} setStriker={setStriker}
       setNonstriker={setNonstriker}
       totalovers={overs} data1={data1} setArrival={setArrival}
       newbowler={newbowler} nextinnings={nextinnings}
       newcount={newcount} setNewcount={setNewcount} teamwickets={teamwickets}/>
     </div>
     {arrival?<div className="selection">

      <h2>Select the New Batsman</h2>

      {((toggle)?selection1:selection2)}
      
      </div>:<span></span>}
      {change?
      <div className="selection">
      <h2>Select the New bowler</h2>
      {selection3}     

      </div>:<span></span>}
     {chase?<div className="target">
      <h2>your target is {(teamruns)*1+1}</h2>
     <h4>click here to start 2nd innings</h4>
     <Link to="/chase"><button>start 2nd innings</button></Link>
     
     </div>:<span></span>}
     <div className="scorecard">
        <div>
            {/* <h2>{data.teamname1}</h2> */}
            <div className="list">{scorecardd}</div>
            <div className="list">{scorecardd1}</div>
        </div>
     </div>
     </>

    )
}

export default Header