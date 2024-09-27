import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="container  my-5" id="skill">
            <h1 className="text-white text-center">My Skills</h1>

            <div className="row g-2 py-5">

                <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="mx-2 border border-success p-1 skill-div rounded-3">



                        <h2 className="text-white">FrontEnd</h2>
                        <button type="button" class="btn btn-outline-success text-white">JavaScript</button>
                        <button type="button" class="btn btn-outline-success mx-2 text-white">React Js</button>
                        <button type="button" class="btn btn-outline-success text-white">HTML</button>
                        <button type="button" class="btn btn-outline-success mx-2 my-2 text-white">CSS</button>
                        <button type="button" class="btn btn-outline-success text-white">Bootstrap</button>
                        <button type="button" class="btn btn-outline-success mx-2 text-white">Talwind</button>
                        <button type="button" class="btn btn-outline-success p-2 text-white">Material UI</button>
                        <button type="button" class="btn btn-outline-success p-2 text-white my-2">Daisy UI</button>




                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center ">
                    <div className="border border-success p-1 m-4 skill-div rounded-3">
                        <h2 className="text-white">BackEnd</h2>
                        <button type="button" class="btn btn-outline-success text-white">Django</button>
                        <button type="button" class="btn btn-outline-success text-white mx-2 my-2">Node Js</button>
                        <button type="button" class="btn btn-outline-success text-white">Express JS</button>
                        <button type="button" class="btn btn-outline-success text-white">MongoDB</button>
                        <button type="button" class="btn btn-outline-success text-white mx-2">MySQL</button>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center ">
                    <div className="mx-2 border border-success p-1 skill-div rounded-3">
                        <h2 className="text-white">Others</h2>
                        <button type="button" class="btn btn-outline-success text-white">Python</button>
                        <button type="button" class="btn btn-outline-success text-white mx-2">C#</button>

                    </div>

                </div>

            </div>
        </div>



    );
};

export default Skills;