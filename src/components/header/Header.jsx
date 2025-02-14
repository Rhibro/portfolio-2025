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
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="headerNav">
            <div className="burger" onClick={toggleMenu}>
                {/* Burger Icon */}
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link className="liLink" to="/">Home</Link></li>
                <li><Link className="liLink" to="/about">About</Link></li>
                <li><Link className="liLink" to="/education">Education</Link></li>
                <li><Link className="liLink" to="/portfolio">Portfolio</Link></li>
                <li><Link className="liLink" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}