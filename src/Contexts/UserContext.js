import { createContext,useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null)

export const UserContextProvider = ({children})=>{
    const [token,setToken] = useState(null)
    const [contextEmail,setContextEmail] = useState(null)

    function checkToken(){
        setToken(1)
        Cookies.set("token",1)
        return true
    }
    function handleToken(val){
        setToken(val)
    }

    function handleContextEmail(email){
        setContextEmail(email)
    }
    
    return(
        <UserContext.Provider value = {{token,handleToken,checkToken,contextEmail,handleContextEmail}}>
            {children}
        </UserContext.Provider>
    )
}
