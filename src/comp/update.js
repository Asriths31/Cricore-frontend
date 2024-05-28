import React from "react";
import axios from "axios";
function Add(props){
  
 
  const[toggle1,setToggle1]=React.useState(false)
  const[replace,setReplace]=React.useState(false)

function handletoggle1(e){
    setToggle1(prev=>!prev)
    console.log(e)
    props.handletoggle(e)
  //   if(props.count!==0&&(props.count)%6===0&&replace){
  //     setReplace(true)
  //     setToggle1(false)
  //   console.log("overchange") 
  //     // setOversplayed(prev=>prev+1)
      
  //  }
}
  if(props.data1.length===undefined && props.selection1.length===0)
    {props.setSelection1(<select onChange={newbatsman}>
    {props.data1.team1players.map((players)=>{
       // console.log(players.value)
       return(
    <option key={players.id} value={players.name}>
       {players.name}</option>)})}</select>)
 props.setSelection2(<select onChange={props.newbowler}>
  {props.data1.team2players.map((players)=>
  <option key={players.id} value={players.name}>{players.name}</option>)}</select>)
}
  console.log(props.toggle) 
  function newbatsman(e){
    console.log(props.toggle,"hi")
    if(props.toggle){
           props.setStriker([e.target.selectedIndex,e.target.value])
    }
    else{
       props.setNonstriker([e.target.selectedIndex,e.target.value])
 
    }
    props.setArrival(false)
 }

if(props.count===props.totalovers*6){
  props.nextinnings()
}

function newbowler(e){
  setReplace(false)
  setToggle1(true)

  
}


return(
  <>
  
 {toggle1? (<div className="options">
  <button className="single" onClick={handletoggle1}>single</button>
  <button className="double" onClick={handletoggle1}>double</button>
  <button className="triple" onClick={handletoggle1}>triple</button>
  <button className="four" onClick={handletoggle1}>four</button>
  <button className="six" onClick={handletoggle1}>six</button>
  <button className="wicket" onClick={handletoggle1}>wicket</button>
  <button className="runout+1" onClick={handletoggle1}>runout+1</button>
  <button className="runout+2" onClick={handletoggle1}>runout+2</button>
  <button className="runout+3" onClick={handletoggle1}>runout+3</button>

  </div>):<span></span>}




  {(props.count===props.totalovers*6)?(<span></span>):<button onClick={handletoggle1}>Add new ball</button>}
  <h2>total bowls{props.totalovers*6}</h2><h2>balls remaining {(props.totalovers*6)-(props.count)}</h2>
  {replace?props.selection2:<span></span>}

  </>

)


}

export  default Add