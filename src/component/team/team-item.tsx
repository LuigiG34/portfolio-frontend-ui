import { Link } from "react-router-dom";
import type { ITeamDT } from "../../types/team-d-t";

// prop type 
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item, handleTeamModal }: IProps) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-hover-btn-item">
        <img src={item.image} alt="team-img" />
      </div>
      <div className="tp-team-content">
        <span>{item.designation}</span>
        <h4
          className="tp-team-title-sm"
          onClick={() => handleTeamModal(item)}
        >
          <Link to={`/team-details/${item.id}`}>{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
