import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./PlayerCard.css";

function PlayerCard({ player, isFavorite, onToggleFavorite }) {

    return (

        <div className="player-card">

            <div className="player-image">

                {/* Player image / placeholder */}

                <div className="image-placeholder">
                    🏏
                </div>


                {/* Favorite Button */}

                <button
                    type="button"
                    className="favorite-btn"
                    onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        onToggleFavorite(player.id);
                    }}
                >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>

            </div>


            {/* Player Information */}

            <Link
                to={`/players/${player.id}`}
                className="player-card-link"
            >

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

            </Link>

        </div>

    );
}

export default PlayerCard;