import styleSquare from "./Square.module.css";

const Square = (props) => {
  let classes = props.className + " " + styleSquare.div;
  return <div className={classes}></div>;
};

export default Square;
