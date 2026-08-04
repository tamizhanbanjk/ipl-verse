import "./TeamDetails.css";

import { useParams, Link } from "react-router-dom";

import teams from "../../data/teams";
import teamLogos from "../../assets/logos/teamLogos";

import InfoRow from "../../components/InfoRow/InfoRow";
import Button from "../../components/Button/Button";

function TeamDetails() {

  const { id } = useParams();

  const selectedTeam = teams.find(
    (team) => team.id === Number(id)
  );

  if (!selectedTeam) {
    return <h2>Team Not Found</h2>;
  }

  return (

    <section className="team-details">

      <div className="team-details-card">

        {/* ================= Header ================= */}

        <div
          className="team-details-header"
          style={{
            background: `linear-gradient(
              135deg,
              ${selectedTeam.primaryColor},
              #111827
            )`,
          }}
        >

          <img
            src={teamLogos[selectedTeam.shortName]}
            alt={selectedTeam.name}
            className="team-details-logo"
          />

          <h1 className="team-details-name">
            {selectedTeam.name}
          </h1>

          <span className="team-details-badge">
            {selectedTeam.shortName}
          </span>

        </div>

        {/* ================= Information ================= */}

        <div className="team-details-content">

          <InfoRow
            icon="👨"
            label="Captain"
            value={selectedTeam.captain}
          />

          <InfoRow
            icon="🎯"
            label="Coach"
            value={selectedTeam.coach}
          />

          <InfoRow
            icon="🏆"
            label="Titles"
            value={selectedTeam.titles}
          />

          <InfoRow
            icon="📍"
            label="Home Ground"
            value={selectedTeam.homeGround}
          />

        </div>

        {/* ================= Footer ================= */}

        <div className="team-details-footer">

          <Link to="/teams">

            <Button
              text="← Back to Teams"
              variant="primary"
            />

          </Link>

        </div>

      </div>

    </section>

  );
}

export default TeamDetails;