import { Route, Redirect} from "react-router"

function ProtectedRoute({loggedIn, component : Component, ...rest}){
    return(
        <Route
            {...rest} 
            render = {(props)=>{
                if(loggedIn) return <Component {...props}/>
                return <Redirect to = {{path : "/"}}/>
                }    
            }              
        />
    )
}

export default ProtectedRoute