import React from 'react';
import "./Navigation.css"
import {FaBars} from "react-icons/fa";

const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h3>Port<span className="text-success">folio</span> </h3>
                </div>
                <input type="checkbox" name="" id="click" />
                <label htmlFor="click" className="menu-btn">
                     <FaBars className="icon"></FaBars>
                </label>
                    <ul>
                        <li><a className="active" >Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a className="bg-success rounded-pill px-4" href="https://drive.google.com/file/d/1cN7JPQTewQuNbEIvy_I8BfXKCUuneT38/view?usp=sharing">Resume</a></li>
                        
                    </ul>
               
            </nav>
        </div>
    );
};

export default Navigation;