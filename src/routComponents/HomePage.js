import Title from "../mainComponents/Title";
import Info from "../mainComponents/Info";
import Offers from "../mainComponents/Offers";
import Team from "../mainComponents/Team";
import Contact from "../mainComponents/Contact";
import Line from "../mainComponents/Line";
import styleHomePage from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <Title />
      <Line className={styleHomePage.firstLine} />
      <Info />
      <Line className={styleHomePage.secondLine} />
      <Offers />
      <Line />
      <Team />
      <Line />
      <Contact />
    </div>
  );
};

export default HomePage;
