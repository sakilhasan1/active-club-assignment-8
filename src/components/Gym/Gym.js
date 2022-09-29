import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Gym.css'

const Gym = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const Handler = () => {
        console.log("i am clicked")
    }
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
                <h1>I am cart</h1>
            </div>
        </div>
    );
};

export default Gym;