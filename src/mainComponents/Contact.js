import styleContact from "./Contact.module.css";
import Map from "../sideComponents/Map";
import insta from "../images/insta.png";
import fb from "../images/fb.png";
import link from "../images/link.png";
import twiter from "../images/twiter.png";

const Contact = () => {
  return (
    <div>
      <div className={styleContact.heading}>
        <h2>Contact&nbsp;</h2>
        <h2>us</h2>
      </div>
      <div className={styleContact.messageAndMap}>
        <div className={styleContact.message}>
          <form>
            <input type="text" name="name" placeholder="Full name" />
            <input type="text" name="email" placeholder="E-mail" />
            <textarea rows="10" cols="20" placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
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
