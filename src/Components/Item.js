export default function Item(props){

    return(
        <div>
            <img src = {props.item.ref} alt = "" width="100" height="100"/>
            <br/>
            <h>Item  : {props.item.name}</h>
            <br/>
            <h>PRICE : {props.item.price}</h>
            <br/>
            <h>Count : {props.item.count}</h>
            <br/>
            <span>
            <button onClick = {()=>{props.handleCount(props.item.id,1)}}>More</button>
            {props.item.count === 0 ? <></> : <button   onClick = {()=>{props.handleCount(props.item.id,0)}}>Less</button>}
            </span>
            <br/>
            <br/>
        </div>
    )
}