import styleInfo from "./Info.module.css";
import Square from "../sideComponents/Square";
import leftPerson from "../images/leftPerson.png";
import rightPerson from "../images/rightPerson.png";

const Info = () => {
  return (
    <div className={styleInfo.info}>
      <img src={leftPerson} alt="leftPerson" />
      <div className={styleInfo.headingDiv}>
        <div className={styleInfo.heading}>
          <Square className={styleInfo.square} />
          <div className={styleInfo.headingTitle}>
            <h2>WHAT IS SIGMA&nbsp;</h2>
            <h2 style={{ color: "#4e9f3d" }}>DEVELOPMENT</h2>
            <h2>?</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          suscipit nibh nec elementum blandit. Nam pulvinar ut sapien sit amet
          feugiat. Nam id tristique nulla. Aliquam semper ligula velit, id
          accumsan odio semper ac.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          suscipit nibh nec elementum blandit. Nam pulvinar ut sapien sit amet
          feugiat. Nam id tristique nulla. Aliquam semper ligula velit, id
          accumsan odio semper ac.
        </p>
      </div>
      <img src={rightPerson} alt="rightPerson" />
    </div>
  );
};

export default Info;
