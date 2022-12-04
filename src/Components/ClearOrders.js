function ClearOrders(props){
    return(
        <div>
            <button onClick = {(e)=>{props.clearItems()}}>CLEAR ORDERS</button>
        </div>
    )
}

export default ClearOrders