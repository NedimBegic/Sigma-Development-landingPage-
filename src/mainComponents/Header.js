import styleHeader from "./Header.module.css";
import video from "../clip.mp4";

const Header = () => {
  return (
    <div className={styleHeader.header}>
      <video autoPlay muted loop>
        <source src={video}></source>
      </video>
      <div className={styleHeader.title}>
        <h3>Sigma</h3>
        <h3>Development</h3>
      </div>
    </div>
  );
};

export default Header;
