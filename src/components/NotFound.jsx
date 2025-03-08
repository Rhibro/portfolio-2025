import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notFoundBody">
        <h1 className="headerNF">404 Not Found</h1>
        <h3 className="imgNF">¯\_(ツ)_/¯</h3>
        <h3 className="mesNF">Sorry, this page doesn't seem to be available.</h3>
        <h3 style={{fontWeight: '600'}}>Let's head <Link style={{color: 'blue', textDecoration: 'underline', fontWeight: '600'}} className="liLink" aria-label="click here to send me an email" to="/">Home</Link></h3>
        </div>
    )
}