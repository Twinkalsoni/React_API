import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[contact,setcontact]=useState("");

  function Saveuser()
  {
    console.warn(name,email,contact);
    let data={name,email,contact}
    fetch("http://localhost:3000/users",{
    method:'POST',
    Headers:{
      'Accept':'applocation/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)


  }).then((result)=>{
    console.warn("result",result);
  })
  }
  return (
    <div className="App">
     <h1>post method</h1>


     <input type="text"  value={name} onchange={(e)=>{setname(e.target.value)}}name="name"/><br/>
     <input type="text" value={email} onchange={(e)=>{setemail(e.target.value)}}name="name"/><br/>
     <input type="text" value={contact} onchange={(e)=>{setcontact(e.target.value)}}name="name"/><br/>
<button type="button" onClick={Saveuser}>save</button>
    </div>
  );
}

export default App;
