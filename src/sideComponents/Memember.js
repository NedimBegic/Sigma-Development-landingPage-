import styleMemember from "./Memember.module.css";
import link from "../images/link.png";
import insta from "../images/insta.png";
import fb from "../images/fb.png";
import twiter from "../images/twiter.png";

const Memember = (props) => {
  return (
    <div className={styleMemember.member}>
      <div className={styleMemember.image}>
        <img src={props.memberImg} alt="member" />
        <div className={styleMemember.icons}>
          <a href={props.li}>
            <img src={link} alt="linkedIn" />
          </a>
          <a href={props.instaHref}>
            <img src={insta} alt="instagram" />
          </a>
          <a href={props.fbHref}>
            <img src={fb} alt="facebook" />
          </a>
          <a href={props.twiterHref}>
            <img src={twiter} alt="twiter" />
          </a>
        </div>
      </div>
      <div className={styleMemember.name}>
        <h4>{props.lastName}&nbsp;</h4>
        <h4>{props.firstName}</h4>
      </div>
      <h4>{props.profession}</h4>
    </div>
  );
};

export default Memember;
