function HomePage() {
    return (
        <div>
            <header className="homeHead">
                <div className="navLogo">
                    <img src="./images/logo.jpg" alt="logo" />
                </div>
                <div className="navList">
                    <ul>
                        <li> <a href="#">Weekly Deals </a></li>
                        <li className="arrival-dropdown">
                            <a href="#">New Arrivals</a>
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            <div class="arrival-dropdown-menu">
                                <ul>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Kids</li>
                                </ul>
                            </div>
                        </li>
                        <li className="men-dropdown">
                            <a href="#">Men</a></li>
                        <div className="men-dropdown-menu">
                            <ul>
                                <li>
                                    <span>Tops</span>
                                    <ul id="top-dropdown-menu">
                                        <li>Tees</li>
                                        <li>Polos</li>
                                        <li>Shirts</li>
                                        <li>Outerwear</li>
                                        <li>Ethnic Wear</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Bottom & Sleepwear</span>
                                    <ul id="sleepwear-dropdown-menu">
                                        <li>Jeans</li>
                                        <li>Trouser & Pants</li>
                                        <li>Shorts</li>
                                        <li>Sleepwear</li>
                                    </ul>

                                </li>
                                <li>
                                    <span>Activewear</span>
                                    <ul id="activewear-dropdown-menu">
                                        <li>Tops</li>
                                        <li>Bottoms</li>
                                        <li>Tracksuits</li>
                                    </ul>

                                </li>
                                <li>
                                    <span>Footwear</span>
                                    <ul id="footwear-dropdown-menu">
                                        <li>Shoes</li>
                                        <li>Socks</li>
                                    </ul>

                                </li>
                                <li>
                                    <span>Accesories</span>
                                    <ul id="accesories-dropdown-menu">
                                        <li>Underwear</li>
                                        <li>Caps & Hats</li>
                                        <li>Bags,Belts & Wallets</li>
                                        <li>Eyewear</li>
                                        <li>Gloves & Scarves</li>
                                        <li>Health & Grooming</li>
                                        <li>Fragnances</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Polo Republica</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Minor Fault</a></li>
                        <li><a href="#">Clearance</a></li>
                    </ul>
                </div>
                <div className="navIcon">
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
