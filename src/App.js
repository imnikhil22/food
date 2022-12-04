import {Route , Switch} from "react-router-dom"
import Home from "../src/Components/HomeComponents/Home"
import Daffodills from "./Components/Daffodills"
import Foodcourt from "./Components/Foodcourt"
import Checkout from "./Components/CheckoutComponents/Checkout"
import ForgotPass from "./Components/HomeComponents/ForgotPass"
import Nav from "./Components/Nav"
import PageNotFound from "./Components/PageNotFound"
import CheckLoggedIn from "./Apis/CheckLoggedIn"
import {useState,useEffect} from "react"

function App() {
  const [loggedIn,setLoggedIn]= useState(false)
  
  useEffect(() => {
    CheckLoggedIn(setLoggedIn)
  }, [loggedIn])

  return(
    <div>
      <Nav loggedIn = {loggedIn} handleLoggedIn = {(val)=>setLoggedIn(val)}/>
      <Switch>
        <Route exact path = "/"><Home loggedIn = {loggedIn} handleLoggedIn = {setLoggedIn}/></Route>
        {loggedIn?<Route exact path = "/bookings/d2"><Daffodills/></Route> : null}
        {loggedIn?<Route exact path = "/bookings/food-court"><Foodcourt/></Route> : null}
        {loggedIn?<Route exact path = "/checkout"><Checkout/></Route> : null}
        <Route exact path = "/forgot-password"><ForgotPass/></Route>
        <Route><PageNotFound/></Route>
      </Switch>
    </div>
  )
}

export default App
