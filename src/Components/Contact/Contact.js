import React from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {

    const sendEmail= e =>{
        e.preventDefault();
        emailjs.sendForm('service_pzj8tsm', 'template_e67iu8w', e.target, 'user_eRsxtt7Zfo1IDheRFhlhs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div className="container" id="contact">
            <h1 className="text-white text-center fw-bold mt-5">Contact Me</h1>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-lg-8 col-sm-12 form-group mx-auto my-2 ">
                        <input type="text" className="form-control bg-dark text-white" placeholder="Name" name="name" />
                    </div>
                    <div className="col-lg-8  col-sm-12 form-group mx-auto">
                        <input type="email" className="form-control bg-dark text-white" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-lg-8  col-sm-12 form-group mx-auto my-2">
                        <input type="text" className="form-control bg-dark text-white" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-lg-8  col-sm-12 form-group mx-auto">
                        <textarea type="text" className="form-control bg-dark text-white" cols="30" rows="8" placeholder="Description" name="description" ></textarea>
                    </div>
                    <div className="col-lg-8  col-sm-12 pt-3 mx-auto my-2">
                        <input type="submit" className="btn btn-success" value='Send Message' />
                    </div>

                </div>
            </form>
            
            

        </div>
    );
};

export default Contact;