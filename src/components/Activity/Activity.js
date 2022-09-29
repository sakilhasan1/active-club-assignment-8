import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { Handler } = props;
    const { picture, name, about, age, time } = props.activity;
    // console.log(props)

    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='info'>
                <h3>{name}</h3>
                <p>{about}</p>
                <p>For Age: {age}</p>
                <h5>Time required:{time} min</h5>
            </div>
            <button onClick={Handler} className='btn'>Add to List</button>
        </div>
    );
};

export default Activity;