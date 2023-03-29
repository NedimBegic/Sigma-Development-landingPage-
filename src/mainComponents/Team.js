import styleTeam from "./Team.module.css";
import Memember from "../sideComponents/Memember";
import member from "../images/member.png";

const Team = () => {
  return (
    <div className={styleTeam.team}>
      <div className={styleTeam.heading}>
        <h2>MEET THE &nbsp;</h2>
        <h2>TEAM</h2>
      </div>
      <div className={styleTeam.memberDiv}>
        <Memember
          memberImg={member}
          lastName={"Gluhić"}
          firstName={"Ahmed"}
          profession={"Founder / CEO"}
        />
        <Memember
          memberImg={member}
          lastName={"Gluhić"}
          firstName={"Ahmed"}
          profession={"Founder / CEO"}
        />
        <Memember
          memberImg={member}
          lastName={"Gluhić"}
          firstName={"Ahmed"}
          profession={"Founder / CEO"}
        />
        <Memember
          memberImg={member}
          lastName={"Gluhić"}
          firstName={"Ahmed"}
          profession={"Founder / CEO"}
        />
      </div>
    </div>
  );
};

export default Team;
