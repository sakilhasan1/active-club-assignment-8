import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const [btn, setBtn] = useState([])
    const { cart } = props;
    console.log(cart)

    let total = 0;
    for (const activity of cart) {
        // console.log(activity)
        total = total + activity.time;
    };


    const btnHandler = () => {
        setBtn(10)
    };

    const btnHandle = () => {
        setBtn(20)
    };
    const btnH = () => {
        setBtn(30)
    };
    const btnHand = () => {
        setBtn(40)
    };
    const btnHan = () => {
        setBtn(50)
    };
    return (
        <div className='cart'>
            <h2>Rakib Hasan:{props.cart.id}</h2>
            <h2>Total: </h2>
            <div className='maser'>
                <h5>50kg</h5>
                <h5>5.6"</h5>
                <h5>24 years</h5>
            </div>
            <h3>Add A Break</h3>
            <div className='button'>
                <p></p>
                <button onClick={btnHandler}>10m</button>
                <button onClick={btnHandle}>20m</button>
                <button onClick={btnH}>30m</button>
                <button onClick={btnHand}>40m</button>
                <button onClick={btnHan}>50m</button>
            </div>
            <h3>Exercise Details</h3>
            <div>
                <h4>Exercise time: {total}min </h4>
                <h4>Break time: {btn} </h4>
            </div>
            <button className='bu'>Activity Completed</button>
        </div>
    );
}

export default Cart;
