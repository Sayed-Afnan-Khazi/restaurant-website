import React from "react";
import "./menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menu_heading">MENU</h1>
            <div className="menuContainer" bis_skin_checked="1">
                {/* <div className="category">
                    <h3 className="category_heading">Soup</h3>
                    <ul>
                    <li>
                    <span className="item">Cream of Seafood</span>
                    <span className="price">160</span>
                    </li>
                    <li>
                    <span className="item">Crab Soup</span>
                    <span className="price">150</span>
                    </li>
                    <li>
                    <span className="item">qwerty</span>
                    <span className="price">200</span>
                    </li>
                </ul>
                </div>

                <div className="category">
                    <h3 className="category">Soup</h3>
                    <li>
                    <span className="item">Cream of Seafood</span>
                    <span className="price">160</span>
                    </li>
                    <li>
                    <span className="item">Crab Soup</span>
                    <span className="price">150</span>
                    </li>
                    <li>
                    <span className="item">qwerty</span>
                    <span className="price">200</span>
                    </li>
                </div> */}
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Soup</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Cream of Seafood</span
                        ><span className="price">160</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Crab Soup</span><span className="price">150</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Prawn Soup</span><span className="price">180</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Salad</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Garlic Sauce</span><span className="price">40</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Green Salad</span><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Apple Mint Salad</span
                        ><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Hawaiian Salad</span
                        ><span className="price">140</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Raw Mango Salad</span
                        ><span className="price">140</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Seafood Salad</span
                        ><span className="price">220</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Starters</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Fish Kabab</span><span className="price">340</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Corn Fish</span><span className="price">320</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Shorty Prawns</span
                        ><span className="price">290</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Prawn Kabab</span><span className="price">380</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Fish Fillet Barbeque</span
                        ><span className="price">480</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Tawa Barbeque Prawns</span
                        ><span className="price">450</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Rice and Noodles</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Boiled Rice</span><span className="price">60</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Ghee Rice</span><span className="price">70</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Biriyanni Rice</span
                        ><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Fish Fried Rice</span
                        ><span className="price">220</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Fish Noodles</span><span className="price">220</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Malabar Fish Biriyani</span
                        ><span className="price">280</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Indian Breads</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Parota</span><span className="price">20</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Tandoori Roti</span><span className="price">30</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Kulcha</span><span className="price">30</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Naan</span><span className="price">30</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Neer Dosa</span><span className="price">40</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Curry</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Dal Fry</span><span className="price">140</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Panner Butter Masala</span
                        ><span className="price">200</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Chicken Allapy</span
                        ><span className="price">220</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Butter Chicken</span
                        ><span className="price">250</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Mocktails</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Blue Lady</span><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Blue Lagoon</span><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Blue Berry Mojito</span
                        ><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Guava Mojito</span><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Mango Deluxe</span><span className="price">120</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Green Apple Mojito</span
                        ><span className="price">140</span>
                    </li>
                    </ul>
                </div>
                <div className="category" bis_skin_checked="1">
                    <h3 className="category">Refreshers</h3>
                    <ul className="itemlist_container">
                    <li className="itemList">
                        <span className="item">Mint Lassi</span><span className="price">60</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Badam Lassi</span><span className="price">60</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Dry Fruit Lassi</span
                        ><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Grape Lassi</span><span className="price">100</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Mango Punch</span><span className="price">140</span>
                    </li>
                    <li className="itemList">
                        <span className="item">Mango Banana Nuts</span
                        ><span className="price">150</span>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;