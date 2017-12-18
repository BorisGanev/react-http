import React, {
    Component
} from 'react';
import axios from 'axios';

import MenuItem from '../../components/MenuItem/MenuItem';
import FullItem from '../../components/FullItem/FullItem';
import NewPost from '../../components/NewPost/NewPost';
import './Menu.css';

class Menu extends Component {
    state = {
        menu: [],
        selectedMenuId: null
    }

    componentDidMount() {
        axios.get('/Restaurant/GetMenu/30')
            .then(response => {
                const menu = response.data;
                const menuItems = [];
                // console.log('This is the menu length:' + menu.length);

                let itemCategory;
                let subItemId;
                let subItemTitle;
                let subItemDescription;
                let subItemPrice;

                // looping through the menu
                Object.keys(menu).forEach(function (prop) {

                    let resItems = menu[prop].restaurantMenuItems;
                    let resItemsLength = menu[prop].restaurantMenuItems.length;

                    itemCategory = menu[prop].title;
                    console.log(itemCategory);

                    //log the length of the items of the current object array
                    console.log('resItemsLength: ' + resItemsLength);
                    // looping through the restaurantMenuItem Objects
                    Object.keys(resItems).forEach(function (ele) {
                        subItemId = JSON.stringify(resItems[ele].restaurantMenuItemId);
                        subItemTitle = JSON.stringify(resItems[ele].title);
                        subItemDescription = JSON.stringify(resItems[ele].description);
                        subItemPrice = JSON.stringify(resItems[ele].price);
                        
                        // creating JSON Objects for each menu item 
                        menuItems.push({
                            "itemCategory": itemCategory,
                            "itemId": subItemId,
                            "itemTitle": subItemTitle,
                            "itemDescription": subItemDescription,
                            "itemPrice": subItemPrice
                        });
                    });
                });

                const updatedMenu = menuItems.map(menuItem => {
                    return {
                        ...menuItem,
                        // author: 'test'
                    }
                });
                this.setState({
                    menu: updatedMenu
                });
                // console.log('***This is the updated menu ' + updatedMenu);
            });
    }

    menuSelectedHandler = (id) => {
        console.log('This is the menuSelectionHandler id: '+ id);
        this.setState({
            selectedMenuId: id
        });
    }

    render() {
        const menu = this.state.menu.map(menuItem => {

            return <MenuItem
            key = {menuItem.itemId}
            category = {menuItem.itemCategory}
            title = {menuItem.itemTitle}
            description = {menuItem.itemDescription}
            price = {menuItem.itemPrice}

            clicked = {() => this.menuSelectedHandler(menuItem.itemId)}
            />;
        });

        return ( 
        <div>
            <section className = "Posts" > 
                {menu} 
            </section> 
            <section >
            <FullItem id = {
                this.state.selectedMenuId
            }/> 
            </section> 
            <section >
                <NewPost />
            </section> 
        </div>
        );
    }
}

export default Menu;