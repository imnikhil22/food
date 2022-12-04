import Cookies from "js-cookie"
import {useHistory,Link} from "react-router-dom"

function Nav(props){
    const history = useHistory()

    function handleLogout(e){
        props.handleLoggedIn(false)
        Cookies.remove("token")
        Cookies.remove("email")
        history.push("/")
    }
    return (
        <div>
        <ul>
            {Cookies.get("email")?
                <li>
                    <h2>{Cookies.get("email")}</h2>
                </li> : null}
            <li>
                <Link to = "/">Home</Link>
            </li>
            {props.loggedIn? <li><a href="http://localhost:3000/" onClick = {(e)=>handleLogout(e)}>Logout</a></li> :null}
        </ul>    
            <br/>
        </div>
    )
}

export default Nav