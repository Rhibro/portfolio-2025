// import Router from "../../router/router"
// import { Link } from "react-router-dom"

// export default function Header() {
//     return (
//         <nav className="headerNav">
//             <ul>
//                 <li><Link className="liLink" to="/">Home</Link></li>
//                 <li><Link className="liLink" to="/about">About</Link></li>
//                 <li><Link className="liLink" to="/education">Education</Link></li>
//                 <li><Link className="liLink" to="/portfolio">Portfolio</Link></li>
//                 <li><Link className="liLink" to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     )
// }
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); // Create a ref for the menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);


    return (
        <nav className="headerNav">
            <div className="burger" onClick={toggleMenu}>
                {/* Burger Icon */}
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                <li><Link className="liLink" to="/">Home</Link></li>
                <li><Link className="liLink" to="/about">About</Link></li>
                <li><Link className="liLink" to="/education">Education</Link></li>
                <li><Link className="liLink" to="/portfolio">Portfolio</Link></li>
                <li><Link className="liLink" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}