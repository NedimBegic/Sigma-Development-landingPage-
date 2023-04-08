import styleOffer from "./Offer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

const Offer = (props) => {
  let classes = props.className + " " + styleOffer.card;
  return (
    <div className={classes}>
      <h3>{props.heading}</h3>
      {props.children}
      <h4>
        {props.price}{" "}
        <FontAwesomeIcon icon={faEuroSign} style={{ color: "gold" }} /> / MONTH
      </h4>
    </div>
  );
};

export default Offer;
