import styleOffers from "./Offers.module.css";
import Square from "../sideComponents/Square";
import Offer from "../sideComponents/Offer";

const Offers = () => {
  return (
    <div className={styleOffers.sectionOffer}>
      <div className={styleOffers.heading}>
        <div className={styleOffers.squaresDiv}>
          <Square className={styleOffers.nineth} />
          <Square className={styleOffers.eighth} />
          <Square className={styleOffers.seventh} />
          <Square className={styleOffers.sixth} />
          <Square className={styleOffers.fifth} />
          <Square className={styleOffers.fourth} />
          <Square className={styleOffers.third} />
          <Square className={styleOffers.second} />
          <Square className={styleOffers.first} />
        </div>

        <div className={styleOffers.titleDiv}>
          <h2>OUR&nbsp;</h2>
          <h2>OFFERS</h2>
        </div>
        <div className={styleOffers.squaresDiv}>
          <Square className={styleOffers.first} />
          <Square className={styleOffers.second} />
          <Square className={styleOffers.third} />
          <Square className={styleOffers.fourth} />
          <Square className={styleOffers.fifth} />
          <Square className={styleOffers.sixth} />
          <Square className={styleOffers.seventh} />
          <Square className={styleOffers.eighth} />
          <Square className={styleOffers.nineth} />
        </div>
      </div>
      <div className={styleOffers.pacagesDiv}>
        <Offer heading={"Startup package"} price={"236"}>
          {
            <ul>
              <li>Website / template / 5 pages</li>
              <li>Domain name</li>
              <li>Hosting</li>
              <li>
                Posting and creating content on social media (5 post per week)
              </li>
              <li>Backup maintenance (4 times monthly) </li>
            </ul>
          }
        </Offer>
        <Offer
          className={styleOffers.secondOffer}
          heading={"Ultra package"}
          price={"1218"}
        >
          {
            <ul>
              <li>Website / front-end, back-end/10 pages</li>
              <li>Hosting</li>
              <li>Domain</li>
              <li>
                Posting and creating content onsocial media / 20 posts per month
              </li>
              <li>Copywriting on websites andsocial media </li>
              <li>Blog / 30 posts per month</li>
              <li>Custom UI Design </li>
              <li>UX research</li>
            </ul>
          }
        </Offer>
        <Offer heading={"Business package"} price={"465"}>
          {
            <ul>
              <li>Website (8 pages)</li>
              <li>Domain name</li>
              <li>Hosting</li>
              <li>
                Posting and creating content onsocial media / 20 posts per week
              </li>
              <li>Backup maintenance (6 times monthly) </li>
              <li>Copywriting on websites andsocial media </li>
              <li>UI Design </li>
            </ul>
          }
        </Offer>
      </div>
    </div>
  );
};

export default Offers;
