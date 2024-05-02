import React from 'react';
import home_icon from '../images/icons/home.svg'
import about_icon from '../images/icons/about.svg'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="tab-action-item">
            <ul>
                <li>
                    <Link to="/" data-title="Home" className="link active">
                        <img alt="home" className="svg" src={home_icon}/>
                    </Link>
                </li>
                <li>
                    <Link to="/about" data-title="About" className="link active">
                        <img alt="about" className="svg" src={about_icon}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}