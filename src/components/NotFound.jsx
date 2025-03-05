import Header from "./header/Header";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
        <Header />
        <h1>404 Not Found</h1>
        <h3>Sorry, this page doesn't seem to be available.</h3>
        <h3>Let's head <Link style={{color: 'blue'}} className="liLink" to="/">Home</Link></h3>
        </>
    )
}