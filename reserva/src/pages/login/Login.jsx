import axios from "axios";
import { AuthContex } from "../../context/AuthContext";
import "./login.css"
import { useAsyncError } from "react-router-dom";
import { useContext, useState } from "react";

const Login = () => {
    const [credencials,setCredentians] = useState({
        username:undefined,
        password:undefined,

    });
    const {user,loading, error, dispatch} = useContext(AuthContex);
    const handleChange = () =>{
        setCredentians((prev)=>({...prev,[e.target.id]:e.target.value}));       
    }

    const login = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", credencials);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data});

        }
    }
    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="Nombre de usuario" id="username" className="lInput"
                onChange={handleChange}
                />
                <input type="password" placeholder="Contraseña" id="password" className="lInput"
                onChange={handleChange}
                />
                <button className="lButton" onClick={login}>Ingresar</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}
export default Login