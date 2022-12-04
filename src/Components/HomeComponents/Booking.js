import { Link } from "react-router-dom"

function Booking(){
    return( 
        <div>
            <Link to = "/bookings/d2">
                <img src="/foodfrom/d2.png" alt = "" width="200" height="200"/>
                <h1>Daffodils2</h1>
            </Link>
            <Link to = "/bookings/food-court">
                <img src="/foodfrom/food-court.png" alt = "" width="200" height="200"/>
                <h1>FoodCourt</h1>
            </Link>
        </div>
    );
}

export default Booking