import styleTeam from "./Team.module.css";
import Memember from "../sideComponents/Memember";
import member from "../images/member.png";
import ahmed from "../images/ahmed.jpg";
import meho from "../images/meho.jpg";
import haris from "../images/haris.jpg";
import Square from "../sideComponents/Square";

const Team = () => {
  return (
    <div className={styleTeam.team}>
      <div className={styleTeam.heading}>
        <h2>MEET THE &nbsp;</h2>
        <h2>TEAM</h2>
      </div>
      <div className={styleTeam.memberDiv}>
        <Memember
          memberImg={ahmed}
          lastName={"Gluhić"}
          firstName={"Ahmed"}
          profession={"Founder / CEO"}
          li={"https://www.linkedin.com/in/ahmed-gluhi%C4%87-3a9780267/"}
          fbHref="https://www.facebook.com/profile.php?id=100077656403374"
        />
        <Memember
          memberImg={meho}
          lastName={"Holjan"}
          firstName={"Meho"}
          profession={"Web Developer"}
          fbHref="https://www.facebook.com/meho.holjan"
          li="https://www.linkedin.com/in/meho-holjan-561464240/"
          twiterHref="https://twitter.com/Holjan_Meho?fbclid=IwAR3Rl9j0jBbduP53ZS8200OmDeBTuKVJt7YMpb5e-JxJYfLOcsXjM2L_N8Q"
        />
        <Memember
          memberImg={member}
          lastName={"Nedim"}
          firstName={"Begić"}
          profession={"Web Developer"}
          fbHref="https://www.facebook.com/nedim.b.begic"
        />
        <Memember
          memberImg={haris}
          lastName={"Husagić"}
          firstName={"Haris"}
          profession={"Web Developer"}
          fbHref="https://www.facebook.com/haris.husagic"
          li="https://www.linkedin.com/in/haris-husagic/"
        />
      </div>
      <Square className={`${styleTeam.square} ${styleTeam.s1}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s2}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s3}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s4}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s5}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s6}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s7}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s8}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s9}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s10}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s11}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s12}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s13}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s14}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s15}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s16}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s17}`} />
      <Square className={`${styleTeam.square} ${styleTeam.s18}`} />
    </div>
  );
};

export default Team;
