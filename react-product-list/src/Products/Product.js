import React from 'react'
import Radium from 'radium'

import './Product.css'

const product = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Product" style={style}>
            <p onClick={props.click}>This is a {props.name} and price is ${props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(product)
