import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Teams(){
const [data,setData]=React.useState([])
const[team11,setTeam11]=React.useState([])
const[team22,setTeam22]=React.useState([])
const[renderteam,setRenderteam]=React.useState(false)
const[postdata,setPostdata]=React.useState([{}])
const[striker,setStriker]=React.useState([[<select><option>select</option></select>]])
const[nonstriker,setNonstriker]=React.useState([<select><option>select</option></select>])
const[bowler,setBowler]=React.useState([<select><option>select</option></select>])
const[overs,setOvers]=React.useState(0)
const[loading,setLoading]=React.useState(true)
// let team11,team22
localStorage.clear()


function click1(e){
    setPostdata((prev)=>{
        setStriker(
            (<select className="striker" onChange={click3}>
                <option>select</option>
                {data.team1players.map((data)=>
             <option  key={data.id} value={data.name}>{data.name}
             </option>)}
             </select>))
        setNonstriker(
            <select className="non-striker" onChange={click4}>
                <option>select</option>
                {data.team1players.map((data)=>
             <option key={data.id} value={data.name} >{data.name}
             </option>)}
             </select>)
         setBowler(
            <select className="bowler" onChange={click5}>
                <option>select</option>
                {data.team2players.map((data)=>
             <option key={data.id} value={data.name} >{data.name}
             </option>)}
             </select>)
      
        return {...prev,batting:data.teamname1,bowling:data.teamname2}

    })
        console.log("postdata1",postdata)
    e.target.style.backgroundColor="crimson"
    e.target.style.color="white"
    console.log(e.target.style)
}
function click2(e){  
    setPostdata((prev)=>{
        
        setStriker(
            (<select className="striker" onChange={click3}>
                <option>select</option>
                {data.team2players.map((data)=>
             <option value={data.name} key={data.id} >{data.name}
             </option>)}
             </select>))
        setNonstriker(
            <select className="non-striker" onChange={click4}>
                <option>select</option>
                {data.team2players.map((data)=>
             <option value={data.name} key={data.id}>{data.name}
             </option>)}
             </select>)
         setBowler(
            <select className="bowler" onChange={click5}>
                <option>select</option>
                {data.team1players.map((data)=>
             <option value={data.name} key={data.id}>{data.name}
             </option>)}
             </select>)
      
        return {...prev,batting:data.teamname2,bowling:data.teamname1}
    })
        console.log("postdata2",postdata)
         e.target.style.backgroundColor="crimson"
         e.target.style.color="white"


}
function click3(e){
    // console.log("cleck3",(e.target.selectedIndex))
   setPostdata((prev)=>{
    // console.log(prev,"prevvvv",striker,)
    console.log("id",e.target.selectedIndex)
    return({...prev,
        striker:{id:e.target.selectedIndex,name:e.target.value}})
   })
        // console.log("postdata3",postdata)
}
function click4(e){
    setPostdata((prev)=>{
    //  console.log(prev,"prevvvv",nonstriker)
     return({...prev,nonstriker:{id:e.target.selectedIndex,name:e.target.value}})
    })
 }
 function click5(e){
    setPostdata((prev)=>{
     console.log(prev,"prevvvv",bowler)
     return({...prev,bowler:{id:e.target.selectedIndex,name:e.target.value}})
    })
        //  console.log("postdata3",postdata)
 }
 function click6(e){
    setOvers(e.target.value)
    console.log(overs,"ovee")
    setPostdata((prev)=>{
    //  console.log(prev,"prevvvv",striker)
     return({...prev,overs:e.target.value,admin:true})
    })
        //  console.log("postdata3",postdata)
 }

// console.log(data)

function click10(e){
    // axios.post(`${process.env.REACT_APP_API_URL}/toss`,postdata,
    axios.post(`http://localhost:2001/toss`,postdata,
    {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    // console.log(postdata)
}

function handlerequest(){
    setRenderteam(prev=>!prev)
    // console.log(renderteam)
    // console.log(data)
}


async function api(){
    try{
        // const response=await axios.get(`${process.env.REACT_APP_API_URL}/teams`)
        const response=await axios.get(`http://localhost:2001/teams`)

        //  setData(response.data) 
         console.log(response.data)
          setData(response.data)
          setLoading(false)
        //   console.log(data)
}
    catch(err){
        console.log(err)
    }
}

React.useEffect(()=>{
   api()

   },[process.env.REACT_APP_API_URL])

React.useEffect(() => {
    if(data.length>0){setTeam11(<ol>{data.teamname1.map((data)=>{
        return <li>{data}</li>
      })}</ol>)
    handlerequest()}
  }, [data])

if(data.length===undefined&&team11.length===0){
    teamsetting()
}
    
 function teamsetting(){
        console.log(data.team1players)
        setTeam11(<table><th><td>{data.teamname1}</td></th>{data.team1players.map((data)=><tr key={data.id}><td>{data.name}</td></tr>)}</table>)
        setTeam22(<table><th><td>{data.teamname2}</td></th>{data.team2players.map((data)=><tr key={data.id}><td>{data.name}</td></tr>)}</table>)
       
}
// console.log("teamsetting",data.team1players,data.length,team11.length)

// console.log("postdata3",postdata)
if(loading) return <h2>Loading...</h2>


return(
 <>
 <div className="section">
    <div className="teamdet">
        <div>
            {/* <h2>{data.teamname1}</h2> */}
            <div className="list">{team11}</div>
        </div>
     
     <h2>Vs</h2>
     <div>
     {/* <h2>{data.teamname2}</h2> */}
     <div  className="list">{team22}</div>
     </div>
    </div>
    <div className="toss">
    <div>
        <h2>Who Is Batting First?</h2>
      <button className="team1" onClick={click1}>{data.teamname1}</button> 
      <button className="team2" onClick={click2} >{data.teamname2}</button>
    </div>
    <div>
        <h2>Who is striker</h2>
        {striker}
        <h2>who is the non-striker</h2>
        {nonstriker}
        <h2>who is the bowler</h2>
        {bowler}
        <h2>how many overs</h2>
        <input onChange={click6} placeholder="Enter The No Of Overs" type="number" required></input>
        
    </div>

    <Link to="/match"><button onClick={click10} className="rahul">submit</button></Link>
    </div>
    
        <div>
        {/* <h1>{postdata.batting}</h1>
        <h1>{postdata.bowling}</h1>
        <h1>{postdata.striker}</h1>
        <h1>{postdata.bowler}</h1>
        <h1>{postdata.nonstriker}</h1>
        <h1>{postdata.overs}</h1> */}
        
        </div>
        
    
 </div>
 
 </>

)

}

export default Teams