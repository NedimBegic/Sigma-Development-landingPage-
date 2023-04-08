import styleOffer from "./Offer.module.css";

const Offer = (props) => {
  let classes = props.className + " " + styleOffer.card;
  return (
    <div className={classes}>
      <h3>{props.heading}</h3>
      {props.children}
      <h4>{props.price} EUR / MONTH</h4>
    </div>
  );
};

export default Offer;
