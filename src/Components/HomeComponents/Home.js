import Login from "./Login"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Booking from "./Booking"
import Signup from "./Signup"
import {SignedStatus} from "./SignedStatus"
import {LoginStatus} from "./LoginStatus"

function Home(props){
    const [signinStatus, setSigninStatus] = useState(false)
    const [loginStatus, setLoginStatus] = useState(false)

    useEffect(()=>{
        setSigninStatus(false)
        setLoginStatus(false)
        Cookies.remove("orders")
    },[])
    
    return(
        <div>
            {!props.loggedIn ?
                    <div>
                        <Login handleLoggedIn = {props.handleLoggedIn} handleLoginStatus = {(val)=>setLoginStatus(val)} handleSigninStatus = {setSigninStatus}/>
                        <LoginStatus status = {loginStatus}/>
                        <br/>
                        <Signup handleSigninStatus = {(val)=>setSigninStatus(val)} handleLoginStatus = {setLoginStatus}/>
                        <SignedStatus status = {signinStatus}/>
                    </div>
                    : <Booking/>}
        </div>
    )
}

export default Home