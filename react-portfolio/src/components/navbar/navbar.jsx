import React from "react";

export const Navbar = () => {
    return <nav>
        <a href="/">Portfolio</a>
        <div>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#experience">Experience</a>
                </li>
            </ul>
            <ul>
                <li>
                   <a href="#projcts">Projects</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}