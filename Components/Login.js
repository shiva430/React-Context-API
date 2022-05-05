import React,{useContext} from 'react'
import { LoginContext } from '../Context/LoginContext';


export default function Login() {

    const {setUsername,setProfile} =useContext(LoginContext);

  return (
    <div>
        <>
        <input type="text" placeholder="Username.." onChange={(event)=>{setUsername(event.target.value);}}/>
       
        <input type="text" placeholder="Password.."/>
    
        <button onClick={()=>{setProfile(true);}}>Login</button>
        
        </>
    </div>
  )
}
