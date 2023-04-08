import styleContact from "./Contact.module.css";
import Map from "../sideComponents/Map";
import insta from "../images/insta.png";
import fb from "../images/fb.png";
import link from "../images/link.png";
import twiter from "../images/twiter.png";
import bike from "../images/bike.png";
import Square from "../sideComponents/Square";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vlan1v4",
        "template_sc37x1o",
        form.current,
        "3-io-zQlRB8FISNHb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className={styleContact.heading}>
        <h2>Contact&nbsp;</h2>
        <h2>us</h2>
      </div>
      <div className={styleContact.messageAndMap}>
        <Square className={styleContact.square} />

        <div className={styleContact.message}>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Full name" />
            <input type="text" name="email" placeholder="E-mail" />
            <textarea
              name="message"
              rows="10"
              cols="20"
              placeholder="Message"
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <img className={styleContact.bike} src={bike} alt="bike" />
        <Map />
      </div>
      <div className={styleContact.socialDiv}>
        <div className={styleContact.greenLine}></div>
        <div className={styleContact.socialLinks}>
          <a href="#">
            <img src={insta} alt="instagram" />
          </a>
          <a href="#">
            <img src={fb} alt="facebook" />
          </a>
          <a href="#">
            <img src={link} alt="linkedIn" />
          </a>
          <a href="#">
            <img src={twiter} alt="twiter" />
          </a>
        </div>
        <div>
          <p>WORKING HOURS:</p>
          <p>Monday - Friday / 8:30 - 16:30</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
