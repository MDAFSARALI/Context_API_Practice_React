import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext);
    const notify = () => toast(`Login Successful : ${username} 😊`);
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
        if(username && password) notify();
    }
    return (
        <div id="login-form">
          <h1>Login</h1>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username}
                 onChange={(e)=> setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password}
                 onChange={(e)=> setPassword(e.target.value)}/>
            <input type="submit" value="Submit" onClick={HandleSubmit} />
            <ToastContainer/>
          </form>
        </div>
      );
}

export default Login
