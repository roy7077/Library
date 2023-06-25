import "../style/header.css"
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="header">
         <h1>
            LIBRARY
         </h1>
         <ul>
            <li><Link to="/" className="l1">Home</Link></li>
            <li><Link to="/" className="l1">About</Link></li>
            <li><Link to="/" className="l1">Contact</Link></li>
         </ul>
        </div>
    )
}

export default Header;