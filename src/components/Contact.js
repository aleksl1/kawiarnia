import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { ReactComponent as PhoneIcon } from "../assets/images/call_black_24dp.svg";
import { ReactComponent as MailIcon } from "../assets/images/markunread_black_24dp.svg";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Kontakt</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-info-adress-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-info-adress">
            <span>ul. Zimowit 42,</span>
            <span>35-605 Rzeszów</span>
          </div>
          <div className="contact-info-phone-icon">
            {" "}
            <PhoneIcon />
          </div>

          <div className="contact-info-phone">
            <span>+48 506 900 590</span>
          </div>
          <div className="contact-info-email-icon">
            <MailIcon />
          </div>
          <div className="contact-info-email">
            <span>office@tituto.com</span>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.419215492006!2d22.016577615871377!3d50.00349732734928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa146f814c69%3A0x7f96b305a069712f!2sZimowit%2042%2C%2035-605%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1646065005135!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
