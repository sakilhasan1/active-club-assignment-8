import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Gym.css'

const Gym = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([])
    // console.log(cart);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const Handler = (activity) => {
        const newCart = [...cart, activity];
        setCart(newCart)
    };

    return (
        <div className='Gym-container'>

            <div className="activities-container">

                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        Handler={Handler}
                    ></Activity>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    key={cart.id}
                    cart={cart}

                ></Cart>

            </div>
        </div>
    );
};

export default Gym;