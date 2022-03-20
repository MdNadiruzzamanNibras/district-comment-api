import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadComments></LoadComments>
      <District name="Dhaka" special="jam"></District>
      <District name="Rangpur" special="birir vitor "></District>
      <District name="Panchogor" special="bangla banda"></District>
      
    </div>
  );
}
function LoadComments(){
  const [comments, setComments]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>setComments(data))
  },[])
  return(
    <div>
      <h2>
        Comments:{comments.length}
      </h2>
      {comments.map(comment=><Comment name={comment.name} body={comment.body}></Comment>)}
    </div>
  )
}
function Comment(props){
  return(
    <div style={{background:'lightblue', borderRadius:'30px', margin:'20px', padding:'30px'}}>
      <h2>Name:{props.name}</h2>
      <h6>Email:{props.email}</h6>
      <p>Comment:{props.body}</p>
    </div>
  )
}
const DistrictStyle = {
  backgroundColor:'lightgray',
  margin:'20px',
  borderRadius:'20px',
  padding:'30px'
}
function District(props){
  const [power, setPower]= useState(1)
  const boostPower=()=>{
    const newPower= power*2  
    setPower(newPower)
  }
  return(<div style={ DistrictStyle}>
    <h2>District:{props.name}</h2>
    <p>Specialty:{props.special}</p>
    <h4>Power:{power}</h4>
    <button onClick={boostPower}>Booster power</button>
  </div>)
}
export default App;
