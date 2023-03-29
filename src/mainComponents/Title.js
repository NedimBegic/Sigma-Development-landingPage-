import styleTitle from "./Title.module.css";
import Square from "../sideComponents/Square";
import kids1 from "../images/kids1.png";
import kids2 from "../images/kids2.png";

const Title = () => {
  return (
    <div className={styleTitle.title}>
      <div className={styleTitle.reach}>
        <h2>Reach the stars&nbsp;</h2>
        <h2>with</h2>
      </div>
      <div className={styleTitle.name}>
        <div className={styleTitle.squaresDiv}>
          <Square className={styleTitle.squares} />
          <Square className={styleTitle.squares} />
          <Square className={styleTitle.squares} />
        </div>
        <div className={styleTitle.reach}>
          <h1>SIGMA&nbsp;</h1>
          <h1>DEVELOPMENT</h1>
        </div>
        <div className={styleTitle.squaresDiv}>
          <Square className={styleTitle.squares} />
          <Square className={styleTitle.squares} />
          <Square className={styleTitle.squares} />
        </div>
      </div>
      <div className={styleTitle.images}>
        <img className={styleTitle.upperImage} src={kids1} alt="kids1" />
        <img src={kids2} alt="kids2" />
      </div>
    </div>
  );
};

export default Title;
