
import "./TeamCard.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Button from "../Button/Button";
import InfoRow from "../InfoRow/InfoRow";
import teamLogos from "../../assets/logos/teamLogos";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function TeamCard({  team, isFavorite, onToggleFavorite }) {
  return (
    <motion.div
      className="team-card"
    variants={cardVariants}
    style={{
        borderTop: `6px solid ${team.primaryColor}`,
        borderBottom: `6px solid ${team.primaryColor}`,
    }}
    onAnimationStart={() => console.log("Start:", team.name)}
    >

      {/* ================= Header ================= */}

      <div
        className="team-card-header"
        style={{
          background: `linear-gradient(135deg, ${team.primaryColor}, #111827)`,
        }}
      >
        <img
          src={teamLogos[team.shortName]}
          alt={team.name}
          className="team-card-logo"
        />


        <button
            className="favorite-btn"
            onClick={() => onToggleFavorite(team.id)}
>
             {isFavorite ? (
            <FaHeart />
            ) : (
            <FaRegHeart />
            )}
      </button>

      </div>

      

      {/* ================= Body ================= */}

      <div className="team-card-body">

        <h2 className="team-name">
          {team.name}
        </h2>

        <span className="team-badge">
          {team.shortName}
        </span>

        <InfoRow
          icon="👨"
          label="Captain"
          value={team.captain}
        />

        <InfoRow
          icon="🏆"
          label="Titles"
          value={team.titles}
        />

        <div className="team-card-actions">
          <Link to={`/teams/${team.id}`}>
            <Button
              text="View Details"
              variant="primary"
            />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default TeamCard;