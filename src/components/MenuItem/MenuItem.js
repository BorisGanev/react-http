import React from 'react';

import './MenuItem.css';

const menuItem = (props) => (
    <article className="MenuItem" onClick={props.clicked}>
        <h1 className="Category">{props.category}</h1>

        <div className="Info">
            <h4 className="ItemTitle">{props.title}</h4>
            <div className="Price">- {props.price} DKK</div>
            <div className="Description">{props.description}</div>
        </div>
    </article>
);

export default menuItem;