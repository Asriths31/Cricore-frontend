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
   const[count1,setCount1]=React.useState(0)
   const[batting,setBatting]=React.useState("")
   const[bowling,setBowling]=React.useState("")
   const[arrival,setArrival]=React.useState(false)
   const[selection1,setSelection1]=React.useState([])  
    const[selection2,setSelection2]=React.useState([])
    const[selection3,setSelection3]=React.useState([])
    const[chase,setChase]=React.useState(false)

   //  const timeline1=timeline.map((prev)=><h2>{prev}</h2>   
   //      // console.log(prev)
   //  )
if(count*1===overs*1){
   console.log("overrrrrrr")
   nextinnings()
}
React.useEffect(()=>{
   axios.get(`${process.env.REACT_APP_API_URL}/toss`)
   .then((res)=>{
      data=res.data
      setBowler([data.bowler.id,data.bowler.name])
      setStriker([data.striker.id,data.striker.name])
      setNonstriker([data.nonstriker.id,data.nonstriker.name])
      setOvers(data.overs)
      setBatting(data.batting)
      setBowling(data.bowling)
      // console.log(data.overs,78)
   })
},[])
React.useEffect(()=>{
   axios.get(`${process.env.REACT_APP_API_URL}/teams`)
   .then((res)=>{
      setData1(res.data)
      // console.log(data1)
      // console.log(data1.length)
      // console.log(selection.length)

   })
},[])


async function newbowler(e){
   setBowler([e.target.selectedIndex,e.target.value])
   setTimeline([])
//    const response= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${striker[0]}`,
//    {
//     team:bowling,
//     score:0,
//     wickets:0,
//     ballsplayed:strikerbowls,
//     oversbowled:overs
//    },
//    { headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }})
//   batsmanscore=response.data

}

async function nextinnings(){

   console.log("in next innings")
  const res= await axios.patch(`${process.env.REACT_APP_API_URL}/update`,
   {team:batting,
    score:teamruns,
    wickets:teamwickets,
    oversplayed:oversplayed
   },
   { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})

const response= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${striker[0]}`,
   {
    team:batting,
    score:strikerruns,
    wickets:0,
    ballsplayed:strikerbowls,
    oversbowled:0
   },
   { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  const response1= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${nonstriker[0]}`,
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
}

async function handlewicket(){
   console.log("wicket")
   
     axios.patch(`${process.env.REACT_APP_API_URL}/update`,
     {team:batting,
      score:teamruns,
      wickets:teamwickets,
      oversplayed:oversplayed
     },
     { headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }})

  const response= await axios.patch(`${process.env.REACT_APP_API_URL}/update/${striker[0]}`,
     {
      team:batting,
      score:strikerruns,
      wickets:0,
      ballsplayed:strikerbowls,
      oversbowled:0
     },
     { headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }})
    batsmanscore=response.data
   //  console.log(response.data)
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

function handleclick(e){
   // console.log("clickeddd")
   setCount1(prev=>prev+1)
   if(count1==5){
      setCount1(0)
      setCount(prev=>prev+1)
      newbowler(e)
   }
   setOversplayed(count)

}
   function handletoggle(e){
      
     if(teamwickets<10 && count!==data.overs*6){ 
      // console.log(count!==overs*6,overs*6,count,"count")
      switch (e.target.className) {
         case "single":
            setToggle(prev=>!prev)
            setTeamruns(prev=>prev+1)
            handleclick()
            timeline.push(1)
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


         break;
         case "runout+1":
            setToggle(prev=>!prev)
            setTeamruns(prev=>prev+1)
            setTeamwickets(prev=>prev+1)
            handleclick()
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

        break
         
         default:
            break;
      }}
       

   }
   // console.log(data)

   // console.log(data1.teamname1)
// console.log(oversplayed,"oversplayed")

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
              <h2>{timeline}</h2>
            </div>
        </div>
        <div className="batting">
            <div>{toggle?<span className="dot">hj</span>:<span></span>}<span>{striker[1]}-{strikerruns}({strikerbowls})</span></div>
           <div>{ toggle? <span></span>:<span className="dot">hj</span>}<span>{nonstriker[1]}-{nonstrikerruns}({nonstrikerbowls})</span></div>

         </div>
      </div>
      <Add count={count} setTimeline={setTimeline} toggle={toggle}
       setSelection1={setSelection1} selection1={selection1} selection2={selection2}
        setSelection2={setSelection2} 
       setSelection3={setSelection3} handletoggle={handletoggle} setBowler={setBowler}
       setOversplayed={setOversplayed} oversplayed={oversplayed} setStriker={setStriker}
       totalovers={overs} data1={data1} setArrival={setArrival}
       newbowler={newbowler} nextinnings={nextinnings}/>
     </div>
     {arrival?((batting===data1.teamname1)?selection1:selection2):<span></span>}
     {/* {selection} */}
     {chase?<div><h3>your target is {(teamruns)*1+1}</h3>
     <h2>click here to start 2nd innings</h2>
     <Link to="/chase"><button>start 2nd innings</button></Link>
     </div>:<span></span>}
     </>

    )
}

export default Header