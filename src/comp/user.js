import React from "react";
function User(props){
    if(props.loading) return <h1>loading</h1>

console.log(props.bowler)
    return(
     <>
     <div className="head">
   <div className="cont">
      <div className="teams">
         <img alt="teamlogo" src={props.img2}></img>
         <p>{props.batting}</p>
         
      </div>
      <div className="score">
         <h2>Vs</h2>
         <div className="scoree">{props.scoree}<h2>/</h2>{props.wicketss}</div>
         {/* <h3>{teamruns}/{teamwickets}</h3> */}
         <h4>({props.count}.{props.count1})/({props.overs})</h4>

      </div>
      <div className="teams">
      <img alt="teamlogo" src={props.img1}></img>
         <p>{props.bowling}</p>
      </div>
   </div>
      <div className="card">
        <div className="bowling">
            {/* <h3>{props.bowler[1]}</h3> */}
            <div className="timeline">
              {props.timeliner}
            </div>
        </div>
        <div className="batting">
            {/* <div className="batsmen">{props.toggle?<div className="dot"></div>:<span></span>}<span>{props.striker[1]}-{props.strikerruns}({props.strikerbowls})</span></div>
           <div className="batsmen">{ props.toggle? <span></span>:<span className="dot"></span>}<span>{props.nonstriker[1]}-{props.nonstrikerruns}({props.nonstrikerbowls})</span></div> */}

         </div>
      </div>
     </div>
     {props.chase?<div className="target">
      <h2>your target is {(props.teamruns)*1+1}</h2>
     <h4>click here to start 2nd innings</h4>
     
     </div>:<span></span>}
     <div className="scorecard">
        <div>
            {/* <h2>{data.teamname1}</h2> */}
            <div className="list">{props.scorecardd}</div>
            <div className="list">{props.scorecardd1}</div>
        </div>
     </div>
     </>

    )
}

export default User
