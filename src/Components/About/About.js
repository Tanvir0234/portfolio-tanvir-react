import React from 'react';
import './About.css';
import image from '../../images/image2.png'
import { FaFacebookF,FaGithub,FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        <div className=" bg-dark my-5" id="about">
            <h1 className="fw-bold text-white text-center pt-5">About Me</h1>
            <div className="row py-5">
                <div className="col-lg-6 col-sm-12">
                    <div className="bg-success div-bg rounded mx-auto">
                        <img className=" bg-black rounded image-bg" src={image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 about-content">
                    
                        
                        <p className="text-white">Hello , I'm Tanvir Ali. I am a MERN stack web developer. I love to learn new technologies.My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am currently pursuing a degree in Bachelor’s of Electrical & Electronic Engineering at International Islamic University Chittagong. </p>
                        <div>
                            <h3 className="text-white">Follow Me</h3>
                            <br />
                            <a className=" my-2 p-2 bg-success text-white"  href="https://www.facebook.com/tanvir.ali.10"><FaFacebookF></FaFacebookF></a>
                            <a className=" mx-2 my-2 p-2 bg-success text-white"  href="https://github.com/Tanvir0234"><FaGithub></FaGithub></a>
                            <a className=" my-2 p-2 bg-success text-white"  href=""><FaLinkedinIn></FaLinkedinIn></a> 
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default About;