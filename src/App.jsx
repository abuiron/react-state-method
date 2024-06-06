import React, { useState } from 'react'


//import the button from rb
import Button from 'react-bootstrap/Button';

//import the form
import Form from 'react-bootstrap/Form';


//using react bootstrap for it
function App() {
  
  //using state and statenfn for it 

  //also we set the mail id default in the usestate like abuiron80@gmail.com and give that value into the input
  let [email,setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [output,setOp] = useState("")

  let capturepassword = (e)=>{
    setPassword(e.target.value)
  }

  let handleSubmits =()=>{
    setOp(`the email is ${email} with password ${password}`)
  }

  let Reset=()=>{
    setOp("")
    setEmail("")
    setPassword("")
  }
  
  return <>

{/*importing the form code from the rb */}
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={capturepassword}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmits}>
        Submit
      </Button>
      <Button variant="warning" onClick={Reset}>Reset</Button>
    </Form>
    <div style={{color:"red"}}>
      {output}
    </div>

 
   </>
 }


export default App


//this is the state approch 


//function App() {
//  
//  let [state,statefunction] = useState(0);
//  
//  return <>
//
//  {/* decrement button */}
//  <button onClick={()=>{
//   
//    //this approch doesn't increment or decrement overcome this we use state method
//    //--value
// 
//    //state approch
//    statefunction(--state)
//     console.log(state)
//   }}>-</button>
// 
//       {state}
// 
//       {/* increment button */}
//   <button onClick={()=>{
// 
//     //this approch doesn't increment or decrement overcome this we use state method
//     //++value
// 
//     //state approch
//     statefunction(++state)
//     console.log(state)
//   }}>+</button>
// 
// 
// {/* reset button */}
// 
//   <button onClick={()=>{
//     statefunction(0)
//   }}>Reset</button>
// 
//   </>
// }
 

//using the rb for button

//function App() {
//  
//  let [state,statefunction] = useState(0);
//  
//  return <>
//
//  
//  {/* decrement button */}
//  {/*also we use the bootstrap variant in the button */}
//  <Button variant='primary' onClick={()=>{
//   
//    //this approch doesn't increment or decrement overcome this we use state method
//    //--value
// 
//    //state approch
//    statefunction(--state)
//     console.log(state)
//   }}>-</Button>
// 
//       {state}
// 
//       {/* increment button */}
//   <Button variant='danger' onClick={()=>{
// 
//     //this approch doesn't increment or decrement overcome this we use state method
//     //++value
// 
//     //state approch
//     statefunction(++state)
//     console.log(state)
//   }}>+</Button>
// 
// 
// {/* reset button */}
// 
//   <Button variant='info' onClick={()=>{
//     statefunction(0)
//   }}>Reset</Button>
// 
//   </>
// }
//