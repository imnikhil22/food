
export function LoginStatus(props){
    if(props.status!== false && props.status!== true){
        if(props.status === "wrongpassword") return (<h2>Wrong Password</h2>)
        if(props.status === "error") return (<h2>Login failed due to unkown reason. Please try again</h2>)
        if(props.status === "nouserfound") return (<h2>No user Found</h2>)
    }else return <div></div>
}