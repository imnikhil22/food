import axios from "axios"
import Cookies from "js-cookie"

export default function CheckLoggedIn(setter){
    axios.get(`http://localhost:4000/isLoggedIn`,{
        params : {
            token : Cookies.get("token"),
            email : Cookies.get("email")
        }})
        .then(res=>{
            console.log(res.data)
            if(res.data === true){
                setter(true)
            }else{
                Cookies.remove("token")
                Cookies.remove("email")
            }
        })
        .catch(err=>{
            setter(false)
            Cookies.remove("token")
            Cookies.remove("email")
        })
}