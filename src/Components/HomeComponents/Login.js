import {useState} from "react"
import axios from "axios"
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"

function Login(props){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.handleSigninStatus(false)
        const user = {email, password}
        axios.post("http://localhost:4000/login", user)
            .then(res =>{
                const data = res.data
                console.log(data)
                if(res.data.token){
                    Cookies.set("token",data.token)
                    Cookies.set("email",data.email)
                    props.handleLoggedIn(true)
                    props.handleLoginStatus(true)
                }else{
                    props.handleLoginStatus(data)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return(
        <div>
            <h2>LOGIN</h2>
            <form onSubmit = {(e)=> {handleSubmit(e)}}>
                <label >Reg Email</label>
                <br/>
                <input 
                    id = {"email"} 
                    type = "email" 
                    required
                    onChange = {(e)=>{setEmail(e.target.value)}}/>
                <br/>
                <label >Password</label>
                <br/>
                <input 
                    required
                    id = "password" 
                    type = "password" 
                    onChange = {(e)=>{setPassword(e.target.value)}}/>
                <br/>
                <button>Submit</button>
                <br/>
                <br/>
                <a href = "http://localhost:3000/forgot-password">Forgot Password</a>
                <br/>
            </form>
        </div>
    )
}

export default Login