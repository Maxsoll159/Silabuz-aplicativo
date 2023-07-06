import { createContext, useEffect, useState } from "react";
import { getAuth } from "../helpers/ApiLogin";
import { useNavigate } from "react-router-dom";


export const ContextApp = createContext();

export const ContextProvider = ({children}) =>{
    const navigate = useNavigate()
    let token = localStorage.getItem("token")

    const [usuarioLogin, setUsuarioLogin] = useState(null)

    useEffect(()=>{
        getAuth(token).then(res=>{
            if(res.statusCode !== 401){ 
                navigate("/dashboard", {state:{logged: true}})
                setUsuarioLogin(res)
            }else{
                setUsuarioLogin(null)
                navigate("/", {state:{logged: false}})
            }
        })
    }, [])



    return(
        <ContextApp.Provider value={{setUsuarioLogin, usuarioLogin}}>
            {children}
        </ContextApp.Provider>
    )
}