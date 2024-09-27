import React from 'react';
import './Project.css'
import img from "../../images/watch shop image.PNG"
import img1 from "../../images/tourism image.PNG"
import img2 from "../../images/dantle.PNG"

const Project = () => {
  return (
    <div className="my-5" id="project">
      <h1 className="text-center fw-bold fs-1 text-white py-5">Projects</h1>
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 container">
          <div className="col">
            <div className="card bg-dark project border-success h-100">
              <img src={img} className="card-img-top image-align p-2 " alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">Watch Shop App</h5>
                <p className="card-text text-white">It is a MERN stack web application where you can order watch  items online easily. If you click on buy now button you will be redirected to login page and after login you can buy products, can see your order as a consumer and you can add, manage product to your shop as an admin.</p>
              </div>
              <div className="d-flex justify-content-around">

                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://watch-shop-app.web.app/">&nbsp;Live&nbsp; </a></button>
                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://github.com/Tanvir0234/watch-shop-app-simple">Client</a></button>
                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://github.com/Tanvir0234/watch-shop-server">Server</a></button>



              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark project border-success h-100">
              <img src={img1} className="card-img-top image-align p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">Tourism Agency App</h5>
                <p className="card-text text-white">It is a MERN stack web application where you can book a tour  plan online easily. If you click on book now button you will be redirected to login page and after login you can order tour plan, can see your order as a consumer and you can add, manage product to your tourism as an admin.</p>
              </div>
              <div className="d-flex justify-content-around">

                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://tourist-service-app.web.app/">&nbsp;Live&nbsp; </a></button>
                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://github.com/Tanvir0234/tourism-service-client">Client</a></button>
                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://github.com/Tanvir0234/tourism-service-server">Server</a></button>



              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark project border-success h-100">
              <img src={img2} className="card-img-top image-align p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">Dental Clinic App</h5>
                <p className="card-text text-white">It is a Simple react web application where you can book dental  tratment online easily. If you click on buy now button you will be redirected to login page and after login you can book the dental tratment.</p>
              </div>
              <div className="d-flex justify-content-around">

                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://dental-clinic-app-a682a.web.app">&nbsp;Live&nbsp; </a></button>
                <button type="button" className="btn btn-outline-success mb-2"><a className="anchor-btn" href="https://github.com/Tanvir0234/dental-clinic-system">Client</a></button>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Project;

