import React, { Component } from 'react';
import axios from 'axios';

import './FullItem.css';

class FullItem extends Component {
    state = {
        loadedMenu: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedMenu || (this.state.loadedMenu && this.state.loadedMenu.restaurantMenuItems.restaurantId !== this.props.id) ) {
                axios.get( '/Restaurant/GetMenu/30' + this.props.id )
                    .then( response => {
                        // console.log(response.data);
                        this.setState( { loadedMenu: response.data } );
                    });
            }
        }
    }

    render () {
        let menuItem = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            menuItem = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedMenu ) {
            menuItem = (
                <div className="FullItem">
                    <h1>{this.state.loadedMenu.title}</h1>
                    <p>{this.state.loadedMenu.restaurantMenuItems.description}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return menuItem;
    }
}

export default FullItem;