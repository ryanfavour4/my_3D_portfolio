import React from "react";
import "../styles/Contact.css";
import Form from "../components/contactComponents/Form";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  return (
    <>
    <ToastContainer />
      <div className="Contacts">
        <div className="container">
          <div className="Contacts_flex2_form_3d">
            <div className="Contacts_form_parent">
              <Form />
            </div>
            <div className="Contacts_3d_parent">
              <div className="cube-loader">
                <div className="cube-top"></div>
                <div className="cube-wrapper">
                  <span
                    style={{ "--i": 0 } as React.CSSProperties}
                    className="cube-span"
                  ></span>
                  <span
                    style={{ "--i": 1 } as React.CSSProperties}
                    className="cube-span"
                  ></span>
                  <span
                    style={{ "--i": 2 } as React.CSSProperties}
                    className="cube-span"
                  ></span>
                  <span
                    style={{ "--i": 3 } as React.CSSProperties}
                    className="cube-span"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FollowMe />
      <Footer />
    </>
  );
}

export default Contact;
