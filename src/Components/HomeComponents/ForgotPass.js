import axios from "axios"
import {useState} from "react"

function ForgotPass(){
    const [email,setEmail] = useState("")

    const handleForgotPass = (e)=>{
        axios.post("http://localhost:4000/forgotpass",{email})
            .then(res =>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return(
        <div>
            <br/>
            <label>Enter your Registered Email :</label>
            <br/>
            <br/>
            <input 
                type = "email"
                required
                onChange = {(e)=>{setEmail(e.target.value)}}
            />
            <br/>
            <br/>
            <button onClick = {(e)=>{handleForgotPass(e)}}
            >Submit</button>
        </div>
    )
}

export default ForgotPass