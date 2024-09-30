import React from "react";
// import axios from "axios";
function Add(props){
  
  const[toggle1,setToggle1]=React.useState(false)
  // const[replace,setReplace]=React.useState(false)

function handletoggle1(e){
    setToggle1(prev=>!prev)
    // console.log(e)
    props.handletoggle(e)
  //   if(props.count!==0&&(props.count)%6===0&&replace){
  //     setReplace(true)
  //     setToggle1(false)
  //   console.log("overchange") 
  //     // setOversplayed(prev=>prev+1)
      
  //  }
}
  if(props.data1.length===undefined && props.selection1.length===0)
    {props.setSelection1(<select onChange={(e)=>{props.setStriker([e.target.selectedIndex,e.target.value])
                                                    props.setArrival(false)
 }}><option value="select">select</option>
    {props.data1.team1players.map((players)=>{
       // console.log(players.value)
       return(
    <option key={players.id} value={players.name}>
       {players.name}</option>)})}</select>)
 props.setSelection2(<select onChange={(e)=>{props.setNonstriker([e.target.selectedIndex,e.target.value])
                                              props.setArrival(false)

                                                }}>
  <option value="select">select</option>
  {props.data1.team1players.map((players)=>
  <option key={players.id} value={players.name}>{players.name}</option>)}</select>)
}
  // console.log(props.toggle) 
//   function newbatsman(e){
//     // console.log(props.toggle,"hi")
//     if(props.toggle){
//            props.setStriker([e.target.selectedIndex,e.target.value])
//     }
//     else{
//        props.setNonstriker([e.target.selectedIndex,e.target.value])
 
//     }
//     props.setArrival(false)
//  }



// function newbowler(e){
//   setReplace(false)
//   setToggle1(true)

  
// }


return(
  <>
  
 {toggle1? (<div className="options">
  <button className="dotball" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>Dotball</button>
  <button className="single" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>single</button>
  <button className="double" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>double</button>
  <button className="triple" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>triple</button>
  <button className="four" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>four</button>
  <button className="six" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>six</button>
 <button className="wicket" onClick={(event)=>{handletoggle1(event);props.setNewcount(prev=>prev+1)
}}>wicket</button>
  <button className="wide" onClick={handletoggle1}>wide</button>
  <button className="wide+1" onClick={handletoggle1}>wide+1</button>
  <button className="wide+2" onClick={handletoggle1}>wide+2</button>
  <button className="wide+3" onClick={handletoggle1}>wide+3</button>
  <button className="wide+4" onClick={handletoggle1}>wide+4</button>
  <button className="wide+6" onClick={handletoggle1}>wide+6</button>
  <button className="wide+wicket" onClick={handletoggle1}>wide+wicket</button>
  <button className="noball" onClick={handletoggle1}>noball</button>
  <button className="noball+1" onClick={handletoggle1}>noball+1</button>
  <button className="noball+2" onClick={handletoggle1}>noball+2</button>
  <button className="noball+3" onClick={handletoggle1}>noball+3</button>
  <button className="noball+4" onClick={handletoggle1}>noball+4</button>
  <button className="noball+6" onClick={handletoggle1}>noball+6</button>
  <button className="noball+wicket" onClick={handletoggle1}>noball+wicket</button>
 
 
 

  </div>):<span></span>}




  {(props.count*6===props.totalovers*6)?(<span></span>):<button className="newball" onClick={(event)=>{handletoggle1(event)}}>Add new ball</button>}
  <div className="total"><h2>total bowls{props.totalovers*6}</h2><h2>balls remaining {(props.totalovers*6)-(props.newcount)}</h2></div>
  {/* {replace?props.selection2:<span></span>} */}

  </>

)


}

export  default Add