import React, { useState } from 'react'
import Item from "./Item"
import {useHistory} from "react-router-dom"
import Cookies from "js-cookie"
import ClearOrders from './ClearOrders'

function Daffodills(){
    Cookies.remove("orders")
    const history = useHistory()
    const [items, setItems] = useState(
        [
            {id : 1, name : "Chapathi",             price : 30,     ref : "/food/chapathi.jpg",           count : 0,  amount :0},
            {id : 2, name : "Chicken Curry",        price : 80,     ref : "/food/chicken-curry.jpg",      count : 0,  amount :0},
            {id : 3, name : "Chicken Fried Rice",   price : 80,     ref : "/food/chicken-fried-rice.jpg", count : 0,  amount :0},
            {id : 4, name : "Chicken Noodles",      price : 80,     ref : "/food/chicken-noodles.jpg",    count : 0,  amount :0},
            {id : 5, name : "Egg Noodles",          price : 70,     ref : "/food/egg-noodles.jpg",        count : 0,  amount :0}
        ]
    )
    
    function clearItems(){
        const freshItems = []
        items.forEach(item => {
            freshItems.push(
                {
                    id : item.id,
                    name : item.name,
                    price : item.price,
                    ref : item.ref,
                    count : 0,
                    amount : item.count
                }
            )
        });
        setItems(freshItems)
    }

    function handleCheckOut(){
        const items_serialized = JSON.stringify(items)
        Cookies.set("orders",items_serialized)
        history.push("/checkout")
    }

    function handleCount(id,val){
        const newItems = []
        items.forEach(item => {
            if(val === 1){
                if(item.id === id){
                    item.count+=1
                    item.amount+=item.price
                }
                newItems.push(item)
            }else{
                if(item.id === id){
                    item.count-=1
                    item.amount-=item.price
                }
                newItems.push(item)
            }
        })
        setItems(newItems)
    }
    return(
        <div>
            {items.map((item) => ( 
                <div  key = {item.id}>
                    <Item 
                        item = {item}
                        handleCount = {handleCount}
                    />
                </div>
            ))}
            <button onClick = {handleCheckOut}>CHECK OUT</button>
            <ClearOrders items = {items} clearItems = {()=>clearItems()}/>
        </div>
    )
}

export default Daffodills