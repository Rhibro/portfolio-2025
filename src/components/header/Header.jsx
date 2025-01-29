// import Router from "../../router/router"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="headerNav">
            <ul>
                <li><Link className="liLink" to="/">Home</Link></li>
                <li><Link className="liLink" to="/about">About</Link></li>
                <li><Link className="liLink" to="/education">Education</Link></li>
                <li><Link className="liLink" to="/portfolio">Portfolio</Link></li>
                <li><Link className="liLink" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}