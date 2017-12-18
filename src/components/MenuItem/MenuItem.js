import React from 'react';

import './MenuItem.css';

const menuItem = (props) => (
    <article className="MenuItem" onClick={props.clicked}>
        <h1 className="Category">{props.category}</h1>
        <h4>{props.title}</h4>

        <div className="Info">
            <div className="Description">{props.description}</div>
            <div className="Author">{props.price} DKK</div>
        </div>
    </article>
);

export default menuItem;