function HomePage() {
    return(
        <div>
            <header className ="homeHead">
                <div className="navLogo">
                    <img src="./images/logo.jpg" alt="logo" />
                </div>
                <div className ="navList">
                    <ul>
                        <li> <a href ="#">Weekly Deals </a></li>
                    <li className = "arrival-dropdown">
                            <a href = "#">New Arrivals</a>
                            <i class ="fa fa-chevron-down" aria-hidden = "true"></i>
                            <div class ="arrival-dropdown-menu">
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                        </ul>
                            </div>
                    </li>
                        <li><a href = "#">Men</a></li>
                        {/* <div class = "men-dropdown">
                            <span>Tops
                                <ul id = "top-dropdown-menu">
                                    <li>Tees</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Outerwear</li>
                                    <li>Ethnic Wear</li>
                                </ul>
                                </span>
                            <span>Bottom & Sleepwear
                            <ul id = "sleepwear-dropdown-menu" >
                                    <li>Tees</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Outerwear</li>
                                    <li>Ethnic Wear</li>

                                </ul>
                            </span>
                            <span>Activewear
                            <ul id = "activewear-dropdown-menu">
                                    <li>Tees</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Outerwear</li>
                                    <li>Ethnic Wear</li>

                                </ul>
                            </span>
                            <span>Footwear
                            <ul id = "footwear-dropdown-menu">
                                    <li>Tees</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Outerwear</li>
                                    <li>Ethnic Wear</li>

                                </ul>
                            </span>
                            <span>Accesorries
                            <ul id = "accesorries-dropdown-menu">
                                    <li>Tees</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Outerwear</li>
                                    <li>Ethnic Wear</li>

                                </ul>
                            </span>

                        </div> */}
                        {/* <table>
                            <tr>
                                <th>Top</th>
                                <th>Bottom & Sleepwears</th>
                                <th>Active Wear</th>
                                <th>Footwear</th>
                                <th>Accesorries</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>Tees</td>
                                    <td>Jeans</td>
                                    <td>Tops</td>
                                    <td>Shoes</td>
                                    <td>Underwear</td>
                                </tr>
                                <tr>
                                    <td>Polos</td>
                                    <td>Trouser & Wears</td>
                                    <td>Bottom</td>
                                    <td>Socks</td>
                                    <td>Caps & Hats</td>
                                </tr>
                                <tr>
                                    <td>Shirts</td>
                                    <td>Shorts</td>
                                    <td>Tracksuits</td>
                                    <td></td>
                                    <td>Bags,Belts & Wallets</td>
                                </tr>
                                <tr>
                                    <td>Outerwear</td>
                                    <td>Sleepwear</td>
                                    <td></td>
                                    <td></td>
                                    <td>Eyewear</td>
                                </tr>
                                <tr>
                                    <td>Ethnic Wear</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Gloves & Scarves</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Health & Grooming</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Fragnances</td>
                                </tr>
                               
                            </tbody>
                        </table> */}
                        <li><a href ="#">Women</a></li>
                        <li><a href ="#">Kids</a></li>
                        <li><a href ="#">Polo Republica</a></li>
                        <li><a href ="#">Home</a></li>
                        <li><a href ="#">Minor Fault</a></li>
                        <li><a href ="#">Clearance</a></li>
                    </ul>
                </div>
                <div className ="navIcon">
                <i class="fa fa-search"></i>
                <i class="fa fa-user" ></i>
                <i class="fa fa-shopping-cart"></i>

                </div>
            </header>
        </div>
    )
};

export default HomePage;






// To add the dropdown in new arrival on click the code provided by chat gpt





// import React, { useState } from 'react';

// function HomePage() {
//     // State to manage the visibility of the dropdown
//     const [showDropdown, setShowDropdown] = useState(false);

//     // Function to toggle the visibility of the dropdown
//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return(
//         <div>
//             <header className="homeHead">
//                 <div className="navLogo">
//                     <img src="./images/logo.jpg" alt="logo" />
//                 </div>
//                 <div className="navList">
//                     <ul>
//                         <li>Weekly Deals</li>
//                         {/* "New Arrivals" with dropdown */}
//                         <li onClick={toggleDropdown}>New Arrivals
//                             {showDropdown && (
//                                 <ul className="dropdown">
//                                     <li>New Arrival 1</li>
//                                     <li>New Arrival 2</li>
//                                     <li>New Arrival 3</li>
//                                     {/* Add more items as needed */}
//                                 </ul>
//                             )}
//                         </li>
//                         <li>Men</li>
//                         <li>Women</li>
//                         <li>Kids</li>
//                         <li>Polo Republica</li>
//                         <li>Home</li>
//                         <li>Minor Fault</li>
//                         <li>Clearance</li>
//                     </ul>
//                 </div>
//                 <div className="navIcon">
//                     <i className="fa fa-search"></i>
//                     <i className="fa fa-user"></i>
//                     <i className="fa fa-shopping-cart"></i>
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default HomePage;
