
export function SignedStatus(props){
    if(props.status){
        if(props.status === "signedup") return (<h2>Signed up. Login to continue</h2>)
        if(props.status === "error") return (<h2>Signup failed due to unkown reason. Please try again</h2>)
        if(props.status === "userexists") return (<h2>User already exists</h2>)
        if(props.status === "unmatchedpasswords") return (<h2>Passwords didn't match -_- </h2>)
    }else return <div></div>
}