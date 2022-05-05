//import logo from './logo.svg';
import './App.css'; 
import React,{useState} from 'react'
//import Counter from './Components/Counter'
//import counterContextProvider from './Context/CounterContext'
import Login from './Components/Login'
import Profile from './Components/Profile';
import LoginContext from './Context/LoginContext'

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile]= useState(false);
  return (
    <div className="App">
    <h1>Context Api</h1>
    {/*<Counter/>
    <counterContextProvider/>*/}
    <LoginContext.Provider value={{username, setUsername,setProfile}}>
    {profile ? <Profile/> : <Login/>}
    </LoginContext.Provider>
    
    </div>
  );
}
// I think still opening ?yes o server is starting now
export default App;
