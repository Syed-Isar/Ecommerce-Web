function HomePage() {
    return(
        <div>
            <header className ="homeHead">
                <div className="navLogo">
                    <img src="./images/logo.jpg" alt="logo" />
                </div>
                <div className ="navList">
                    <ul>
                        <li>Weekly Deals</li>
                    <li className = "arrival-dropdown">
                            New Arrivals
                        <ul className = "arrival-dropdown-list">
                           
                            <li>Men</li>
                            <li>Women</li>
                            <li>kids</li>
                            
                        </ul>
                    </li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Polo Republica</li>
                        <li>Home</li>
                        <li>Minor Fault</li>
                        <li>Clearance</li>
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
