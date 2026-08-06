import "./PlayerCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function PlayerCard({ player, isFavorite, onToggleFavorite }) {
  return (
    <div className="player-card">
      <div className="player-image">

        <button
          className="favorite-btn"
          onClick={() => onToggleFavorite(player.id)}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>

        <div className="image-placeholder">
          🏏
        </div>

      </div>

      <div className="player-card-body">

        <h2 className="player-name">
          {player.name}
        </h2>

        <span className="player-team">
          {player.team}
        </span>

        <p className="player-role">
          {player.role}
        </p>

        <div className="player-stats">

          <div className="stat">
            <span>Matches</span>
            <strong>{player.matches}</strong>
          </div>

          <div className="stat">
            <span>Runs</span>
            <strong>{player.runs}</strong>
          </div>

          <div className="stat">
            <span>Wickets</span>
            <strong>{player.wickets}</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PlayerCard;