import React from 'react';

import './Product.css';

const product = (props) => {
    return (
        <div className="Product">
            <p onClick={props.click}>This is a {props.name} and price is ${props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default product;
