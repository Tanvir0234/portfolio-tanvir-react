import React from 'react';
import image from '../../images/image1.png'
import Typical from 'react-typical'
import './Banner.css'
import { FaFileDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-dark">
            <div className="row mt-3 mb-5">
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="banner-content">
                        <h1 className="fs-1 fw-bold text-white">Hi, I'm <span className="text-success">Tanvir Ali.</span> </h1>
                        <p className="fw-bold text-white fs-1"> I am a <Typical
                        className="text-success fs-1"
                            steps={['Web Developer.', 500, 'Programmer.', 500]}
                            loop={Infinity}
                            wrapper="b"
                        /> 
                        
                        </p>
                        <a href="#contact">
                            <button className="btn btn-outline-success me-3 mt-3 text-success" >Hire Me</button>
                        </a>
                        <a href="https://drive.google.com/file/d/1Hcj6l_LVxzCTIWZz-f3EregPW3ww1gIz/view?usp=sharing">
                            <button className="btn btn-success mt-3 text-white"><FaFileDownload></FaFileDownload> Download Resume</button></a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="image-div">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;