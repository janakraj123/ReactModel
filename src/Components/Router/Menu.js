import React from 'react'
import './MenuStyle.css'
import {Link} from 'react-router-dom'
const Menu=()=>{
    return(
        <div className="Menustyle">
            {/* <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to ="About" style={{textDecoration:'none'}}>About</Link></li>
                <li><Link to ="Gallery" style={{textDecoration:'none'}}>Gallery</Link></li>
                <li><Link to ="Contact" style={{textDecoration:'none'}}>Contact</Link></li>
                <li><Link to ="Support" style={{textDecoration:'none'}}>Support</Link></li>
            </ul> */}
            <Link to="/" className="active">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>

        </div>
    )
}
export default Menu