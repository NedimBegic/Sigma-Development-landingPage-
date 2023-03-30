import styleFooter from "./Footer.module.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className={styleFooter.footer}>
      <div className={styleFooter.heading}>
        <img src={logo} alt="logo" />
        <h4>SIGMA DEVELOPMENT</h4>
        <span>ulica Alije Izetbegovića 35</span>
      </div>
      <div className={styleFooter.divs}>
        <div className={styleFooter.links}>
          <h6>Links</h6>
          <a href="#">Homepage</a>
          <a href="#">Offer Description</a>
          <a href="#">Blog</a>
        </div>
        <div className={styleFooter.links}>
          <h6>Social Media</h6>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className={styleFooter.links}>
          <h6>Contact</h6>
          <span>+387 60 306 8632</span>
          <span>ag@sigmadev.net</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
